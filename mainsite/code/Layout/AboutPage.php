<?php
class AboutPage extends Page {
	
	private static $db = array(
		'IntroText' => 'Text'
	);
	
	private static $has_one = array(
	);
	
	private static $has_many = array(
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->AddFieldToTab('Root.Main', new TextareaField('IntroText'));
		$fields->AddFieldToTab('Root.Main', new HTMLEditorField('Content'));
		
		return $fields;
	}
	
}
class AboutPage_Controller extends Page_Controller {
	
	private static $allowed_actions = array (
	);
	
	public function init() {
		parent::init();
		
	}
	
}