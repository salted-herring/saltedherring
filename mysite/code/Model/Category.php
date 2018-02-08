<?php

namespace SaltedHerring\Model;

use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Project;
use SaltedHerring\Extensions\MetaDecorator;

use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Control\Director;

class Category extends BaseDBO
{
    private static $db = array(
        'Name'    =>    'Varchar(100)',
        'Slug'    =>    'Varchar(100)'
    );

    private static $extensions = array(
        MetaDecorator::class
    );

    private static $summary_fields = array(
        'Name'
    );

    private static $table_name = 'Category';

    private static $belongs_many_many = array(
        'Projects' => Project::class
    );

    public function onBeforeWrite()
    {
        $this->Slug = rtrim(preg_replace('/[^A-Za-z0-9]+/', '-', strtolower(trim($this->Name))), '-');
        parent::onBeforeWrite();
    }

    public function getTitle()
    {
        return $this->Name;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->removeByName('Slug');
        $fields->removeByName('Projects');

        $fields->removeFieldFromTab('Root.Main', 'Title');

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
        return '/work/category/' . $this->Slug;
    }
}
