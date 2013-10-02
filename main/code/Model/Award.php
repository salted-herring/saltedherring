<?php

class Award extends BaseDBO {
	public static $db = array(
		'Name' => 'Varchar(50)'
	);
	
	public static $has_one = array(
		'Logo' => 'Image'
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
	
	static $belongs_to = array(
		'ProjectAward'
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