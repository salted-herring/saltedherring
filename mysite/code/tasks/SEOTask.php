<?php

use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;


class SEOTask extends BuildTask
{
    protected $title        = 'Update Meta';
    protected $description  = 'Update Meta Text on Projects & Team Members';
    protected $enabled      = true;
    private static $segment = 'SEOTask';

    public function run($request)
    {
        $team = DataObject::get('TeamMember');

        echo 'Updating Descriptions of team Members<br>';

        foreach ($team as $member) {
            $member->forceChange();
            $member->write();
        }

        echo 'Updated ' . $team->count() . ' team members.';

        $projects = DataObject::get('Project');

        echo 'Updating Descriptions of Projects<br>';

        foreach ($projects as $project) {
            $project->forceChange();
            $project->write();
        }

        echo 'Updated ' . $projects->count() . ' Projects.';
    }
}
