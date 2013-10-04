<?php

class NewsItem extends BaseDBO {
	public static $db = array(
		'Text' => 'HTMLText'
	);
	
	public static $has_one = array(
		'HomePage' => 'HomePage'
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
		'Text'
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->removeFieldFromTab('Root.Main', 'Title');
		$fields->removeFieldFromTab('Root.Main', 'HomePageID');
		return $fields;
	}
}