<?php

namespace SaltedHerring\Layout;

use Page;

use SaltedHerring\Model\AboutSection;
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
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
use SilverStripe\Versioned\VersionedGridFieldItemRequest;

class AboutPage extends Page
{
    private static $db = array(
        'PageTitle' => 'Varchar(128)',
        'SubTitle'  => 'Varchar(128)',
        'IntroCopy' => 'Text'
    );

    private static $has_one = array(
    );

    private static $has_many = array(
    );

    private static $table_name = 'AboutPage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('Content');
        $fields->AddFieldToTab('Root.Main', new TextField('PageTitle'));
        $fields->AddFieldToTab('Root.Main', new TextField('SubTitle'));
        $fields->AddFieldToTab('Root.Main', new TextareaField('IntroCopy'));

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

        $gridFieldConfig
            ->getComponentByType(GridFieldDetailForm::class)
            ->setItemRequestClass(VersionedGridFieldItemRequest::class);

        $add->setButtonName('Add sub section');

        $gridfield = new GridField("Subsections", "Sub sections", AboutSection::get(), $gridFieldConfig);
        $fields->addFieldToTab('Root.Subsections', $gridfield);

        return $fields;
    }
}
