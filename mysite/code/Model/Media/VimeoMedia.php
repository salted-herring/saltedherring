<?php

namespace SaltedHerring\Model\Media;

use SaltedHerring\Model\Media\MediaWithFallback;

use SilverStripe\Forms\TextField;

class VimeoMedia extends MediaWithFallback
{
    private static $db = array(
        'vimeoID' => 'Varchar(20)'
    );

    private static $table_name = 'VimeoMedia';

    private static $singular_name = 'Vimeo';
    private static $plural_name = 'Vimeos';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->AddFieldToTab('Root.Main', new TextField('vimeoID', 'Vimeo ID'));

        return $fields;
    }
}
