<?php

namespace SaltedHerring\Layout;

use Page;

class TeamPage extends Page
{
    private static $db = array(
    );

    private static $has_one = array(
    );

    private static $has_many = array(
    );

    private static $table_name = 'TeamPage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        return $fields;
    }
}
