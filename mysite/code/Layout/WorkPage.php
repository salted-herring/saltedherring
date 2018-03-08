<?php

namespace SaltedHerring\Layout;

use Page;

use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use Symbiote\GridFieldExtensions\GridFieldConfigurablePaginator;
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
        $config
            ->removeComponentsByType('SilverStripe\Forms\GridField\GridFieldPaginator')
            ->addComponent(new GridFieldOrderableRows('Sort'))
            ->addComponent($paginator = new GridFieldConfigurablePaginator(50, [50, 100, 500, 1000]));

        return $fields;
    }
}
