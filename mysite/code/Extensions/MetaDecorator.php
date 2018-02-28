<?php

namespace SaltedHerring\Extensions;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\ORM\DataExtension;

class MetaDecorator extends DataExtension
{
    private static $db = [
        'MetaTitle'       => 'Varchar(255)',
        'MetaDescription' => 'Varchar(160)'
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $metaTitle = $fields->fieldByName('Root.Main.MetaTitle');
        $metaDescription = $fields->fieldByName('Root.Main.MetaDescription');

        $metaTitle->setRightTitle('Shown at the top of the browser window and used as the "linked text" by search engines.');
        $metaDescription->setRightTitle('Search engines use this content when displaying search results (although it will not influence their ranking).');
    }

    public function getDescription()
    {
        return $this->owner->MetaDescription;
    }
}
