<?php
/**
 * @file GenerateProjectImages.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 * Generate Project Images.
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

class GenerateProjectImages extends BuildTask
{
    protected $title = 'Generate Project Images';
    protected $description = 'Generate all project images.';
    protected $enabled = true;
    protected $silent = false;
    protected $error = false;
    protected $shutdown = false;

    /**
     * @param    SS_HTTPRequest $request
     */
    public function run($request)
    {
        foreach (ProjectPage::get() as $project) {
            $first = $project->getFirstImage();

            if (!is_null($first)) {
                echo 'Generating thumbnail: ' . $first->Image()->URL . PHP_EOL;
                $first->Image()->FillMax(320, 320);
            }
        }
    }
}
