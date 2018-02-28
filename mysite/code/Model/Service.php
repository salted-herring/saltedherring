<?php

namespace SaltedHerring\Model;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Project;

class Service extends BaseDBO
{
    private static $db = array(
        'Name'     => 'Varchar(255)'
    );

    private static $table_name = 'Service';

    private static $belongs_many_many = array(
        'ProjectPages' => ProjectPage::class,
        'Projects' => Project::class
    );

    public function getTitle()
    {
        return $this->Name;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('ProjectPages');
        $fields->removeByName('Projects');

        $fields->removeFieldFromTab('Root.Main', 'URLSegment');

        $fields->removeFieldFromTab('Root.Main', 'Name');

        return $fields;
    }
}
