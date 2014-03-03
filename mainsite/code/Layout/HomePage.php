<?php
class HomePage extends Page {
	
	private static $has_many = array(
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
		
		$gridfield = new GridField("Slides", "Slides", Slider::get(), $gridFieldConfig);
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
	
	public function init() {
		parent::init();
	}
	
	public function getSliders() {
		/*
print_r(Slider::get()->filter(array('ID' => 15)));
		die;
*/
		return Slider::get();
	}
}
