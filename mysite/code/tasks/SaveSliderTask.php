<?php

use SilverStripe\Dev\BuildTask;

use SaltedHerring\Model\Slider;

class SaveSliderTask extends BuildTask
{
    protected $title        = 'Save Slider';
    protected $description  = 'Make sure the Slider is saved as a versioned object';
    private static $segment = 'slider-save';
    protected $enabled      = true;

    public function run($request)
    {
        $slider = Slider::get();
        echo $slider->Count();
        foreach ($slider as $slider) {
            echo $slider->Header . '<br>';
            $slider->write();
        }
    }
}
