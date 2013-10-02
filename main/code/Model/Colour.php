<?php

class Colour extends BaseDBO {
	public static $db = array(
		'Name' => 'Varchar(25)',
		'Value' => 'Varchar(25)'
	);
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
	);
	
	public static $summary_fields = array(
		'Name' => 'Name'
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
		
		$fields->removeByName('Projects');
		$fields->addFieldToTab('Root.Main', new ColorField('Value', 'Colour'));
		
		$fields->removeFieldFromTab('Root.Main', 'Title');
		
		return $fields;
	}
	
	public function getColourVal() {
		/* if($this->Image()->exists()) { */
			return null;//DBField::create_field('HTMLVarchar', '<div style="width:40px;height:40px;background-color:' . $this->Value . ';"/>');
/* 		} */
/* 		return null;  */
	}
}