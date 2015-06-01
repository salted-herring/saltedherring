<?php

class Block extends DataObject {
	private static $db = array(
		'Title' => 'Varchar(128)',
		'SubTitle' => 'Varchar(128)',
		'BodyCopy' => 'Text',
		'SortOrder' => 'Int',
		'Col' => 'Enum("left,right")',
	);

	private static $has_one = array(
		'Section' => 'AboutSection'
	);

	private static $has_many = array(

	);

	static $summary_fields = array(
		'Title', 'Col'
	);

	private static $defaults = array(
	);

	static $searchable_fields = array(

	);


	private static $default_sort = 'SortOrder';


	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->removeByName('SortOrder');
		$fields->removeByName('SectionID');


		return $fields;
	}




	// public function onBeforeWrite() {
	// 	parent::onBeforeWrite();

	// 	if($this->MetaDescription == NULL) {
	// 		$this->MetaDescription = $this->FirstName . $this->LastName . ' - ' . $this->Role . '. ' .$this->Intro;
	// 	}
	// }

	// public function AbsoluteLink() {
	// 	return Director::absoluteURL($this->Link());
	// }

	// public function Link() {
	// 	return '/team/' . $this->URLSegment;
	// }

	// public function getSiteConfig() {
	// 	return SiteConfig::current_site_config();
	// }

	// public function canView($member = null) {
	// 	if(Permission::check('ADMIN')) {
	// 		return true;
	// 	}
	// 	return $this->isPublished;
	// }
}
