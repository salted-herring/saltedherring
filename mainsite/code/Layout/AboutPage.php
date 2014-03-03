<?php
class AboutPage extends Page {
	
	private static $db = array(
		'IntroText' => 'Text'
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->AddFieldToTab('Root.Main', new TextareaField('IntroText'));
		$fields->AddFieldToTab('Root.Main', new HTMLEditorField('Content'));
		
		return $fields;
	}
	
}
class AboutPage_Controller extends Page_Controller {
	
	public function init() {
		parent::init();
		
	}
	
}
