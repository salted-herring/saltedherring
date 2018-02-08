<?php

namespace SaltedHerring\Model;

use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Layout\HomePage;

class NewsItem extends BaseDBO
{
    private static $db = array(
        'Text'     => 'HTMLText'
    );

    private static $has_one = array(
        'HomePage' => HomePage::class
    );

    private static $summary_fields = array(
        'Text'
    );

    private static $table_name = 'NewsItem';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->removeFieldFromTab('Root.Main', 'Title');
        $fields->removeFieldFromTab('Root.Main', 'HomePageID');
        return $fields;
    }
}
