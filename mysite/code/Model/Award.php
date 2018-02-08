<?php

namespace SaltedHerring\Model;

use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\ProjectAward;

use SilverStripe\Assets\Image;
use SilverStripe\ORM\FieldType\DBField;

class Award extends BaseDBO
{
    private static $db = array(
        'Name'         => 'Varchar(50)'
    );

    private static $has_one = array(
        'Logo'         => Image::class
    );

    private static $has_many = array(
    );

    private static $summary_fields = array(
        'getThumbnail' => 'Logo',
        'Name'
    );

    private static $searchable_fields = array(
        'Name'
    );

    private static $belongs_to = array(
        'ProjectAward' => ProjectAward::class
    );

    private static $table_name = 'Award';

    public function getTitle()
    {
        return $this->Name;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeFieldFromTab('Root.Main', 'Title');

        return $fields;
    }

    public function getThumbnail()
    {
        if ($this->Logo()->exists()) {
            return DBField::create_field('HTMLVarchar', '<img src="' . $this->Logo()->CroppedImage(40, 40)->URL . '"/>');
        }
        return null;
    }
}
