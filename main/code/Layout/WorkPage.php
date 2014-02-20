<?php
class WorkPage extends Page {
	
	public static $db = array(
	);
	
	public static $has_one = array(
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		return $fields;
	}
}
class WorkPage_Controller extends Page_Controller {
	/*
	public static $url_handlers = array (
		'project/$Project!' => 'getProject',
		'category/$Category!' => 'getCategoryProjects'
	);
*/
	
	public static $url_handlers = array (
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
		
		/*
if($request->param('meta')) {
			return $this->meta($request);
		}
		
		$cat = Category::get()->filter('URLSegment', $request->param('Category'));
		$Projects = false;
		
		if($cat) {
			$Projects = Project::get()->leftJoin('Project_Categories', 'Project.ID = Project_Categories.ProjectID')->filter('CategoryID', $cat->first()->ID);
		}
*/
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
}
