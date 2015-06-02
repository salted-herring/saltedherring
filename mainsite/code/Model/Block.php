<?php

class Block extends DataObject {
	private static $db = array(
		'Title' => 'Varchar(128)',
		'SubTitle' => 'Varchar(128)',
		'BodyCopy' => 'HTMLText',
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

}
