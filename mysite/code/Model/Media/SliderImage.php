<?php

namespace SaltedHerring\Model\Media;

use SaltedHerring\Model\Media\ImageMedia;
use SaltedHerring\Model\Slider;

class SliderImage extends ImageMedia
{
    private static $has_one = array(
        'Slider' => Slider::class
    );

    private static $table_name = 'SliderImage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->RemoveFieldFromTab('Root.Main', 'SliderID');

        return $fields;
    }
}
