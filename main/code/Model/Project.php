<?php

class Project extends BaseDBO {
	public static $db = array(
		'TagLine' => 'Varchar(50)',
		'Quote' => 'Varchar(255)',
		'Citation' => 'HTMLVarchar(255)',
		'ProjectInfo' => 'HTMLText',
		'SiteURL' => 'Varchar(255)'
	);
	
	public static $has_one = array(
		'Client' => 'Client',
		'Colour' => 'Colour'
	);
	
	public static $has_many = array(
		'ProjectAwards' => 'ProjectAward',
		'Media' => 'BaseMedia'
	);
	
	public static $many_many = array(
		'Categories' => 'Category',
		'Services' => 'Service'
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->removeByName('Categories');
		$fields->removeByName('ClientID');
		$fields->removeByName('Services');
		$fields->removeByName('Media');
		$fields->removeByName('ProjectAwards');
		
		$gridFieldConfig = GridFieldConfig::create()->addComponents(
			new GridFieldToolbarHeader(),
			new GridFieldSortableHeader(),
			new GridFieldDataColumns(),
			new GridFieldEditButton(),
			$add = new GridFieldAddNewButton(),
			new GridFieldDeleteAction(),
			new GridFieldDetailForm(),
			new GridFieldFilterHeader()
		);
		
		$add->setButtonName('Add Award');
		
		$cats = array();
		
		foreach(Category::get() as $cat) {
			$cats[$cat->ID] = $cat->Name;
		}
		
		$clients = array();
		
		foreach(Client::get() as $client) {
			$clients[$client->ID] = $client->Name;
		}
		
		$services = array();
		
		foreach(Service::get() as $service) {
			$services[$service->ID] = $service->Name;
		}
		
		// Root.Main
		$fields->addFieldsToTab('Root.Main', array(
			$title = new TextField('Title'),
			$tagLine = new TextField('TagLine', 'Tag Line'),
			$quote = new TextareaField('Quote'),
			$cite = new TextareaField('Citation', 'Source'),
			$categories = new CheckboxSetField($name='Categories', $title='Categories', $source=$cats),
			$serv = new CheckboxSetField($name='Services', $title='Services', $source=$services),
			$client = new OptionsetField('ClientID', 'Client', $clients),
		));
		
		$tagLine->setRightTitle('Short, single line description of project');
		$cite->setRightTitle('Quotation source. Can contain html tags - e.g. to link to twitter etc.');
		
		
		// Root.Award
		$fields->addFieldToTab('Root.Awards', new GridField("Awards", "Awards", $this->ProjectAwards(), $gridFieldConfig));
		
		
		// Root.Media
		$multiClasses = new GridFieldAddNewMultiClass();
		$multiClasses->setClasses(array('ImageMedia', 'SWFMedia', 'VimeoMedia'));
		
		$gridFieldConfig = GridFieldConfig::create()->addComponents(
			new GridFieldToolbarHeader(),
			new GridFieldSortableHeader(),
			new GridFieldDataColumns(),
			new GridFieldEditButton(),
			new GridFieldDeleteAction(),
			new GridFieldDetailForm(),
			new GridFieldFilterHeader(),
			new GridFieldOrderableRows('SortOrder'),
			$multiClasses
		);
		
		$fields->addFieldToTab('Root.Media', new GridField("Media", "Media", $this->Media(), $gridFieldConfig));
		
		return $fields;
	}
}


class ProjectAward extends DataObject {
	public static $db = array(
		'URL' => 'Varchar(255)'
	);
	
	public static $has_one = array(
		'Project' => 'Project',
		'Award' => 'Award'
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
		'Award.Name' => 'Name',
		'gettheURL' => 'URL'
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	public function gettheURL() {
		return DBField::create_field('HTMLVarchar', '<a href="' . $this->URL . '" target="_blank">' . $this->URL . '</a>');
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->removeByName('ProjectID');
		
		$fields->addFieldsToTab('Root.Main', array(
			$url = new TextField('URL')
		));
		
		$url->setRightTitle('This can be the awards site - or even better the link to the project on the awards site.');
		
		return $fields;
	}
	
	public function getTitle() {
		if($this->Award()) {
			return $this->Award()->Name;
		}
		
		return $this->ID;
	}
}