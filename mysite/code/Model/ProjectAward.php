<?php

namespace SaltedHerring\Model;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\Award;
use SaltedHerring\Model\Project;

use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\FieldType\DBField;

class ProjectAward extends DataObject
{
    private static $db = array(
        'URL'        => 'Varchar(255)'
    );

    private static $has_one = array(
        'Project'    => Project::class,
        'ProjectPages' => ProjectPage::class,
        'Award'      => Award::class
    );

    private static $has_many = array(
    );

    private static $summary_fields = array(
        'Award.Name' => 'Name',
        'gettheURL'  => 'URL'
    );

    private static $table_name = 'ProjectAward';

    public function gettheURL()
    {
        return DBField::create_field('HTMLVarchar', '<a href="' . $this->URL . '" target="_blank">' . $this->URL . '</a>');
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->removeByName('ProjectID');

        $fields->addFieldsToTab('Root.Main', array(
            $url = new TextField('URL')
        ));

        $url->setRightTitle('This can be the awards site - or even better the link to the project on the awards site.');

        return $fields;
    }

    public function getTitle()
    {
        if ($this->Award()) {
            return $this->Award()->Name;
        }

        return $this->ID;
    }
}
