<?php
class ContactPage extends Page {

	private static $db = array(
		'IntroText' => 'Varchar(256)',
		'PhoneNumber' => 'Varchar(256)',
		'ContentTitle' => 'Varchar(128)',
		'ContentSubTitle' => 'Varchar(128)',
		'BodyCopy' => 'HTMLText',
		'Email' => 'Varchar(256)',
		'MapLink' => 'Varchar(256)'
	);

	private static $has_one = array(
		'ContentImage' => 'Image'
	);

	private static $has_many = array(
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->RemoveByName('Content');
		$fields->AddFieldToTab('Root.Main', new TextField('IntroText'));
		$fields->AddFieldToTab('Root.Main', new UploadField('ContentImage'));
		$fields->AddFieldToTab('Root.Main', new TextField('ContentTitle'));
		$fields->AddFieldToTab('Root.Main', new TextField('ContentSubTitle'));
		$fields->AddFieldToTab('Root.Main', new HtmlEditorField('BodyCopy'));
		$fields->AddFieldToTab('Root.Main', new TextField('Email', 'Email Button Text'));
		$fields->AddFieldToTab('Root.Main', new TextField('MapLink', 'Map Button Text'));

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
