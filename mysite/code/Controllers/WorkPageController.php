<?php

namespace SaltedHerring\Layout;

use SaltedHerring\Layout\ProjectPage;
use SaltedHerring\Model\Project;
use SaltedHerring\Model\ProjectAward;
use SaltedHerring\Model\Category;

use SilverStripe\ORM\DataObject;
use SilverStripe\Control\Controller;
use SilverStripe\Core\Convert;
use SilverStripe\Assets\Image;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Control\ContentNegotiator;
use SilverStripe\Control\Director;
use SilverStripe\Versioned\Versioned;

use PageController;

class WorkPageController extends PageController
{
    private static $allowed_actions = array(
        'home',
        'getProject',
        'getCategoryProjects',
        'getCurrentSession',
        'setSession',
        'clearSession'
    );

    private static $url_handlers = array(
        '' => 'home',
        'category/$Category/$meta' => 'getCategoryProjects',
        'project/$Project/$meta' => 'getProject'
    );

    public function init()
    {
        parent::init();

        $title = $this->Title;

        if (!empty($this->MetaTitle)) {
            $title = $this->MetaTitle;
        }

        $this->ParentMetaTitle = $title;
    }

    public function getTheTitle()
    {
        $title = $this->ParentMetaTitle;

        if ($this->request->param('projectName')) {
            $proj = DataObject::get_one('SaltedHerring\Model\Project', "URLSegment='" . $this->request->param('projectName') . "'");
            $title .= ' | ' . (empty($proj->MetaTitle) ? $proj->Title : $proj->MetaTitle);
        } elseif ($this->request->param('Category')) {
            $cat = DataObject::get_one('SaltedHerring\Model\Category', "URLSegment='" . $this->request->param('Category') . "'");
            $title .= ' | ' . (empty($cat->MetaTitle) ? $proj->Title : $cat->MetaTitle);
        }

        return $title;
    }

    public function getProject($request)
    {
        $this->project = Versioned::get_by_stage('SaltedHerring\Layout\ProjectPage', 'Live', $filter = ['URLSegment' => $request->param('Project')]);

        // No project - first check there's no old url...
        if ($this->project->count() == 0) {
            return $this->httpError(404, 'The requested page could not be found.');
        } else {
            $project = $this->project->first();
            return $this->redirect($project->AbsoluteLink(), 301);
        }
    }

    public function clearSession()
    {
        $request = Controller::curr()->getRequest();
        $request->getSession()->clear('category');
    }

    public function home()
    {
        $this->clearSession();

        return $this->renderWith(['SaltedHerring\Layout\WorkPage', 'Page'], array(
            'getAllProjects' => Versioned::get_by_stage('SaltedHerring\Layout\ProjectPage', 'Live'),
            'category' => '',
            'categoryName' => ''
        ));
    }

    public function getCategoryProjects($request)
    {
        $cat = Category::get()->filter(
                ['URLSegment' => $request->param('Category')]
            );

        if ($cat->count() == 0 && $request->param('Category') != 'all') {
            return $this->httpError(404);
        }

        if ($request->param('Category')) {
            $this->clearSession();
            $request->getSession()->set('category', $request->param('Category'));
        }

        $cat = $cat->first();
        $this->MetaDescription = $cat->MetaDescription;

        return $this->renderWith(array('SaltedHerring\Layout\WorkPage', 'Page'), array(
            'getAllProjects' => Versioned::get_by_stage('SaltedHerring\Layout\ProjectPage', 'Live'),
            'category' => $request->getSession()->get('category'),
            'categoryName' => $cat->URLSegment
        ));
    }

    public function setCurrentSession()
    {
        $cat = Category::get()->filter(
                ['URLSegment' => $request->param('Category')]
            );

        if ($cat->count() == 0) {
            return $this->httpError(404);
        }

        if ($request->getVar('Category')) {
            $this->clearSession();
            $request->getSession()->set('category', $request->param('Category'));
        }
    }

    public function getCurrentSession()
    {
        $request = Controller::curr()->getRequest();
        return $request->getSession()->get('category');
    }

    public function getAllProjects()
    {
        return Versioned::get_by_stage('SaltedHerring\Layout\ProjectPage', 'Live');
    }

    public function getCategories()
    {
        return Category::get();
    }
}
