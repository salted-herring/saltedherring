<?php

namespace SaltedHerring\Model;

use Page;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Project;
use SaltedHerring\Model\Colour;
use SaltedHerring\Model\Media\SliderImage;

use SilverStripe\Assets\Image;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\DropdownField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldToolbarHeader;
use SilverStripe\Forms\GridField\GridFieldSortableHeader;
use SilverStripe\Forms\GridField\GridFieldDataColumns;
use SilverStripe\Forms\GridField\GridFieldEditButton;
use SilverStripe\Forms\GridField\GridFieldAddNewButton;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\GridField\GridFieldDetailForm;
use SilverStripe\Forms\GridField\GridFieldFilterHeader;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\ToggleCompositeField;

use Exception;

class Slider extends BaseDBO
{
    private static $db = array(
        'Header'          => 'Varchar(100)',
        'Keyword'         => 'Varchar(50)',
        'Description'     => 'Varchar(100)',
        'LinkDescription' => 'Varchar(100)',
        'LinkTitle'       => 'Varchar(100)',
        'Explanation'     => 'Text',
        'SubTitle'        => 'Varchar(100)',
        'SubExplanation'  => 'Text',
        'AltForImage'     => 'Varchar(100)'
    );

    private static $has_one = array(
        'Link'            => Page::class,
        'OverlayImage'    => Image::class,
        'Colour'          => Colour::class
    );

    private static $has_many = array(
        'Images'          => SliderImage::class
    );

    private static $owns = [ 'Images' ];

    private static $table_name = 'Slider';

    private static $single_name = 'Slide';
    private static $plural_name = 'Slides';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('Images');
        $fields->removeByName('Main');



        $header = new TextField('Header');
        $keyword = new TextField('Keyword');
        $title = new TextField('Title');
        $description = new TextField('Description');
        $explanation = new TextareaField('Explanation');
        $subTitle = new TextField('SubTitle');
        $subExplanation = new TextareaField('SubExplanation');
        $link = new DropdownField("LinkID", "Link", SiteTree::get()->map('ID', 'Title'));
        $linkDescription = new TextField('LinkDescription', 'Link Description');
        $overlay = new UploadField('OverlayImage', 'Overlay Image');
        $project = new DropdownField("ProjectID", "Project", ProjectPage::get()->map('ID', 'Title'));

        $project->setEmptyString('(Choose) …');
        $link->setEmptyString('(Choose) …');

        $gridFieldConfig = GridFieldConfig::create()->addComponents(
            new GridFieldToolbarHeader(),
            new GridFieldSortableHeader(),
            new GridFieldDataColumns(),
            new GridFieldEditButton(),
            new GridFieldAddNewButton(),
            new GridFieldDeleteAction(),
            new GridFieldDetailForm(),
            new GridFieldFilterHeader()
        );

        if ($this->ID) {
            $gridFieldConfig->addComponents(new GridFieldOrderableRows('SortOrder'));
        }

        $gridfield = new GridField("Images", "Images", $this->Images(), $gridFieldConfig);

        $imgalt = new TextField('AltForImage', 'Alt text for this slide\'s images');

        $fields->addFieldsToTab('Root.Content', array(
            $header,
            $keyword,
            $title,
            $colour = new DropdownField("ColourID", "Colour", Colour::get()->map('ID', 'Name')),
            $description,
            $link,
            $linkDescription,
            $explanation,
            $subTitle,
            $subExplanation,
            $overlay,
            $imgalt,
            $gridfield
        ));

        $colour->setEmptyString('(Choose) …');

        $header->setRightTitle('Line of header text at the top of the slide. e.g. Hi There! Welcome to:');
        $keyword->setRightTitle('The large text. e.g. CHOCOLATE');
        $description->setRightTitle('Description of what the slide represents - e.g. The world\'s first chocolate website.');
        $explanation->setRightTitle('Explanation text that explains to the user and seo what they see.');
        $subTitle->setRightTitle('Sub heading within content.');
        $subExplanation->setRightTitle('Second Paragraph.');
        $linkDescription->setRightTitle('Text of the link');
        $link->setRightTitle('A page in the site to link to');
        $title->setRightTitle('e.g. Whittakers\' Chocolate');
        $overlay->setRightTitle('An optional image layer. This image will be used to produce a parallax effect.');

        return $fields;
    }
}
