<?php

namespace SaltedHerring\ModelAdmin;

use SaltedHerring\Model\Project;
use SaltedHerring\Model\Award;
use SaltedHerring\Model\Client;
use SaltedHerring\Model\Category;
use SaltedHerring\Model\Service;

// use GridFieldPaginatorWithShowAll;
use SilverStripe\Forms\GridField\GridFieldPaginator;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Admin\ModelAdmin;
use SilverStripe\Lumberjack\Forms\GridFieldSiteTreeState;

class ProjectAdmin extends ModelAdmin
{
    private static $managed_models = [
        Award::class,
        Client::class,
        Category::class,
        Service::class
    ];
    private static $url_segment = 'project';
    private static $menu_title = 'Projects';

    public function getEditForm($id = null, $fields = null)
    {
        $form = parent::getEditForm($id, $fields);
        $gridField = $form->Fields()->fieldByName($this->sanitiseClassName($this->modelClass));
        // $gridField->getConfig()->removeComponentsByType(GridFieldPaginator::class);
        $gridField->getConfig()->addComponents(
            new GridFieldOrderableRows('SortOrder'),
            new GridFieldSiteTreeState()
        );
        return $form;
    }
}
