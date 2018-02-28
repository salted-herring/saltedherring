<?php

use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;
use SilverStripe\Versioned\Versioned;

use SaltedHerring\Model\Award;
use SaltedHerring\Model\Category;
use SaltedHerring\Model\Client;
use SaltedHerring\Model\Colour;
use SaltedHerring\Model\NewsItem;
use SaltedHerring\Model\Project;
use SaltedHerring\Model\Service;
use SaltedHerring\Model\Slider;
use SaltedHerring\Model\TeamMember;
use SaltedHerring\Model\AboutSection;

class SaveBaseDBOChildren extends BuildTask
{
    protected $title        = 'Save Base DBO Children';
    protected $description  = 'Make sure all DBO children are published';
    protected $enabled      = true;
    private static $segment = 'save-base-dbo-children';

    public function run($request)
    {
        $childClasses = [
            'SaltedHerring\Model\Award',
            'SaltedHerring\Model\Category',
            'SaltedHerring\Model\Client',
            'SaltedHerring\Model\Colour',
            'SaltedHerring\Model\NewsItem',
            'SaltedHerring\Model\Project',
            'SaltedHerring\Model\Service',
            'SaltedHerring\Model\Slider',
            'SaltedHerring\Model\TeamMember',
            'SaltedHerring\Model\AboutSection'
        ];

        foreach ($childClasses as $class) {
            $dataObjects = $class::get();

            echo '<h2>' . $class . '</h2>';

            foreach ($dataObjects as $obj) {
                echo '<pre>';
                print_r($obj->Title);
                echo '</pre>';

                echo '<b>Status:</b><br>';
                echo '<ul>';
                echo '<li>is archived? ' . ($obj->isArchived() ? 'yes' : 'no') . '</li>';
                echo '<li>is draft? ' . ($obj->isOnDraft() ? 'yes' : 'no') . '</li>';
                echo '<li>is published? ' . ($obj->isPublished() ? 'yes' : 'no') . '</li>';
                echo '</ul>';
                echo '<br>';

                if ($obj->isArchived()) {
                    $obj->writeToStage('Stage');
                }

                if (!$obj->isPublished()) {
                    $obj->writeToStage('Live');
                }
            }

            echo '<hr>';
        }
    }
}
