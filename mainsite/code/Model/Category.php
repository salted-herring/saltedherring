<?php

class Category extends BaseDBO {
	private static $db = array(
		'Name'	=>	'Varchar(100)',
		'Slug'	=>	'Varchar(100)'
	);
	
	private static $extensions = array (
		'MetaDecorator', 'SeoObjectExtension'
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
	
	public function onBeforeWrite() {
		$this->Slug = preg_replace('/[^A-Za-z0-9]+/','-', strtolower($this->Name));
		parent::onBeforeWrite();
	}
	
	public function getTitle() {
		return $this->Name;
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->removeByName('Slug');
		$fields->removeByName('Projects');
		
		$fields->removeFieldFromTab('Root.Main', 'Title');
		
		return $fields;
	}
	
	public function legalName() {
		return str_replace(' ', '-', $this->Name);
	}
	
	public function getSiteConfig() {
		return SiteConfig::current_site_config();
	}
}