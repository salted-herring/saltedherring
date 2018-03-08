<?php

namespace SaltedHerring\Layout;

use Page;
use SilverStripe\Lumberjack\Model\Lumberjack;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use Symbiote\GridFieldExtensions\GridFieldConfigurablePaginator;
use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;

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
        $config
            ->removeComponentsByType('SilverStripe\Forms\GridField\GridFieldPaginator')
            ->addComponent($sort = new GridFieldSortableRows('Sort'))
            ->addComponent($paginator = new GridFieldConfigurablePaginator(50, [50, 100, 500, 1000]));

        $sort->setUpdateVersionedStage('Live');

        return $fields;
    }
}
