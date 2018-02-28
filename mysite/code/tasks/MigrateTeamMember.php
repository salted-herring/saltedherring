<?php
/**
 * @file ￼MigrateTeamMember.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 * Migrate TeamMember from DBO to Page.
 */
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;

use SaltedHerring\Layout\TeamPage;
use SaltedHerring\Layout\TeamMemberPage;
use SaltedHerring\Model\TeamMember;

class MigrateTeamMember extends BuildTask
{
    protected $title = 'Migrate Team Member';
    protected $description = 'Migrate Team Member from a DBO to Page.';
    protected $enabled = true;
    protected $silent = false;
    protected $error = false;
    protected $shutdown = false;

    /**
     * @param    SS_HTTPRequest $request
     */
    public function run($request)
    {
        $team = TeamPage::get();

        if ($team->count() > 0) {
            $team = $team->first();

            foreach (TeamMember::get() as $member) {
                echo $member->Title . '<br>';

                $newMember = new TeamMemberPage();

                // db fields
                $newMember->ParentID = $team->ID;
                $newMember->write();

                $newMember->Title = $member->getTitle();
                $newMember->URLSegment = $member->URLSegment;
                $newMember->FirstName = $member->FirstName;
                $newMember->LastName = $member->LastName;
                $newMember->Role = $member->Role;
                $newMember->Responsibilities = $member->Responsibilities;
                $newMember->Intro = $member->Intro;
                $newMember->Bio = $member->Bio;
                $newMember->Email = $member->Email;
                $newMember->MobileNumber = $member->MobileNumber;
                $newMember->Sort = $member->SortOrder;
                $newMember->Content = $member->Bio;

                $newMember->ColourID = $member->ColourID;
                $newMember->ThumbnailID = $member->ThumbnailID;
                $newMember->ThumbnailOverID = $member->ThumbnailOverID;

                foreach ($member->Images() as $image) {
                    $newMember->Images()->Add($image->ID);
                }

                // social
                $newMember->OGTitle = $member->OGTitle;
                $newMember->OGDescription = $member->OGDescription;
                $newMember->OGImageID = $member->OGImageID;

                // Meta
                $newMember->MetaDescription = $member->MetaDescription;

                $newMember->write();

                if ($member->isPublished()) {
                    $newMember->writeToStage('Live');
                }
            }
        }
    }
}
