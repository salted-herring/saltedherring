<?php

namespace SaltedHerring\ModelAdmin;

// use GridFieldPaginatorWithShowAll;
use SilverStripe\Forms\GridField\GridFieldPaginator;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Admin\ModelAdmin;

class TeamAdmin extends ModelAdmin
{
    private static $managed_models = array('SaltedHerring\Model\TeamMember');
    private static $url_segment = 'team';
    private static $menu_title = 'Team';

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
