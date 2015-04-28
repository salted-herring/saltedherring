<?php
class WorkPage extends Page {

	private static $db = array(
	);

	private static $has_one = array(
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		return $fields;
	}
}
class WorkPage_Controller extends Page_Controller {
	private static $allowed_actions = array (
		'home',
		'project',
		'getCategoryProjects',
		'getCurrentSession',
		'clearSession'
	);

	private static $url_handlers = array (
		'' => 'home',
		'project/$projectName/$meta' => 'project',
		'category/$Category/$meta' => 'getCategoryProjects'
	);

	public function init() {
		parent::init();
	}

	public function getTheTitle() {
		$title = parent::getTitle();

		if($this->request->param('projectName')) {
			$title .= ' - ' . DataObject::get_one('Project', "URLSegment='" . $this->request->param('projectName') . "'")->Title;
		} else if($this->request->param('Category')) {
			$title .= ' - ' . DataObject::get_one('Category', "URLSegment='" . $this->request->param('Category') . "'")->Title;
		}

		return $title;
	}

	public function project() {
		if($this->request->param('meta')) {
			return $this->meta($this->request);
		}

		$this->project = Project::get()->filter(array('URLSegment' => $this->request->param('projectName'), 'isPublished' => 1));

		if($this->project->count() == 0) {
			$this->project = false;
			return $this->httpError(404, 'The requested page could not be found.');
		}

		$project = $this->project->first();

		return $this->renderWith(array('ProjectPage', 'Page'), array(
			'Project' => $project,
			'Awards' => ProjectAward::get()->filter(array('ProjectID' => $project->ID))
		));
	}

	public function home() {
		$this->clearSession();
		return $this->renderWith(array('WorkPage', 'Page'));
	}

	public function clearSession() {
		Session::clear('category');
	}

	public function getCategoryProjects($request) {
		if($request->param('Category')) {
			$this->clearSession();
			Session::set('category', $request->param('Category'));
		}

		$cat = Category::get()->filter(array('URLSegment' => Session::get('category')));

		return $this->renderWith(array('WorkPage', 'Page'), array(
			'getAllProjects' => Project::get()->filter(array('isPublished' => 1)),
			'category' => Session::get('category'),
			'categoryName' => $cat->first()->legalName()
		));
	}

	public function getCurrentSession() {
		return Session::get('category');
	}

	public function getAllProjects() {
		return Project::get()->filter(array('isPublished' => 1));
	}

	public function getCategories() {
		return Category::get();
	}

	public function getOG($var = 'Title') {
		switch($var) {
			case 'Title':
				if($this->getTheTitle()) {
					return $this->getTheTitle();
				}
				return false;
			case 'Description':
				if($this->request->param('meta') || !isset($this->project)) {
					if ($this->OGDescription) {
						return $this->OGDescription;
					}

				} else {
					if ($this->project->count() == 0) {
						return Convert::raw2att($this->project->MetaDescription);
					}

					return Convert::raw2att($this->project->first()->MetaDescription);
				}

				return Convert::raw2att($this->MetaDescription);
			case 'Image':

				if (!isset($this->project) || $this->project->count() == 0) {
					if ($this->OGImage()) {
						return $this->OGImage();
					}
				} else {
					$media = $this->project->first()->Media()->filter('ClassName', 'ImageMedia');

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
