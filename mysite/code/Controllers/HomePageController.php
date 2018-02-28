<?php

namespace SaltedHerring\Layout;

use SaltedHerring\Model\Slider;
use PageController;

class HomePageController extends PageController
{
    private static $allowed_actions = array(
        'sliders'
    );

    public function init()
    {
        parent::init();
    }

    public function getSliders()
    {
        return Slider::get();
    }

    public function sliders()
    {
        $data = [];

        foreach (Slider::get() as $slider) {
            $current = array(
                'Slider' => $slider->ID,
                'Images' => []
            );

            foreach ($slider->Images() as $img) {
                array_push($current['Images'], [
                    'URL' => $img->Image()->URL,
                    'Alt' => is_null($slider->AltForImage) ? '' : $slider->AltForImage
                ]);
            }

            array_push($data, $current);
        }

        return json_encode($data);
    }
}
