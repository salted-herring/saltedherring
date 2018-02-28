<?php
/**
 * @file ￼MigrateProject.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 * Migrate Project from DBO to Page.
 */
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Layout\WorkPage;
use SaltedHerring\Model\Project;
use SaltedHerring\Model\BaseDBO;
use SaltedHerring\Model\Category;
use SaltedHerring\Model\Client;
use SaltedHerring\Model\ProjectAward;
use SaltedHerring\Model\Service;
use SaltedHerring\Model\Media\BaseMedia;

class MigrateProject extends BuildTask
{
    protected $title = 'Migrate Projects';
    protected $description = 'Migrate Projects from a DBO to Page.';
    protected $enabled = true;
    protected $silent = false;
    protected $error = false;
    protected $shutdown = false;

    /**
     * @param    SS_HTTPRequest $request
     */
    public function run($request)
    {
        $work = WorkPage::get();

        if ($work->count() > 0) {
            $work = $work->first();

            foreach (Project::get() as $project) {
                echo $project->Title . '<br>';

                $newProj = new ProjectPage();
                $projectAwards = [];

                // db fields
                $newProj->ParentID = $work->ID;
                $newProj->write();

                $newProj->Title = $project->Title;
                $newProj->TagLine = $project->TagLine;
                $newProj->Quote = $project->Quote;
                $newProj->Citation = $project->Citation;
                $newProj->ProjectInfo = $project->ProjectInfo;
                $newProj->SiteURL = $project->SiteURL;
                $newProj->URLSegment = $project->URLSegment;
                $newProj->Content = $project->Content;

                // social
                $newProj->OGTitle = $project->OGTitle;
                $newProj->OGDescription = $project->OGDescription;
                $newProj->OGImageID = $project->OGImageID;

                // Meta
                $newProj->MetaDescription = $project->MetaDescription;

                // has_one fields
                $newProj->ClientID = $project->ClientID;
                $newProj->ColourID = $project->ColourID;

                // has_many fields
                foreach ($project->ProjectAwards() as $award) {
                    $newProj->ProjectAwards()->Add($award->ID);
                }

                foreach ($project->Media() as $media) {
                    $newProj->Media()->Add($media->ID);
                }

                // many_many fields
                foreach ($project->Categories() as $cat) {
                    $newProj->Categories()->Add($cat->ID);
                }
                foreach ($project->Services() as $service) {
                    $newProj->Services()->Add($service->ID);
                }
                foreach ($project->RelatedProjects() as $proj) {
                    $newProj->RelatedProjects()->Add($proj->ID);
                }

                // belongs to
                $slider = $project->Slider();

                if (!is_null($slider)) {
                    $slider->ProjectPageID = $project->ID;
                    $slider->write();
                }

                $newProj->write();

                if ($project->isPublished()) {
                    $newProj->writeToStage('Live');
                }
            }

            // Update Related Projects
            foreach (Project::get() as $project) {
                $newProj = ProjectPage::get()->filter('URLSegment', $project->URLSegment);

                if ($newProj->Count() != 0) {
                    foreach ($project->RelatedProjects() as $related) {
                        $newRel = ProjectPage::get()->filter('URLSegment', $related->URLSegment);

                        if (!is_null($newRel)) {
                            $newProj->first()->RelatedProjects()->Add($newRel->first()->ID);
                        }
                    }
                }
            }
        }
    }
}
