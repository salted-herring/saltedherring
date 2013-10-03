<?php
class AboutPage extends Page {
	
	public static $db = array(
		'IntroText' => 'Text'
	);
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->AddFieldToTab('Root.Main', new TextareaField('IntroText'));
		$fields->AddFieldToTab('Root.Main', new HTMLEditorField('Content'));
		
		return $fields;
	}
	
}
class AboutPage_Controller extends Page_Controller {
	
	public static $allowed_actions = array (
	);
	
	public function init() {
		parent::init();
		
	}
	
}
