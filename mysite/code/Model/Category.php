<?php

namespace SaltedHerring\Model;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Project;
use SaltedHerring\Extensions\MetaDecorator;

use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Control\Director;
use SilverStripe\ORM\ValidationResult;

class Category extends BaseDBO
{
    private static $db = array(
        'Name'    =>    'Varchar(100)'
        // 'Slug'    =>    'Varchar(100)'
    );

    private static $extensions = array(
        MetaDecorator::class
    );

    private static $summary_fields = array(
        'URLSegment'
    );

    private static $table_name = 'Category';

    private static $belongs_many_many = array(
        'ProjectPages' => ProjectPage::class,
        'Projects' => Project::class
    );

    // public function onBeforeWrite()
    // {
    //     $this->Slug = rtrim(preg_replace('/[^A-Za-z0-9]+/', '-', strtolower(trim($this->Name))), '-');
    //     parent::onBeforeWrite();
    // }

    public function getTitle()
    {
        return $this->Name;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        // $fields->removeByName('Slug');
        $fields->removeByName('ProjectPages');

        $fields->removeFieldFromTab('Root.Main', 'Name');

        return $fields;
    }

    public function getSiteConfig()
    {
        return SiteConfig::current_site_config();
    }

    public function AbsoluteLink()
    {
        return Director::absoluteURL($this->Link());
    }

    public function Link()
    {
        return '/work/category/' . $this->URLSegment;
    }

    public function validate()
    {
        $result = parent::validate();

        if ($this->ID) {
            if (strtolower($this->URLSegment) == 'all') {
                $result->addFieldError('URLSegment', 'The URL for category all is reserved. Please change it.');
            }

            $otherCategories = Category::get()
                                ->exclude('ID', $this->ID)
                                ->filter('URLSegment', $this->URLSegment);

            if ($otherCategories->Count() != 0) {
                $result->addFieldError('URLSegment', 'A category with the same URL already exists - please change it.');
            }
        }


        return $result;
    }
}
