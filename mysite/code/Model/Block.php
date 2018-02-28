<?php

namespace SaltedHerring\Model;

use SaltedHerring\Layout\AboutSectionPage;

use SilverStripe\ORM\DataObject;
use SilverStripe\Versioned\Versioned;

class Block extends DataObject
{
    private static $db = [
        'Title'     => 'Varchar(128)',
        'SubTitle'  => 'Varchar(128)',
        'BodyCopy'  => 'HTMLText',
        'SortOrder' => 'Int',
        'Col'       => 'Enum("left,right")'
    ];

    private static $has_one = [
        'Section'   => AboutSection::class,
        'Page' => AboutSectionPage::class
    ];

    private static $summary_fields = [
        'Title',
        'Col'
    ];

    private static $extensions = [
        Versioned::class
    ];

    private static $versioned_gridfield_extensions = true;

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
