<?php

class Category extends BaseDBO {
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
	
	private static $belongs_many_many = array(
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
	
	public function legalName() {
		return str_replace(' ', '-', $this->Name);
	}
}