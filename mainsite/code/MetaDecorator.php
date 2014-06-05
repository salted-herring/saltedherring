<?php

class MetaDecorator extends DataExtension {
	private static $db = array(
		'MetaDescription' => 'Varchar(160)'
	);
	
	private static $has_one = array(
	);
	
	private static $has_many = array(
	);
	
	private static $summary_fields = array(
	);
	
	private static $defaults = array(
	);
	
	private static $searchable_fields = array(
	);
	
	public function updateCMSFields(FieldList $fields) {
		$fields->removeFieldsFromTab('Root.Main', array(
			'MetaDescription'
		));
	
		//$fields->addFieldToTab('Root.SEO', $description = new TextareaField('MetaDescription', 'Description'));
		
		//$description->setRightTitle('Limited to 160 characters.');
	}
	
	public function getDescription() {
		return $this->owner->MetaDescription;
	}
}