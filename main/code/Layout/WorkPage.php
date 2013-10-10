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
	
	public static $allowed_actions = array (
		'project'
	);
	
	public function init() {
		parent::init();
	}
	
	public function project() {
		return $this->renderWith(array('ProjectPage', 'Page'));
	}
}
