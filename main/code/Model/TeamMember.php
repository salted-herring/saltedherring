<?php

class TeamMember extends BaseDBO {
	public static $db = array(
		'FirstName' => 'Varchar(35)',
		'LastName' => 'Varchar(35)',
		'Role' => 'Varchar(50)',
		'Responsibilities' => 'Text',
		'Intro' => 'Text',
		'Bio' => 'HTMLText',
		'Email' => 'Varchar(100)',
		'MobileNumber' => 'Varchar(30)'
	);
	
	public static $has_one = array(
		'Photographer' => 'TeamMember',
		'Colour' => 'Colour'
	);
	
	public static $has_many = array(
		'Images' => 'ImageMedia'
	);
	
	static $summary_fields = array(
		'getUserName' => 'Name'
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
		'FirstName'
	);
	
	public function getUserName() {
		return $this->FirstName . ' ' . $this->LastName;
	}
	
	public function getTitle() {
		return $this->getUserName();
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->removeFieldFromTab('Root.Main', 'Title');
		$fields->removeFieldFromTab('Root.Main', 'PhotographerID');
		
		$responsibilities = $fields->fieldByName('Root.Main.Responsibilities');
		$responsibilities->setRightTitle('A comma separated list of responsibilities.');
		
		
		
		if($this->ID) {
			$gridFieldConfig = GridFieldConfig::create()->addComponents(
				new GridFieldAddNewButton(),
				new GridFieldToolbarHeader(),
				new GridFieldSortableHeader(),
				new GridFieldDataColumns(),
				new GridFieldEditButton(),
				new GridFieldDeleteAction(),
				new GridFieldDetailForm(),
				new GridFieldFilterHeader(),
				new GridFieldOrderableRows('SortOrder')
			);
			
			$fields->addFieldsToTab('Root.Images', array(
				$gridField = new GridField("Images", "Images", $this->Images(), $gridFieldConfig)
			));
			
			$fields->addFieldToTab('Root.Images', new DropdownField('PhotographerID', 'Photographer', TeamMember::get()->exclude(array('ID' => $this->ID))->map()), 'Images');
		}
		
		return $fields;
	}
}