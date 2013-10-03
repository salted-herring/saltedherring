<?php

class Service extends BaseDBO {
	public static $db = array(
		'Name' => 'Varchar(255)'
	);
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
		'Name'
	);
	
	public static $defaults = array(
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