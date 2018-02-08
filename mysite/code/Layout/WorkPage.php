<?php

namespace SaltedHerring\Layout;

use Page;

class WorkPage extends Page
{
    private static $db = array(
    );

    private static $has_one = array(
    );

    private static $table_name = 'WorkPage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        return $fields;
    }
}
