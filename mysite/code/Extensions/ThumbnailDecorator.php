<?php

namespace SaltedHerring\Extensions;

use SilverStripe\Assets\Image;
use SilverStripe\ORM\DataExtension;

class ThumbnailDecorator extends DataExtension
{
    private static $has_one = array(
        'Thumbnail' => Image::class
    );
}
