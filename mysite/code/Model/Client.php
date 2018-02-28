<?php

namespace SaltedHerring\Model;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Project;

class Client extends BaseDBO
{
    private static $db = array(
        'Name' => 'Varchar(100)'
    );

    private static $table_name = 'Client';

    private static $belongs_to = array(
        'Projects' => Project::class,
        'ProjectPages' => ProjectPage::class
    );

    public function getTitle()
    {
        return $this->Name;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeFieldFromTab('Root.Main', 'Title');

        return $fields;
    }
}
