<?php

namespace SaltedHerring\Layout;

use Page;

use SaltedHerring\Model\NewsItem;
use SaltedHerring\Model\Slider;

use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldToolbarHeader;
use SilverStripe\Forms\GridField\GridFieldSortableHeader;
use SilverStripe\Forms\GridField\GridFieldDataColumns;
use SilverStripe\Forms\GridField\GridFieldEditButton;
use SilverStripe\Forms\GridField\GridFieldAddNewButton;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\GridField\GridFieldDetailForm;
use SilverStripe\Forms\GridField\GridFieldFilterHeader;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\GridField\GridField;
use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;

class HomePage extends Page
{
    private static $db = array(
    );

    private static $has_one = array(
    );

    private static $has_many = array(
        'NewsItems' => NewsItem::class
    );

    private static $table_name = 'HomePage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName([
            'Content'
        ]);

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

        $add->setButtonName('Add Slide');

        $gridfield = new GridField("Slides", "Slides", Slider::get(), $gridFieldConfig);
        $fields->addFieldToTab('Root.Slides', $gridfield);

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

        $add->setButtonName('Add News');

        $gridfield = new GridField("News", "News", $this->NewsItems(), $gridFieldConfig);
        $fields->addFieldToTab('Root.News', $gridfield);

        return $fields;
    }
}
