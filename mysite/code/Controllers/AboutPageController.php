<?php

namespace SaltedHerring\Controllers;

use SaltedHerring\Model\AboutSection;
use SilverStripe\ORM\DataObject;
use PageController;

class AboutPageController extends PageController
{
    private static $allowed_actions = array(
        'subsections'
    );

    private static $url_handlers = array(
        '$subsections!/$arg'    => 'subsections'
    );


    public function init()
    {
        parent::init();
    }
    public function subsections($request)
    {
        $subsection = DataObject::get_one('AboutSection', "URLSegment='" . $request->param('subsections') . "'");

        if (!$subsection->exists()||!$subsection->isPublished) {
            $this->httpError(404, 'The requested page could not be found.');
        }

        $this->MetaTitle = $subsection->Title;
        $this->MetaDescription = $subsection->MetaDescription;

        return $this->renderWith(array('AboutSectionPage', 'Page'), array(
            'Section' => $subsection
        ));
    }

    public function getSections()
    {
        return AboutSection::get()->filter(array('isPublished' => true));
    }
}
