<?php
/**
 * @file ￼ProjectPage.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 *
 **/
namespace SaltedHerring\Layout;

use Page;

use SaltedHerring\Extensions\SortOrderExtension;
use SaltedHerring\Extensions\ThumbnailDecorator;

use SaltedHerring\Model\Category;
use SaltedHerring\Model\Client;
use SaltedHerring\Model\ProjectAward;
use SaltedHerring\Model\Service;
use SaltedHerring\Model\Colour;
use SaltedHerring\Model\Media\BaseMedia;
use SaltedHerring\Model\Media\ImageMedia;
use SaltedHerring\Model\Media\SWFMedia;
use SaltedHerring\Model\Media\VimeoMedia;

use Heyday\ColorPalette\Fields\ColorPaletteField;

use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Control\Controller;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldAddExistingAutocompleter;
use SilverStripe\Forms\GridField\GridFieldButtonRow;
use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
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
use SilverStripe\Forms\DropDownField;
use SilverStripe\Forms\Tab;
use Symbiote\GridFieldExtensions\GridFieldAddNewMultiClass;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Control\Director;
use SilverStripe\Assets\Image;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Security\Permission;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\ORM\DataObject;

class ProjectPage extends Page
{
    private static $db = [
        'TagLine'         => 'Varchar(50)',
        'Quote'           => 'Varchar(255)',
        'Citation'        => 'HTMLVarchar(255)',
        'ProjectInfo'     => 'HTMLText',
        'SiteURL'         => 'Varchar(255)'
    ];

    private static $has_one = [
        'Client'          => Client::class,
        'Colour'          => Colour::class
    ];

    private static $has_many = [
        'ProjectAwards'   => ProjectAward::class,
        'ProjectPages'    => ProjectPage::class,
        'Media'           => BaseMedia::class
    ];

    private static $many_many = [
        'Categories'      => Category::class,
        'Services'        => Service::class,
        'RelatedProjects' => ProjectPage::class
    ];

    private static $belongs_to = [
        'Slider'          => Slider::class
    ];

    private static $belongs_many_many = [
        'Project'         => 'ProjectPage.RelatedProjects'
    ];

    private static $summary_fields = [
        'Title'
    ];

    private static $extensions = [
        SortOrderExtension::class,
        ThumbnailDecorator::class
    ];

    private static $owns = [ 'Thumbnail' ];

    private static $table_name = 'ProjectPage';

    private static $show_in_sitetree = false;
    private static $allowed_children = [];

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

        $gridFieldConfig = GridFieldConfig_RelationEditor::create();

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

        foreach (ProjectPage::get()->exclude(array('ID' => $this->ID)) as $project) {
            $rel[$project->ID] = $project->Title;
        }

        // Root.Main
        $fields->addFieldsToTab('Root.Main', array(
            $tagLine = new TextField('TagLine', 'Tag Line'),
            $quote = new TextareaField('Quote'),
            $cite = new TextField('Citation', 'Source'),
            TextField::create('SiteURL', 'Website URL')
                ->setDescription('Include http(s)://')
        ), 'OG');

        // $colourVals = Colour::get()->map('Name', 'Value')->toArray();
        //
        // array_walk($colourVals, function (&$value, $key) {
        //     $value = '#' . $value;
        // });
        //
        // $colours = ColorPaletteField::create("Colour", "Colour", $colourVals);
        // $colours->setValue($this->Colour()->Name);

        $fields->addFieldsToTab(
            'Root.Tags',
            [
                $categories = $this->ID ? new ListboxField($name = "Categories", $title = "Categories") : new LiteralField('CatWarn', '<p><strong>Categories</strong> can be added once the project has been created</p>'),
                $serv = $this->ID ? new ListboxField($name = "Services", $title = "Services") : new LiteralField('ServiceWarn', '<p><strong>Services</strong> can be added once the project has been created</p>'),
                $client = new DropDownField('ClientID', 'Client', $clients),
                $related = $this->ID ? new ListboxField($name = "RelatedProjects", $title = "Related Projects")  : new LiteralField('RelatedWarn', '<p><strong>Related Projects</strong> can be added once the project has been created</p>'),
                $colour = new DropdownField("ColourID", "Colour", Colour::get()->map('ID', 'Name'))
            ]
        );

        if ($this->ID) {
            $categories->setSource($cats);
            $serv->setSource($services);
            $related->setSource($rel);
        }

        $tagLine->setDescription('Short, single line description of project');
        $cite->setDescription('Quotation source. Can contain html tags - e.g. to link to twitter etc.');
        $quote->setTitle('Quote - use “ & ” for quote marks.');

        if ($this->ID) {
            // Root.Award
            $fields->addFieldToTab('Root.Awards', new GridField("Awards", "Awards", $this->ProjectAwards(), $gridFieldConfig));
            $multiClasses = new GridFieldAddNewMultiClass();
            // Root.Media
            $gridFieldConfig = GridFieldConfig_RelationEditor::create()
                ->removeComponentsByType(GridFieldAddNewButton::class)
                ->removeComponentsByType(GridFieldAddExistingAutocompleter::class)
                ->removeComponentsByType(GridFieldDeleteAction::class)
                ->addComponents(
                    new GridFieldDeleteAction(),
                    new GridFieldOrderableRows('SortOrder'),
                    $multiClasses->setClasses([
                        ImageMedia::class => 'Image',
                        SWFMedia::class   => 'SWF',
                        VimeoMedia::class => 'Vimeo'
                    ])
                );


            $fields->addFieldsToTab('Root.Media',
                [
                    UploadField::create('Thumbnail', 'Thumbnail'),
                    new GridField("Media", "Media", $this->Media(), $gridFieldConfig)
                ]

            );
        }

        return $fields;
    }

    public function getFirstImage()
    {
        $im = null;
        foreach ($this->Media() as $media) {
            if ($media->getType() == 'Image') {
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

    // public function onBeforeWrite()
    // {
    //     parent::onBeforeWrite();
    //
    //     if ($this->MetaDescription == null) {
    //         $this->MetaDescription = $this->Title . ' - ' . $this->TagLine;
    //     }
    //
    //     $this->Content = $this->ProjectInfo;
    //
    //     $dir = ROOT . 'themes/' . SiteConfig::current_site_config()->Theme . '/json/';
    //     $data = array();
    //
    //     foreach (Category::get() as $cat) {
    //         $projects = Project::get()->filter(array('isPublished' => 1))->leftJoin('Project_Categories', 'Project.ID = Project_Categories.ProjectID')->filter('CategoryID', $cat->ID);
    //
    //         $current = array(
    //             'Category' => $cat->Title,
    //             'URLSegment' => $cat->URLSegment,
    //             'Projects' => array()
    //         );
    //
    //         foreach ($projects as $project) {
    //             array_push($current['Projects'], array(
    //                 'Title' => $project->Title,
    //                 'TagLine' => htmlentities($project->TagLine),
    //                 'URLSegment' => $project->URLSegment
    //             ));
    //         }
    //
    //         try {
    //             $handle = fopen($dir . $cat->URLSegment . '.json', 'w');
    //             fwrite($handle, json_encode($current));
    //             fclose($handle);
    //         } catch (Exception $e) {
    //             user_error($e, E_USER_WARNING);
    //         }
    //     }
    //
    //     $all = array();
    //
    //     foreach (Project::get()->filter(array('isPublished' => 1)) as $project) {
    //         array_push($all, array(
    //             'Title' => $project->Title,
    //             'TagLine' => htmlentities($project->TagLine),
    //             'URLSegment' => $project->URLSegment
    //         ));
    //     }
    //
    //     try {
    //         $handle = fopen($dir . 'all.json', 'w');
    //         fwrite($handle, json_encode($all));
    //         fclose($handle);
    //     } catch (Exception $e) {
    //         user_error($e, E_USER_WARNING);
    //     }
    // }

    // public function getValidRelatedProjects()
    // {
    //     return $this->RelatedProjects()->filter(array('isPublished' => 1));
    // }
    //
    // public function canView($member = null, $context = array())
    // {
    //     if (Permission::check('ADMIN')) {
    //         return true;
    //     }
    //     return $this->isPublished;
    // }

    public function getSiteConfig()
    {
        return SiteConfig::current_site_config();
    }
}
