<?php
/**
 * @file ￼TeamMemberPage.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 * A Team Member Page.
 **/
namespace SaltedHerring\Layout;

use Page;

use SaltedHerring\Extensions\SortOrderExtension;
use SaltedHerring\Extensions\ThumbnailDecorator;

use SaltedHerring\Model\Colour;
use SaltedHerring\Model\Media\ImageMedia;

use SilverStripe\Assets\Image;
use SilverStripe\Forms\DropDownField;
use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldAddNewButton;
use SilverStripe\Forms\GridField\GridFieldToolbarHeader;
use SilverStripe\Forms\GridField\GridFieldSortableHeader;
use SilverStripe\Forms\GridField\GridFieldDataColumns;
use SilverStripe\Forms\GridField\GridFieldEditButton;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\GridField\GridFieldDetailForm;
use SilverStripe\Forms\GridField\GridFieldFilterHeader;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\ToggleCompositeField;
use SilverStripe\AssetAdmin\Forms\UploadField;

class TeamMemberPage extends Page
{
    private static $db = [
        'FirstName'        => 'Varchar(35)',
        'LastName'         => 'Varchar(35)',
        'Role'             => 'Varchar(50)',
        'Responsibilities' => 'Text',
        'Intro'            => 'Text',
        'Email'            => 'Varchar(100)',
        'MobileNumber'     => 'Varchar(30)'
    ];

    private static $has_one = [
        'Colour'           => Colour::class,
        'ThumbnailOver'    => Image::class
    ];

    private static $has_many = [
        'Images'           => ImageMedia::class
    ];

    private static $summary_fields = [
        'Title'
    ];

    private static $searchable_fields = [
        'FirstName'
    ];

    private static $owns = [
        'Thumbnail',
        'ThumbnailOver'
    ];

    private static $extensions = [
        ThumbnailDecorator::class,
        SortOrderExtension::class
    ];

    private static $table_name = 'TeamMemberPage';

    private static $show_in_sitetree = false;
    private static $allowed_children = [];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldsToTab(
            'Root.Bio',
            [
                TextField::create('FirstName', 'First Name'),
                TextField::create('LastName', 'Last Name'),
                $colour = new DropdownField("ColourID", "Colour", Colour::get()->map('ID', 'Name')),
                TextField::create('Role', 'Role'),
                TextField::create('Responsibilities', 'Responsibilities')
                    ->setDescription('A comma separated list of responsibilities.'),
                ToggleCompositeField::create('Contact', 'Contact Details', [
                    TextField::create('Email', 'Email'),
                    TextField::create('MobileNumber', 'Mobile')
                ]),
                TextareaField::create('Intro', 'Intro'),
                $fields->fieldByName('Root.Main.Content')
            ]
        );

        if ($this->ID) {
            $gridFieldConfig = GridFieldConfig::create()->addComponents(
                new GridFieldAddNewButton(),
                new GridFieldToolbarHeader(),
                new GridFieldSortableHeader(),
                new GridFieldDataColumns(),
                new GridFieldEditButton(),
                new GridFieldDeleteAction(),
                new GridFieldDetailForm(),
                new GridFieldFilterHeader(),
                new GridFieldOrderableRows('SortOrder')
            );

            $fields->addFieldsToTab('Root.Images', [
                UploadField::create('Thumbnail', 'Thumbnail'),
                UploadField::create('ThumbnailOver', 'Thumbnail Over'),
                GridField::create("Images", "Images", $this->Images(), $gridFieldConfig)
            ]);
        }

        return $fields;
    }
}
