<?php

namespace SaltedHerring\Model;

use FieldSet;
use Page;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\TextField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\ORM\DataObject;

class OG extends DataObject
{
    private static $db = array(
        'OGTitle'       => 'Varchar(255)',
        'OGDescription' => 'Varchar(1024)'
    );

    private static $has_one = array(
        'OGImage'       => Image::class
    );

    private static $belongs_to = array(
        'Page'          => Page::class
    );

    private static $table_name = 'OG';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab("Root.Facebook", new TextField('OGTitle', 'Title'));
        $fields->addFieldToTab("Root.Facebook", new TextField('OGDescription', 'Description'));
        $fields->addFieldToTab("Root.Facebook", new UploadField('OGImage', 'Image (min 200px X 200px)'));

        return $fields;
    }

    public function getCMSFields_forPopup()
    {
        $fields = new FieldSet();
        $fields->push(new TextField('OGTitle', 'Title'));
        $fields->push(new TextField('OGDescription', 'Description'));
        $fields->push(new UploadField('OGImage', 'Image (min 200px X 200px)'));
        return $fields;
    }
}
