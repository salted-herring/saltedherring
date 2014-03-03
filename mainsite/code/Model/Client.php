<?php

class Client extends BaseDBO {
	private static $db = array(
		'Name' => 'Varchar(100)'
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
	
	private static $belongs_to = array(
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