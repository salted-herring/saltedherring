<?php

namespace SaltedHerring\Layout;

use Page;

use SaltedHerring\Model\Block;
use SaltedHerring\Model\Colour;

// use SaltedHerring\Model\AboutSection;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldToolbarHeader;
use SilverStripe\Forms\GridField\GridFieldSortableHeader;
use SilverStripe\Forms\GridField\GridFieldDataColumns;
use SilverStripe\Forms\GridField\GridFieldEditButton;
use SilverStripe\Forms\GridField\GridFieldAddNewButton;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\GridField\GridFieldDetailForm;
use SilverStripe\Forms\GridField\GridFieldFilterHeader;
use SilverStripe\AssetAdmin\Forms\UploadField;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
use SilverStripe\Versioned\VersionedGridFieldItemRequest;
use SilverStripe\Assets\Image;

class AboutSectionPage extends Page
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

    private static $table_name = 'AboutSectionPage';

    private static $show_in_sitetree = false;
    private static $allowed_children = [];

    public function getLeft()
    {
        $Blocks = $this->Blocks()->filter(array('Col'=>'left'));
        if ($Blocks) {
            return $Blocks;
        }
        return false;
    }

    public function getRight()
    {
        $Blocks = $this->Blocks()->filter(array('Col'=>'right'));
        if ($Blocks) {
            return $Blocks;
        }
        return false;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->removeByName('Content');

        $fields->AddFieldToTab('Root.Main', new TextField('SectionSubTitle'), 'URLSegment');

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

        $fields->AddFieldsToTab('Root.Media', [
            DropdownField::create(
                'ColourID',
                'Colour',
                Colour::get()->map()
            ),
            UploadField::create(
                'Thumbnail',
                'Thumbnail'
            ),
            UploadField::create(
                'HeroImage',
                'Hero Image'
            )
        ]);

        return $fields;
    }
}
