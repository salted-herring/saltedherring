<?php

namespace SaltedHerring\ModelAdmin;

// use GridFieldPaginatorWithShowAll;
use SilverStripe\Forms\GridField\GridFieldPaginator;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Admin\ModelAdmin;

class ProjectAdmin extends ModelAdmin
{
    private static $managed_models = array('SaltedHerring\Model\Project', 'SaltedHerring\Model\Award', 'SaltedHerring\Model\Client', 'SaltedHerring\Model\Category', 'SaltedHerring\Model\Service');
    private static $url_segment = 'project';
    private static $menu_title = 'Projects';

    public function getEditForm($id = null, $fields = null)
    {
        $form = parent::getEditForm($id, $fields);
        $gridField = $form->Fields()->fieldByName($this->sanitiseClassName($this->modelClass));
        // $gridField->getConfig()->removeComponentsByType(GridFieldPaginator::class);
        $gridField->getConfig()->addComponents(
            new GridFieldOrderableRows('SortOrder')//,
            // new GridFieldPaginatorWithShowAll()
        );
        return $form;
    }
}
