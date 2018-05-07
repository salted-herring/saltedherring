<?php

namespace SaltedHerring\API;

use PageController;

use SaltedHerring\Layout\ProductPage;
use SaltedHerring\Model\Category as Category;

use SilverStripe\Control\Controller;
use SilverStripe\ORM\DataObject;
use SilverStripe\Versioned\Versioned;

class WorkAPI extends PageController
{
    /**
     * Defines methods that can be called directly
     * @var array
     */
    private static $allowed_actions = [
        'categories' => '->isAuthenticated'
    ];

    /**
     * Defines URL patterns.
     * @var array
     */
    private static $url_handlers = [
        'categories/$Category' => 'categories'
    ];

    public function isAuthenticated()
    {
        // if ($this->request->isAjax()) {
        //     return $this->request->postVar('SecurityID') == SecurityToken::inst()->getSecurityID();
        // }

        return true;
    }

    // TODO: Cache this...
    public function categories($request)
    {
        $category = $request->param('Category');

        if ($category) {
            $data = [];
            $data['Projects'] = [];

            if ($category != 'all') {
                $cat = DataObject::get_one('SaltedHerring\Model\Category', ['Slug' => $category]);

                if (!$cat) {
                    return json_encode(['status' => 'error', 'message' => 'the category ' . $category . ' does not exist']);
                }

                $projects = Versioned::get_by_stage('SaltedHerring\Layout\ProjectPage', 'Live')
                    ->leftJoin('ProjectPage_Categories', 'ProjectPage_Categories.ProjectPageID = ProjectPage_Live.ID')
                    ->where(sprintf('ProjectPage_Categories.CategoryID = %d', $cat->ID));

                $data['Category'] = $cat->Title;
                $data['URLSegment'] = $cat->URLSegment;
            } else {
                $data['Category'] = 'All';
                $data['URLSegment'] = 'all';

                $projects = Versioned::get_by_stage('SaltedHerring\Layout\ProjectPage', 'Live');
            }

            foreach ($projects as $project) {
                $data['Projects'][] = [
                    'Title' => $project->Title,
                    'TagLine' => $project->TagLine,
                    'URLSegment' => $project->URLSegment
                ];
            }

            return json_encode(['status' => 'success', 'message' => '', 'data' => $data]);
        }

        return json_encode(['status' => 'error', 'message' => 'a category is required']);
    }
}
