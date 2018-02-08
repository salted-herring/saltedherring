<?php

namespace SaltedHerring\Model;

use SilverStripe\ORM\DataObject;

class Block extends DataObject
{
    private static $db = array(
        'Title'     => 'Varchar(128)',
        'SubTitle'  => 'Varchar(128)',
        'BodyCopy'  => 'HTMLText',
        'SortOrder' => 'Int',
        'Col'       => 'Enum("left,right")'
    );

    private static $has_one = array(
        'Section'   => AboutSection::class
    );

    private static $summary_fields = array(
        'Title', 'Col'
    );

    private static $table_name = 'Block';

    private static $default_sort = 'SortOrder';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('SortOrder');
        $fields->removeByName('SectionID');


        return $fields;
    }
}
