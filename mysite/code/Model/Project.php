<?php

namespace SaltedHerring\Model;

use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Category;
use SaltedHerring\Model\Client;
use SaltedHerring\Model\ProjectAward;
use SaltedHerring\Model\Service;

use DropDownField;
use Exception;

use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldToolbarHeader;
use SilverStripe\Forms\GridField\GridFieldSortableHeader;
use SilverStripe\Forms\GridField\GridFieldDataColumns;
use SilverStripe\Forms\GridField\GridFieldEditButton;
use SilverStripe\Forms\GridField\GridFieldAddNewButton;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\GridField\GridFieldDetailForm;
use SilverStripe\Forms\GridField\GridFieldFilterHeader;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\ListboxField;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\GridField\GridField;
use Symbiote\GridFieldExtensions\GridFieldAddNewMultiClass;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Control\Director;
use SilverStripe\Assets\Image;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Security\Permission;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\ORM\DataObject;

class Project extends BaseDBO
{
    private static $db = array(
        'TagLine'         => 'Varchar(50)',
        'Quote'           => 'Varchar(255)',
        'Citation'        => 'HTMLVarchar(255)',
        'ProjectInfo'     => 'HTMLText',
        'SiteURL'         => 'Varchar(255)',
        'isPublished'     => 'Boolean',
        'Content'         => 'HTMLText'
    );

    private static $has_one = array(
        'Client'          => Client::class,
        'Colour'          => Colour::class
    );

    private static $has_many = array(
        'ProjectAwards'   => ProjectAward::class,
        'Media'           => BaseMedia::class
    );

    private static $many_many = array(
        'Categories'      => Category::class,
        'Services'        => Service::class,
        'RelatedProjects' => Project::class
    );

    private static $belongs_to = array(
        'Slider'          => Slider::class
    );

    private static $belongs_many_many = array(
        'Project'         => Project::class
    );

    private static $defaults = array(
        'isPublished'     => true
    );

    private static $summary_fields = array(
        'Title',
        'isPublished'
    );

    private static $table_name = 'Project';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('Categories');
        $fields->removeByName('ClientID');
        $fields->removeByName('Services');
        $fields->removeByName('Media');
        $fields->removeByName('ProjectAwards');
        $fields->removeByName('Project');
        $fields->removeByName('RelatedProjects');
// 		$fields->removeByName('Content');

        $gridFieldConfig = GridFieldConfig::create()->addComponents(
            new GridFieldToolbarHeader(),
            new GridFieldSortableHeader(),
            new GridFieldDataColumns(),
            new GridFieldEditButton(),
            $add = new GridFieldAddNewButton(),
            new GridFieldDeleteAction(),
            new GridFieldDetailForm(),
            new GridFieldFilterHeader()
        );

        $add->setButtonName('Add Award');

        $cats = array();

        foreach (Category::get() as $cat) {
            $cats[$cat->ID] = $cat->Name;
        }

        $clients = array();

        foreach (Client::get() as $client) {
            $clients[$client->ID] = $client->Name;
        }

        $services = array();

        foreach (Service::get() as $service) {
            $services[$service->ID] = $service->Name;
        }

        $rel = array();

        foreach (Project::get()->exclude(array('ID' => $this->ID)) as $project) {
            $rel[$project->ID] = $project->Title;
        }

        // Root.Main
        $fields->addFieldsToTab('Root.Main', array(
            $title = new TextField('Title'),
            $tagLine = new TextField('TagLine', 'Tag Line'),
            $quote = new TextareaField('Quote'),
            $cite = new TextField('Citation', 'Source'),
            $categories = $this->ID ? new ListboxField($name = "Categories", $title = "Categories") : new LiteralField('CatWarn', '<p><strong>Categories</strong> can be added once the project has been created</p>'),
            $serv = $this->ID ? new ListboxField($name = "Services", $title = "Services") : new LiteralField('ServiceWarn', '<p><strong>Services</strong> can be added once the project has been created</p>'),
            $client = new DropDownField('ClientID', 'Client', $clients),
            $related = $this->ID ? new ListboxField($name = "RelatedProjects", $title = "Related Projects")  : new LiteralField('RelatedWarn', '<p><strong>Related Projects</strong> can be added once the project has been created</p>'),
        ));

        if ($this->ID) {
            $categories->setSource($cats);
            $categories->setMultiple(true);

            $serv->setSource($services);
            $serv->setMultiple(true);

            $related->setSource($rel);
            $related->setMultiple(true);
        }

        $tagLine->setRightTitle('Short, single line description of project');
        $cite->setRightTitle('Quotation source. Can contain html tags - e.g. to link to twitter etc.');
        $quote->setTitle('Quote - use “ & ” for quote marks.');

        if ($this->ID) {
            // Root.Award
            $fields->addFieldToTab('Root.Awards', new GridField("Awards", "Awards", $this->ProjectAwards(), $gridFieldConfig));

            // Root.Media
            $multiClasses = new GridFieldAddNewMultiClass();
            $multiClasses->setClasses(array('ImageMedia', 'SWFMedia', 'VimeoMedia'));

            $gridFieldConfig = GridFieldConfig::create()->addComponents(
                new GridFieldToolbarHeader(),
                new GridFieldSortableHeader(),
                new GridFieldDataColumns(),
                new GridFieldEditButton(),
                new GridFieldDeleteAction(),
                new GridFieldDetailForm(),
                new GridFieldFilterHeader(),
                new GridFieldOrderableRows('SortOrder'),
                $multiClasses
            );

            $fields->addFieldToTab('Root.Media', new GridField("Media", "Media", $this->Media(), $gridFieldConfig));

            $url = new HiddenField('URLSegment');
            $url->setAttribute('data-prefix', 'http://' . $_SERVER['HTTP_HOST']);
            $url->setAttribute('value', $this->Link());
            $fields->addFieldToTab('Root.Main', $url);
        }

        return $fields;
    }


    public function getURL()
    {
        return '/work/project/' . $this->URLSegment;
    }

    public function AbsoluteLink()
    {
        if (!$this->isPublished) {
            return null;
        }
        return Director::absoluteURL($this->Link());
    }

    public function Link()
    {
        return $this->getURL();
    }

    public function getFirstImage()
    {
        $im = null;
        foreach ($this->Media() as $media) {
            if ($media->getType() == Image::class) {
                return $media;
            }
        }

        return $im;
    }

    public function getAllMedia()
    {
        $curr = $this->getFirstImage();

        if ($curr) {
            return $this->Media()->exclude(array(
                'ID' => $curr->ID
            ));
        }

        return $this->Media;
    }

    public function onBeforeWrite()
    {
        parent::onBeforeWrite();

        if ($this->MetaDescription == null) {
            $this->MetaDescription = $this->Title . ' - ' . $this->TagLine;
        }

        $this->Content = $this->ProjectInfo;

        $dir = ROOT . 'themes/' . SiteConfig::current_site_config()->Theme . '/json/';
        $data = array();

        foreach (Category::get() as $cat) {
            $projects = Project::get()->filter(array('isPublished' => 1))->leftJoin('Project_Categories', 'Project.ID = Project_Categories.ProjectID')->filter('CategoryID', $cat->ID);

            $current = array(
                'Category' => $cat->Title,
                'URLSegment' => $cat->URLSegment,
                'Projects' => array()
            );

            foreach ($projects as $project) {
                array_push($current['Projects'], array(
                    'Title' => $project->Title,
                    'TagLine' => htmlentities($project->TagLine),
                    'URLSegment' => $project->URLSegment
                ));
            }

            try {
                $handle = fopen($dir . $cat->URLSegment . '.json', 'w');
                fwrite($handle, json_encode($current));
                fclose($handle);
            } catch (Exception $e) {
                user_error($e, E_USER_WARNING);
            }
        }

        $all = array();

        foreach (Project::get()->filter(array('isPublished' => 1)) as $project) {
            array_push($all, array(
                'Title' => $project->Title,
                'TagLine' => htmlentities($project->TagLine),
                'URLSegment' => $project->URLSegment
            ));
        }

        try {
            $handle = fopen($dir . 'all.json', 'w');
            fwrite($handle, json_encode($all));
            fclose($handle);
        } catch (Exception $e) {
            user_error($e, E_USER_WARNING);
        }
    }

    public function getValidRelatedProjects()
    {
        return $this->RelatedProjects()->filter(array('isPublished' => 1));
    }

    public function canView($member = null, $context = array())
    {
        if (Permission::check('ADMIN')) {
            return true;
        }
        return $this->isPublished;
    }

    public function getSiteConfig()
    {
        return SiteConfig::current_site_config();
    }
}
