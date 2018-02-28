<?php

namespace SaltedHerring\Model;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\Project;

use SilverStripe\ORM\FieldType\DBField;
use TractorCow\Colorpicker\Forms\ColorField;

class Colour extends BaseDBO
{
    private static $db = array(
        'Name'         => 'Varchar(25)',
        'Value'        => 'Varchar(25)'
    );

    private static $summary_fields = array(
        'gettheColour' => 'Colour',
        'Name'         => 'Name'
    );

    private static $table_name = 'Colour';

    private static $searchable_fields = array(
        'Name',
        'Value'
    );

    private static $belongs_to = array(
        'Projects'     => Project::class,
        'ProjectPages' => ProjectPage::class
    );

    public function getTitle()
    {
        return $this->Name;
    }

    public function gettheColour()
    {
        return DBField::create_field('HTMLVarchar', '<div style="width:40px;height:40px;background-color:#' . $this->Value . ';"/>');
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('Projects');
        $fields->addFieldToTab('Root.Main', new ColorField('Value', 'Colour'));

        $fields->removeFieldFromTab('Root.Main', 'Title');

        return $fields;
    }

    public function hex2rgb()
    {
        $hex = $this->Value;

        if (!$hex) {
            return '';
        }

        if (strlen($hex) == 3) {
            $r = hexdec(substr($hex, 0, 1).substr($hex, 0, 1));
            $g = hexdec(substr($hex, 1, 1).substr($hex, 1, 1));
            $b = hexdec(substr($hex, 2, 1).substr($hex, 2, 1));
        } else {
            $r = hexdec(substr($hex, 0, 2));
            $g = hexdec(substr($hex, 2, 2));
            $b = hexdec(substr($hex, 4, 2));
        }
        $rgb = array($r, $g, $b);

        return implode(",", $rgb);
    }
}
