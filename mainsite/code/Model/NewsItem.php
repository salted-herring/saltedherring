<?php

class NewsItem extends BaseDBO {
	private static $db = array(
		'Text' => 'HTMLText'
	);
	
	private static $has_one = array(
		'HomePage' => 'HomePage'
	);
	
	private static $has_many = array(
	);
	
	static $summary_fields = array(
		'Text'
	);
	
	private static $defaults = array(
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