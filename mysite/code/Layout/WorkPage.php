<?php

namespace SaltedHerring\Layout;

use Page;

use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Lumberjack\Model\Lumberjack;

class WorkPage extends Page
{
    private static $extensions = [
        Lumberjack::class,
    ];

    private static $allowed_children = [
        'SaltedHerring\Layout\ProjectPage'
    ];

    private static $table_name = 'WorkPage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $children = $fields->fieldByName('Root.ChildPages.ChildPages');
        $config = $children->getConfig();
        $config->addComponent(new GridFieldOrderableRows('Sort'));

        return $fields;
    }
}
