<?php

namespace SaltedHerring\Controllers;



use SaltedHerring\Model\TeamMember;



use SilverStripe\ORM\DataObject;
use SilverStripe\Control\Director;
use SilverStripe\Core\Convert;
use SilverStripe\Assets\Image;
use SilverStripe\SiteConfig\SiteConfig;
use PageController;


class TeamPageController extends PageController
{
    private static $allowed_actions = array(
        'meta',
        'members',
        'teamMember'
    );

    private static $url_handlers = array(
        'meta'                => 'meta',
        'members'            => 'members',
        '$teamMember!/$arg'    => 'teamMember'
    );

    public function init()
    {
        parent::init();
    }

    public function getTheTitle()
    {
        $title = parent::getTitle();

        if ($this->request->param('teamMember')) {
            $title .= ' - ' . DataObject::get_one('TeamMember', "URLSegment='" . $this->request->param('teamMember') . "'")->FirstName;
        }

        return $title;
    }

    public function teamMember($request)
    {
        if ($request->param('arg')) {
            if ($request->param('arg') == 'meta') {
                return $this->meta($request);
            } elseif ($request->param('arg') == 'portraits') {
                return $this->getPortraits();
            } else {
                return false;
            }
        }

        $teamMember = DataObject::get_one('TeamMember', "URLSegment='" . $request->param('teamMember') . "'");

        if (!$teamMember->exists() || !$teamMember->isPublished) {
            $this->httpError(404, 'The requested page could not be found.');
        }

        $this->MetaTitle = $teamMember->getUserName();
        $this->MetaDescription = $teamMember->MetaDescription;
        $this->currentMember = $teamMember;

        return $this->renderWith(array('TeamMemberPage', 'Page'), array(
            'Member' => $teamMember,
            'getTeam' => $this->getTeam()
        ));
    }

    public function getTeam()
    {
        return TeamMember::get()->filter(array('isPublished' => true));
    }

    public function getPortraits()
    {
        if ($this->request->param('teamMember')) {
            $member = TeamMember::get()->filter('URLSegment', $this->request->param('teamMember'));
            if ($member) {
                return $member->first()->getOtherPortraits();
            }
        }

        return false;
    }

    public function members($request)
    {
        if (!Director::is_ajax()) {
            return false;
        }

        $data = array();

        foreach (TeamMember::get()->filter('isPublished', true) as $member) {
            array_push($data, array(
                'Title' => $member->getUserName(),
                'TagLine' => htmlentities($member->Role),
                'URLSegment' => $member->URLSegment
            ));
        }

        return json_encode($data);
    }

    public function getOG($var = 'Title')
    {
        switch ($var) {
            case 'Title':
                if ($this->getTheTitle()) {
                    return $this->getTheTitle();
                }
                return false;
            case 'Description':
                if ($this->request->param('meta') || !isset($this->currentMember)) {
                    if ($this->OGDescription) {
                        return $this->OGDescription;
                    }
                } else {
                    if (isset($this->currentMember)) {
                        return Convert::raw2att($this->currentMember->MetaDescription);
                    }

                    return Convert::raw2att($this->currentMember->MetaDescription);
                }

                return Convert::raw2att($this->MetaDescription);
            case Image::class:

                if (!isset($this->currentMember)) {
                    if ($this->OGImage()) {
                        return $this->OGImage();
                    }
                } else {
                    $media = $this->currentMember->Images();

                    if ($media->count() > 0) {
                        return $media->first()->Image();
                    }
                }

                if (SiteConfig::current_site_config()->OGImage()) {
                    return SiteConfig::current_site_config()->OGImage();
                }
                return false;
            default:
                return false;
        }
    }
}
