<?php

class Service extends BaseDBO {
	private static $db = array(
		'Name' => 'Varchar(255)'
	);
	
	private static $has_one = array(
	);
	
	private static $has_many = array(
	);
	
	static $summary_fields = array(
		'Name'
	);
	
	private static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	static $belongs_many_many = array(
		'Projects' => 'Project'
	);
	
	public function getTitle() {
		return $this->Name;
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->removeByName('Projects');
		
		$fields->removeFieldFromTab('Root.Main', 'Title');
		
		return $fields;
	}
}