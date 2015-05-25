<?php
class ContactPage extends Page {

	private static $db = array(
		'IntroText' => 'Varchar(256)',
		'PhoneNumber' => 'Varchar(256)',
		'Address' => 'Varchar(256)',
		'Email' => 'Varchar(256)',
		'MapLink' => 'Varchar(256)'
	);

	private static $has_one = array(
	);

	private static $has_many = array(
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->RemoveByName('Content');
		$fields->AddFieldToTab('Root.Main', new TextField('IntroText'));
		$fields->AddFieldToTab('Root.Main', new TextField('PhoneNumber'));
		$fields->AddFieldToTab('Root.Main', new TextareaField('Address'));
		$fields->AddFieldToTab('Root.Main', new TextField('Email'));
		$fields->AddFieldToTab('Root.Main', new TextField('MapLink'));
		return $fields;
	}

}
class ContactPage_Controller extends Page_Controller {

	private static $allowed_actions = array (
	);

	public function init() {
		parent::init();

	}

}
