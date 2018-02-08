<?php

namespace SaltedHerring\Controllers;

use SaltedHerring\Model\Slider;
use PageController;

class HomePageController extends PageController
{
    private static $allowed_actions = array(
    );

    public function init()
    {
        parent::init();
    }

    public function getSliders()
    {
        return Slider::get();
    }
}
