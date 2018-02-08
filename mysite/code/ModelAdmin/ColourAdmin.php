<?php

namespace SaltedHerring\ModelAdmin;

use SaltedHerring\Model\Colour;
use SilverStripe\Admin\ModelAdmin;

class ColourAdmin extends ModelAdmin
{
    private static $managed_models = array(Colour::class);
    private static $url_segment = 'colour';
    private static $menu_title = 'Colours';
}
