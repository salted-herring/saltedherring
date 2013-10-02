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
		
		$gridFieldConfig = GridFieldConfig::create()->addComponents(
			new GridFieldToolbarHeader(),
			new GridFieldSortableHeader(),
			new GridFieldDataColumns(),
			new GridFieldEditButton(),
			$add = new GridFieldAddNewButton(),
			new GridFieldDeleteAction(),
			new GridFieldDetailForm(),
			new GridFieldFilterHeader(),
			new GridFieldOrderableRows('SortOrder')
		);
		
		//$add->setButtonName('Add Project');
		
		$gridfield = new GridField("Projects", "Projects", Project::get(), $gridFieldConfig);
		$fields->addFieldToTab('Root.Projects', $gridfield);
		
		return $fields;
	}
}
class WorkPage_Controller extends Page_Controller {
	
	public static $allowed_actions = array (
	);
	
	public function init() {
		parent::init();
		
	}
	
	
}
