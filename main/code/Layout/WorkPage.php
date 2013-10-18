<?php
class WorkPage extends Page {
	
	public static $db = array(
	);
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
/* 		'Projects' => 'Project' */
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		return $fields;
	}
}
class WorkPage_Controller extends Page_Controller {
	
	/*
public static $allowed_actions = array (
		'project'
	);
*/
	
	public static $url_handlers = array (
		'project/$projectName!' => 'project'
	);
	
	public function init() {
		parent::init();
	}
	
	public function project() {
		$project = Project::get()->filter('URLSegment', $this->request->param('projectName'));
		
		if($project->count() == 0) {
			$this->httpError(404, 'The requested page could not be found.');
		}
		
		return $this->renderWith(array('ProjectPage', 'Page'), array(
			'Project' => $project->first()
		));
	}
	
	public function getCategories() {
		return Category::get();
	}
	
	public function getWork() {
		return Project::get();
	}
}
