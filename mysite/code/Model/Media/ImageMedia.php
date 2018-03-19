<?php

namespace SaltedHerring\Model\Media;

use SaltedHerring\Layout\TeamMemberPage;
use SaltedHerring\Model\Media\BaseMedia;
use SaltedHerring\Model\TeamMember;

use SilverStripe\Assets\Image;
use SilverStripe\ORM\FieldType\DBField;

class ImageMedia extends BaseMedia
{
    private static $has_one = [
        'Image'          => Image::class,
        'TeamMember'     => TeamMember::class, // TODO - deprecate
        'TeamMemberPage' => TeamMemberPage::class
    ];

    private static $owns = [ 'Image' ];

    private static $summary_fields = [
        'getThumbnail'   => Image::class,
        'Title'          => 'Title'
    ];

    private static $singular_name = 'Image';
    private static $plural_name = 'Images';

    private static $table_name = 'ImageMedia';

    public function getThumbnail()
    {
        if ($this->Image()->exists()) {
            return DBField::create_field('HTMLVarchar', '<img src="' . $this->Image()->FitMax(40, 40)->URL . '"/>');
        }
        return null;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->RemoveFieldFromTab('Root.Main', 'TeamMemberID');
        $fields->RemoveFieldFromTab('Root.Main', 'TeamMemberPageID');

        return $fields;
    }

    public function outputImage($width = -1)
    {
        if (!$this->Image()) {
            return false;
        }

        $targetWidth = $width != -1 ? $width : 928;

        if ($targetWidth > $this->Image()->Width) {
            return $this->Image();
        }

        return $this->Image()->ScaleMaxWidth($targetWidth);
    }
}
