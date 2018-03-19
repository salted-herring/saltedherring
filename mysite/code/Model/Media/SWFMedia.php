<?php

namespace SaltedHerring\Model\Media;

use SaltedHerring\Model\Media\MediaWithFallback;

use SilverStripe\Assets\File;
use SilverStripe\AssetAdmin\Forms\UploadField;

class SWFMedia extends MediaWithFallback
{
    private static $db = [
        'width' => 'Int',
        'height' => 'Int'
    ];

    private static $has_one = [
        'File' => File::class
    ];

    private static $owns = [ 'File' ];

    private static $table_name = 'SWFMedia';

    private static $singular_name = 'SWF';
    private static $plural_name = 'SWFs';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->AddFieldToTab('Root.Main', new UploadField(File::class, 'SWF'));

        return $fields;
    }
}
