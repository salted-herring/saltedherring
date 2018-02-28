<?php

namespace SaltedHerring\Layout;

use Page;
use SilverStripe\Lumberjack\Model\Lumberjack;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;

class TeamPage extends Page
{
    private static $extensions = [
        Lumberjack::class,
    ];

    private static $allowed_children = [
        'SaltedHerring\Layout\TeamMemberPage'
    ];

    private static $table_name = 'TeamPage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $children = $fields->fieldByName('Root.ChildPages.ChildPages');
        $config = $children->getConfig();
        $config->addComponent(new GridFieldOrderableRows('Sort'));

        return $fields;
    }
}
