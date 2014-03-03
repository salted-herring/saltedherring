<?php

class TeamMember extends BaseDBO {
	private static $db = array(
		'FirstName' => 'Varchar(35)',
		'LastName' => 'Varchar(35)',
		'Role' => 'Varchar(50)',
		'Responsibilities' => 'Text',
		'Intro' => 'Text',
		'Bio' => 'HTMLText',
		'Email' => 'Varchar(100)',
		'MobileNumber' => 'Varchar(30)'
	);
	
	private static $has_one = array(
		'Photographer' => 'TeamMember',
		'Colour' => 'Colour'
	);
	
	private static $has_many = array(
		'Images' => 'ImageMedia'
	);
	
	static $summary_fields = array(
		'getUserName' => 'Name'
	);
	
	private static $defaults = array(
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
	
	public function getOtherPortraits() {
		if($this->Images()->first()) {
			$images = $this->Images()->exclude(array('ID' => $this->Images()->first()->ID));
		
			$portraits = array();
			
			foreach($images as $image) {
				array_push($portraits, $image->outputImage()->URL);
			}
			
			return json_encode(array('data' => $portraits));
		}
		
		return json_encode(array('data' => NULL));
	}
	
	public function firstAnimatedImage() {
		if($this->Images()->first()) {
			$images = $this->Images()->exclude(array('ID' => $this->Images()->first()->ID));
		
			if($images) {
				return $images->first();
			}
		}
		
		return false;
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
	
	public function onBeforeWrite() {
		parent::onBeforeWrite();
		
		$dir = ROOT . 'themes/' . SiteConfig::current_site_config()->Theme . '/json/';
		$data = array();
		
		foreach(TeamMember::get() as $member) {
			array_push($data, array(
				'Title' => $member->getUserName(),
				'TagLine' => htmlentities($member->Role),
				'URLSegment' => $member->URLSegment
			));
		}
		
		try {
			$handle = fopen($dir . 'team.json', 'w');
			fwrite($handle, json_encode($data));
			fclose($handle);
		} catch(Exception $e) {
			user_error($e, E_USER_WARNING);
		}
	}
}