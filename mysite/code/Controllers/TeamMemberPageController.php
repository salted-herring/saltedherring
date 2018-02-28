<?php

namespace SaltedHerring\Layout;

use SaltedHerring\Layout\TeamMemberPage;

use SilverStripe\ORM\DataObject;
use SilverStripe\Control\Director;
use SilverStripe\Core\Convert;
use SilverStripe\Assets\Image;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Versioned\Versioned;

use PageController;

class TeamMemberPageController extends PageController
{
    private static $allowed_actions = [
        'portraits'
    ];

    public function getTeam()
    {
        return TeamMemberPage::get()->sort('Sort');
    }

    public function portraits()
    {
        if ($this->data()->Images()->first()) {
            $images = $this->data()->Images();

            $portraits = array();

            foreach ($images as $image) {
                array_push($portraits, $image->outputImage()->URL);
            }

            return json_encode(array('data' => $portraits));
        }

        return json_encode(array('data' => null));
    }
}
