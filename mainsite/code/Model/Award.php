<?php

class Award extends BaseDBO {
	private static $db = array(
		'Name' => 'Varchar(50)'
	);
	
	private static $has_one = array(
		'Logo' => 'Image'
	);
	
	private static $has_many = array(
	);
	
	static $summary_fields = array(
		'getThumbnail' => 'Logo',
		'Name'
	);
	
	private static $defaults = array(
	);
	
	static $searchable_fields = array(
		'Name'
	);
	
	static $belongs_to = array(
		'ProjectAward'	=>	'ProjectAward'
	);
	
	public function getTitle() {
		return $this->Name;
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->removeFieldFromTab('Root.Main', 'Title');
		
		return $fields;
	}
	
	public function getThumbnail() {
		if($this->Logo()->exists()) {
			return DBField::create_field('HTMLVarchar', '<img src="' . $this->Logo()->CroppedImage(40,40)->URL . '"/>');
		}
		return null; 
	}
}