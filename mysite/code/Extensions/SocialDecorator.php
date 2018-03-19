<?php

namespace SaltedHerring\Extensions;

use SilverStripe\Assets\Image;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\LabelField;
use SilverStripe\Forms\TextField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\ToggleCompositeField;
use SilverStripe\ORM\DataExtension;

class SocialDecorator extends DataExtension
{
    private static $db = [
        'OGTitle'       => 'Varchar(255)',
        'OGDescription' => 'Varchar(255)'
    ];
    private static $has_one =  [
        'OGImage'       => Image::class
    ];

    public function __construct()
    {
        parent::__construct();
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        return $fields;
    }

    public function updateCMSFields(FieldList $fields)
    {
        $og = ToggleCompositeField::create(
            'OG',
            new LabelField('Open', 'Open Graph Tags - for Facebook sharing'),
            array(
                new TextField('OGTitle', 'Title'),
                new TextField('OGDescription', 'Description'),
                new UploadField('OGImage', Image::class)
            )
        );
        $og->setStartClosed(true);
        $fields->addFieldToTab('Root.Main', $og, 'Metadata');
    }

    public function onBeforeWrite()
    {
        parent::onBeforeWrite();

        if ($this->owner->ID && $this->owner->Title && !$this->owner->OGTitle) {
            $this->owner->OGTitle = $this->owner->Title;
        }

        if ($this->owner->ID && $this->owner->Content && !$this->owner->OGDescription) {
            $matches = array();
            preg_match('(<p.*>(.*)</p>)', $this->owner->Content, $matches);

            if ($matches) {
                $this->owner->OGDescription = $matches[1];
            }
        }
    }
}
