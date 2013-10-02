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
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	public function getTitle() {
		return $this->Name;
	}
}