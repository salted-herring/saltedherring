<?php
class HomePage extends Page {
	
	public static $db = array(
	);
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
		'Sliders' => 'Slider',
		'NewsItems' => 'NewsItem'
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$gridFieldConfig = GridFieldConfig::create()->addComponents(
			new GridFieldToolbarHeader(),
			new GridFieldSortableHeader(),
			new GridFieldDataColumns(),
			new GridFieldEditButton(),
			$add = new GridFieldAddNewButton(),
			new GridFieldDeleteAction(),
			new GridFieldDetailForm(),
			new GridFieldFilterHeader(),
			new GridFieldOrderableRows('SortOrder')
		);
		
		$add->setButtonName('Add Slide');
		
		$gridfield = new GridField("Slides", "Slides", $this->Sliders(), $gridFieldConfig);
		$fields->addFieldToTab('Root.Slides', $gridfield);
		
		$gridFieldConfig = GridFieldConfig::create()->addComponents(
			new GridFieldToolbarHeader(),
			new GridFieldSortableHeader(),
			new GridFieldDataColumns(),
			new GridFieldEditButton(),
			$add = new GridFieldAddNewButton(),
			new GridFieldDeleteAction(),
			new GridFieldDetailForm(),
			new GridFieldFilterHeader(),
			new GridFieldOrderableRows('SortOrder')
		);
		
		$add->setButtonName('Add News');
		
		$gridfield = new GridField("News", "News", $this->NewsItems(), $gridFieldConfig);
		$fields->addFieldToTab('Root.News', $gridfield);
		
		return $fields;
	}
	
}
class HomePage_Controller extends Page_Controller {
	
	public static $allowed_actions = array (
	);
	
	public function init() {
		parent::init();
	}
}
