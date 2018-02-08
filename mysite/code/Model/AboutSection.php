<?php

namespace SaltedHerring\Model;

use SaltedHerring\Extensions\SortOrderExtension;
use SaltedHerring\Extensions\URLExtension;
use SaltedHerring\Model\Block;
use SaltedHerring\Model\Colour;

use SilverStripe\Assets\Image;
use SilverStripe\Control\Director;
use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldToolbarHeader;
use SilverStripe\Forms\GridField\GridFieldSortableHeader;
use SilverStripe\Forms\GridField\GridFieldDataColumns;
use SilverStripe\Forms\GridField\GridFieldEditButton;
use SilverStripe\Forms\GridField\GridFieldAddNewButton;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\GridField\GridFieldDetailForm;
use SilverStripe\Forms\GridField\GridFieldFilterHeader;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\ORM\DataObject;
use SilverStripe\Security\Permission;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Versioned\Versioned;

use Symbiote\GridFieldExtensions\GridFieldOrderableRows;

class AboutSection extends DataObject
{
    private static $db = [
        'SectionSubTitle' => 'Varchar(128)'
    ];

    private static $has_one = [
        'Colour'    => Colour::class,
        'Thumbnail' => Image::class,
        'HeroImage' => Image::class
    ];

    private static $has_many = [
        'Blocks'    => Block::class
    ];

    private static $extensions = [
        SortOrderExtension::class,
        URLExtension::class,
        Versioned::class
    ];

    private static $versioned_gridfield_extensions = true;

    private static $table_name = 'AboutSection';

    public function getLeft()
    {
        $Blocks = $this->Blocks()->filter(array('Col'=>'left','isPublished'=>true));
        if ($Blocks) {
            return $Blocks;
        }
        return false;
    }

    public function getRight()
    {
        $Blocks = $this->Blocks()->filter(array('Col'=>'right','isPublished'=>true));
        if ($Blocks) {
            return $Blocks;
        }
        return false;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $gridFieldConfig = GridFieldConfig::create()->addComponents(
            new GridFieldToolbarHeader(),
            new GridFieldSortableHeader(),
            new GridFieldDataColumns(),
            new GridFieldEditButton(),
            $add = new GridFieldAddNewButton(),
            new GridFieldDeleteAction(),
            new GridFieldDetailForm(),
            new GridFieldFilterHeader(),
            new GridFieldOrderableRows('SortOrder')
        );

        $add->setButtonName('Add block');

        $gridfield = new GridField("Blocks", "Blocks", $this->Blocks(), $gridFieldConfig);
        $fields->addFieldToTab('Root.Blocks', $gridfield);

        return $fields;
    }

    public function onBeforeWrite()
    {
        parent::onBeforeWrite();

        if ($this->MetaDescription == null) {
            $this->MetaDescription = $this->Title;
        }
    }

    public function AbsoluteLink()
    {
        return Director::absoluteURL($this->Link());
    }

    public function Link()
    {
        return '/about/' . $this->URLSegment;
    }

    public function getSiteConfig()
    {
        return SiteConfig::current_site_config();
    }

    public function canView($member = null, $context = array())
    {
        if (Permission::check('ADMIN')) {
            return true;
        }
        return $this->isPublished;
    }
}
