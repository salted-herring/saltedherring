<?php

class Client extends BaseDBO {
	public static $db = array(
		'Name' => 'Varchar(100)'
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
	
	public static $belongs_to = array(
		'Projects' => 'Project'
	);
	
	public function getTitle() {
		return $this->Name;
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->removeFieldFromTab('Root.Main', 'Title');
		
		return $fields;
	}
}