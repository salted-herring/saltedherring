<?php
class AboutPage extends Page {

	private static $db = array(
		'PageTitle' => 'Varchar(128)',
		'SubTitle' => 'Varchar(128)',
		'IntroCopy' => 'Text'
	);

	private static $has_one = array(
	);

	private static $has_many = array(
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->removeByName('Content');

		$fields->AddFieldToTab('Root.Main', new TextField('PageTitle'));
		$fields->AddFieldToTab('Root.Main', new TextField('SubTitle'));
		$fields->AddFieldToTab('Root.Main', new TextareaField('IntroCopy'));



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

		$add->setButtonName('Add sub section');

		$gridfield = new GridField("Subsections", "Sub sections", AboutSection::get(), $gridFieldConfig);
		$fields->addFieldToTab('Root.Subsections', $gridfield);




		return $fields;




	}

}
class AboutPage_Controller extends Page_Controller {

	private static $allowed_actions = array (
		'subsections'
	);

	private static $url_handlers = array (
		'$subsections!/$arg'	=> 'subsections'
	);


	public function init() {
		parent::init();

	}
	public function subsections($request) {

		$subsection = DataObject::get_one('AboutSection', "URLSegment='" . $request->param('subsections') . "'");

		if(!$subsection->exists()||!$subsection->isPublished) {
			$this->httpError(404, 'The requested page could not be found.');
		}

		$this->MetaTitle = $subsection->Title;
		$this->MetaDescription = $subsection->MetaDescription;
		// $this->currentMember = $teamMember;


		return $this->renderWith(array('AboutSectionPage', 'Page'), array(
			'Section' => $subsection
		));



	}


	public function getSections() {
		return AboutSection::get()->filter(array('isPublished' => true));
	}

}
















