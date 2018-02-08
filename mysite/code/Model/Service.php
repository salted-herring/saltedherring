<?php

namespace SaltedHerring\Model;

use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Project;

class Service extends BaseDBO
{
    private static $db = array(
        'Name'     => 'Varchar(255)'
    );

    private static $summary_fields = array(
        'Name'
    );

    private static $table_name = 'Service';

    private static $belongs_many_many = array(
        'Projects' => Project::class
    );

    public function getTitle()
    {
        return $this->Name;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('Projects');

        $fields->removeFieldFromTab('Root.Main', 'Title');

        return $fields;
    }
}
