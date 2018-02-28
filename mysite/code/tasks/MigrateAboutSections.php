<?php
/**
 * @file MigrateAboutSections.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 * Migrate About Sections to Pages
 */
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;

use SaltedHerring\Layout\AboutPage;
use SaltedHerring\Layout\AboutSectionPage;
use SaltedHerring\Model\AboutSection;
use SaltedHerring\Model\Block;

class MigrateAboutSections extends BuildTask
{
    protected $title = 'Migrate About Sections to Pages';
    protected $description = 'Migrate About Sections to Pages';
    protected $enabled = true;
    protected $silent = false;
    protected $error = false;
    protected $shutdown = false;

    /**
     * @param    SS_HTTPRequest $request
     */
    public function run($request)
    {
        $aboutPage = AboutPage::get();

        if ($aboutPage->Count() == 0) {
            return false;
        }

        $aboutPage = $aboutPage->first();

        foreach (AboutSection::get() as $section) {
            $page = new AboutSectionPage();
            $page->Title = $section->Title;
            $page->URLSegment = $section->URLSegment;
            $page->Title = $section->Title;
            $page->SectionSubTitle = $section->SectionSubTitle;
            $page->ColourID = $section->ColourID;
            $page->ThumbnailID = $section->ThumbnailID;
            $page->HeroImageID = $section->HeroImageID;
            $page->ParentID = $aboutPage->ID;

            foreach ($section->Blocks() as $block) {
                $page->Blocks()->Add($block->ID);
            }

            $page->write();

            if ($section->isPublished()) {
                $page->writeToStage('Live');
            }
        }
    }
}
