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
		'project/$projectName!' => 'project',
		'category/$Category!' => 'getCategoryProjects'
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
	
	/*
public function getProject($request) {
		$Project = Project::get()->filter(array('URLSegment' => $request->param('Project')));
		return $this->renderWith(array('ProjectPage', 'Page'), array(
			'Project' => $Project
		));
	}
*/
	
	public function getCategoryProjects($request) {
		$cat = Category::get()->filter('URLSegment', $request->param('Category'));
		$Projects = false;
		if($cat) {
			$Projects = Project::get()->leftJoin('Project_Categories', 'Project.ID = Project_Categories.ProjectID')->filter('CategoryID', $cat->first()->ID);
		}
		
		return $this->renderWith(array('WorkPage', 'Page'), array(
			'getAllProjects' => $Projects->count() == 0 ? false : $Projects,
			'category' => $request->param('Category')
		));
	}
	
	public function getAllProjects() {
		return Project::get();
	}
	
	public function getCategories() {
		return Category::get();
	}
}
