<?php

namespace SaltedHerring\Model\Media;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\Project;

use Mobile_Detect;
use SilverStripe\ORM\DB;
use SilverStripe\ORM\DataObject;

class BaseMedia extends DataObject
{
    private static $db = [
        'Title'     => 'Varchar(100)',
        'SortOrder' => 'Int'
    ];

    private static $default_sort = 'SortOrder ASC';

    private static $has_one = [
        'Project'   => Project::class,  // TODO - deprecate
        'ProjectPage' => ProjectPage::class
    ];

    private static $table_name = 'BaseMedia';

    private static $summary_fields = array(
        'Title',
        'Type'
    );

    public function canView($member = null, $context = array())
    {
        return true;
    }
    public function canEdit($member = null, $context = array())
    {
        return true;
    }
    public function canDelete($member = null, $context = array())
    {
        return true;
    }
    public function canCreate($member = null, $context = array())
    {
        return true;
    }
    public function canPublish($member = null, $context = array())
    {
        return true;
    }

    public function getType()
    {
        return $this->singular_name();
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->RemoveFieldFromTab('Root.Main', 'SortOrder');
        $fields->RemoveFieldFromTab('Root.Main', 'Version');
        $fields->RemoveFieldFromTab('Root.Main', 'ProjectID');
        $fields->RemoveFieldFromTab('Root.Main', 'ProjectPageID');
        $fields->RemoveFieldFromTab('Root.Main', 'TeamMemberID');

        return $fields;
    }

    public function onBeforeWrite()
    {
        // Sort Order

        if (!$this->ID) {
            // $query = DB::query("SELECT MIN(SortOrder) FROM BaseMedia WHERE ClassName = '" . $this->getClassName() . "'");
            //
            // if ($query) {
            //     $minVal = (int)($query->value());
            //     $this->SortOrder = $minVal - 1;
            // }
        }

        parent::onBeforeWrite();
    }

    public function isMobile()
    {
        $mobi = new Mobile_Detect();

        return $mobi->isMobile();
    }
}
