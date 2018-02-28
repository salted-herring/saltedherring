<?php

namespace SaltedHerring\Extensions;

use SilverStripe\Forms\FieldList;
use SilverStripe\Control\Controller;
use SilverStripe\View\Parsers\URLSegmentFilter;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DataExtension;

use SaltedHerring\Utility\Utility;
use SaltedHerring\Form\DataObjectURLSegmentField;

class URLExtension extends DataExtension
{
    private static $db = [
        'URLSegment' => 'Varchar(255)'
    ];

    private static $indexes = [
        "URLSegment" => true
    ];

    private static $field_labels = [
        'URLSegment' => 'URL'
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $fields->replaceField('URLSegment',
            DataObjectURLSegmentField::create('URLSegment', $this->owner->fieldLabel('URLSegment'))
        );
    }

    public function Link($action = null)
    {
        return Controller::join_links('/', $this->owner->URLSegment);
    }

    public function AbsoluteLink()
    {
        if (!$this->isPublished()) {
            return null;
        }

        return Director::absoluteURL($this->Link());
    }

    // Test whether the URLSegment exists already on another DataObject of the same type
    public function LookForExistingURLSegment($URLSegment)
    {
        $class = Utility::getClassName($this->owner);

        return DataObject::get_one(
            $class,
            sprintf(
                "URLSegment = '%s' AND %s.ID != %d",
                $URLSegment,
                $class,
                $this->owner->ID
            )
        );
    }

    public function generateURLSegment($title)
    {
        $filter = URLSegmentFilter::create();
        $t = $filter->filter($title);
        $class= strtolower(Utility::getClassName($this->owner));

        // Fallback to generic page name if path is empty (= no valid, convertable characters)
        if (!$t || $t == '-' || $t == '-1') {
            $t = $class . "-" . $this->owner->ID;
        }

        return $t;
    }
}
