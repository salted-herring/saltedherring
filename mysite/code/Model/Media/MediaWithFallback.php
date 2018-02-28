<?php

namespace SaltedHerring\Model\Media;

use SaltedHerring\Model\Media\BaseMedia;

use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;

class MediaWithFallback extends BaseMedia
{
    private static $has_one = array(
        'PosterImage' => Image::class
    );

    private static $table_name = 'MediaWithFallback';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Main', new UploadField('PosterImage', 'Fallback Content'));

        return $fields;
    }

    public function outputFallback($width = -1)
    {
        if (!$this->PosterImage()) {
            return false;
        }
        if ($this->isMobile()) {
            return $this->PosterImage()->ScaleMaxWidth(480);
        }

        return $this->PosterImage()->ScaleMaxWidth($width != -1 ? $width : 928);
    }
}
