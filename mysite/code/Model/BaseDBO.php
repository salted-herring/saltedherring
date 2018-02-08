<?php

namespace SaltedHerring\Model;

use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DB;
use SilverStripe\ORM\DataObject;
use SilverStripe\View\Parsers\URLSegmentFilter;
use SilverStripe\Versioned\Versioned;

class BaseDBO extends DataObject
{
    private static $db = array(
        'Title'      => 'Varchar(255)',
        'URLSegment' => 'Varchar(255)',
        'Priority'   => 'Decimal',
        'SortOrder'  => 'Int'
    );

    private static $defaults = array(
        'Priority'   => 0.6
    );

    private static $extensions = [
        Versioned::class
    ];

    private static $default_sort = "SortOrder";

    private static $table_name = 'BaseDBO';

    public function canView($member = null, $context = array())
    {
        return true;
    }
    public function canEdit($member = null, $context = array())
    {
        return true;
    }
    public function canDelete($member = null, $context = array())
    {
        return true;
    }
    public function canCreate($member = null, $context = array())
    {
        return true;
    }
    public function canPublish($member = null, $context = array())
    {
        return true;
    }

    public function onBeforeWrite()
    {
        // If there is no URLSegment set, generate one from Title
        // if (!$this->URLSegment) {
        //     $name = $this->Title;
        //     $filter = URLSegmentFilter::create();
        //     $this->URLSegment = $filter->filter($this->getTitle());
        //     // Fallback to generic page name if path is empty (= no valid, convertable characters)
        //     if (!$this->URLSegment) {
        //         $this->URLSegment = $this->getTitle();
        //     }
        // } else {// if($this->isChanged('Title'))
        //     // Make sure the URLSegment is valid for use in a URL
        //     $segment = preg_replace('/[^A-Za-z0-9]+/', '-', $this->getTitle());
        //     //$segment = preg_replace('/-+/','-',$segment);
        //
        //     // If after sanitising there is no URLSegment, give it a reasonable default
        //     if (!$segment) {
        //         $segment = $this->getTitle();
        //     }
        //     $this->URLSegment = $segment;
        // }
        //
        // // Ensure that this object has a non-conflicting URLSegment value.
        // $count = 2;
        // while ($this->LookForExistingURLSegment($this->URLSegment)) {
        //     $this->URLSegment = preg_replace('/-[0-9]+$/', null, $this->URLSegment) . '-' . $count;
        //     $count++;
        // }
        //
        // $this->URLSegment = strtolower(trim($this->URLSegment, '-'));


        // Sort Order
        // if (!$this->ID) {
        //     $query = DB::query("SELECT MIN(SortOrder) FROM BaseDBO WHERE ClassName = '" . get_class($this) . "'");
        //
        //     if ($query) {
        //         $minVal = (int)($query->value());
        //         $this->SortOrder = $minVal - 1;
        //     }
        // }

        parent::onBeforeWrite();
    }

    //Test whether the URLSegment exists already on another Product
    public function LookForExistingURLSegment($URLSegment)
    {
        return (DataObject::get_one('BaseDBO', "URLSegment = '" . $URLSegment ."' AND BaseDBO.ID != " . $this->ID));
    }

    public function generateURLSegment($title)
    {
        $filter = URLSegmentFilter::create();
        $t = $filter->filter($title);

        // Fallback to generic page name if path is empty (= no valid, convertable characters)
        if (!$t || $t == '-' || $t == '-1') {
            $t = "page-$this->ID";
        }

        // Hook for extensions
        $this->extend('updateURLSegment', $t, $title);

        return $t;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->RemoveFieldFromTab('Root.Main', 'URLSegment');
        $fields->RemoveFieldFromTab('Root.Main', 'SortOrder');
        $fields->RemoveFieldFromTab('Root.Main', 'Version');
        if (method_exists($this, 'AbsoluteLink')) {
            $fields->addFieldToTab('Root.SEO', $txtPriority = TextField::create('Priority', 'Google sitemap priority'), $this->hasField('MetaDescription') ? 'MetaDescription' : null);
            $txtPriority->setDescription('Value between 0 and 1. e.g. 0.6');
        }

        return $fields;
    }
}
