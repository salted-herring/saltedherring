<?php

class AboutSection extends BaseDBO {
	private static $db = array(
		'SectionSubTitle' => 'Varchar(128)',
	);

	private static $has_one = array(
		'Colour' => 'Colour',
		'Thumbnail' => 'Image',
		'HeroImage' => 'Image',
	);

	private static $has_many = array(
		'Blocks' => 'Block'
	);

	static $summary_fields = array(

	);

	private static $defaults = array(
	);

	static $searchable_fields = array(

	);


	public function getLeft() {
		$Blocks = $this->Blocks()->filter(array('Col'=>'left','isPublished'=>true));
		if ($Blocks) {
			return $Blocks;
		}
		return false;
	}


	public function getRight() {
		$Blocks = $this->Blocks()->filter(array('Col'=>'right','isPublished'=>true));
		if ($Blocks) {
			return $Blocks;
		}
		return false;
	}





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

		$add->setButtonName('Add block');

		$gridfield = new GridField("Blocks", "Blocks", $this->Blocks(), $gridFieldConfig);
		$fields->addFieldToTab('Root.Blocks', $gridfield);

		return $fields;
	}




	public function onBeforeWrite() {
		parent::onBeforeWrite();

		if($this->MetaDescription == NULL) {
			$this->MetaDescription = $this->Title;
		}
	}

	public function AbsoluteLink() {
		return Director::absoluteURL($this->Link());
	}

	public function Link() {
		return '/about/' . $this->URLSegment;
	}

	public function getSiteConfig() {
		return SiteConfig::current_site_config();
	}

	public function canView($member = null) {
		if(Permission::check('ADMIN')) {
			return true;
		}
		return $this->isPublished;
	}
}
