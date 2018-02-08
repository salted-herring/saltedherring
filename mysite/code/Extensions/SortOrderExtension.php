<?php

namespace SaltedHerring\Extensions;

use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;

/**
 * @file SortOrderExtension.php
 * */
class SortOrderExtension extends DataExtension
{
    private static $db = array(
        'SortOrder' => 'Int'
    );

    private static $default_sort = 'SortOrder';

    public function updateCMSFields(FieldList $fields)
    {
        $field = $fields->fieldByName('Root.Main');

        if ($field) {
            $fields->removeFieldsFromTab("Root.Main", array(
                'SortOrder'
            ));
        }
    }
}
