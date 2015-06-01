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
		'Colour' => 'Colour',
		'ThumbnailOver' => 'Image'
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
			$images = $this->Images();

			$portraits = array();

			foreach($images as $image) {
				array_push($portraits, $image->outputImage()->URL);
			}

			return json_encode(array('data' => $portraits));
		}

		return json_encode(array('data' => NULL));
	}

	public function firstAnimatedImage() {
		return false;
	}

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->removeFieldFromTab('Root.Main', 'Title');

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

			$fields->insertAfter($fields->fieldByName('Root.Main.ThumbnailOver'), 'Thumbnail');

			$url = new HiddenField('URLSegment');
			$url->setAttribute('data-prefix', 'http://' . $_SERVER['HTTP_HOST']);
			$url->setAttribute('value', $this->Link());
			$fields->addFieldToTab('Root.Main', $url);
		}

		return $fields;
	}

	public function onBeforeWrite() {
		parent::onBeforeWrite();

		if($this->MetaDescription == NULL) {
			$this->MetaDescription = $this->FirstName . $this->LastName . ' - ' . $this->Role . '. ' .$this->Intro;
		}
	}

	public function AbsoluteLink() {
		return Director::absoluteURL($this->Link());
	}

	public function Link() {
		return '/team/' . $this->URLSegment;
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
