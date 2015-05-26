<?php

class Slider extends BaseDBO {
	private static $db = array(
		'Header' => 'Varchar(100)',
		'Keyword' => 'Varchar(50)',
		'Description' => 'Varchar(100)',
		'LinkDescription' => 'Varchar(100)',
		'LinkTitle' => 'Varchar(100)',
		'Explanation' => 'Text',
		'SubTitle' => 'Varchar(100)',
		'SubExplanation' => 'Text',
	);

	private static $has_one = array(
		'Link' => 'Page',
		'Project' => 'Project',
		'OverlayImage' => 'Image',
		'Colour' => 'Colour'
	);

	private static $has_many = array(
		'Images' => 'SliderImage'
	);

	private static $default_sort = 'SortOrder ASC';

	static $summary_fields = array(
	);

	private static $defaults = array(
	);

	static $searchable_fields = array(
	);

	static $single_name = 'Slide';
	static $plural_name = 'Slides';


	public function onBeforeWrite() {
		parent::onBeforeWrite();

		$dir = ROOT . 'themes/' . SiteConfig::current_site_config()->Theme . '/json/';
		$data = array();

		foreach(Slider::get() as $slider) {

			//$projects = Project::get()->leftJoin('Project_Categories', 'Project.ID = Project_Categories.ProjectID')->filter('CategoryID', $cat->ID);

			$current = array(
				'Slider' => $slider->ID,
				'Images' => array()
			);

			foreach($slider->Images() as $img) {
				array_push($current['Images'], array(
					'URL' => $img->Image()->URL
				));
			}

			array_push($data, $current);
		}

		try {
			$handle = fopen($dir . 'sliders.json', 'w');
			fwrite($handle, json_encode($data));
			fclose($handle);
		} catch(Exception $e) {
			user_error($e, E_USER_WARNING);
		}
	}

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->removeByName('Images');
		$fields->removeByName('Main');



		$header = new TextField('Header');
		$keyword = new TextField('Keyword');
		$title = new TextField('Title');
		$description = new TextField('Description');
		$explanation = new TextareaField('Explanation');
		$subTitle = new TextField('SubTitle');
		$subExplanation = new TextareaField('SubExplanation');
		$link = new DropdownField("LinkID", "Link", SiteTree::get()->map('ID', 'Title'));
		$linkDescription = new TextField('LinkDescription', 'Link Description');
		$overlay = new UploadField('OverlayImage', 'Overlay Image');
		$project = new DropdownField("ProjectID", "Project", Project::get()->map('ID', 'Title'), $emptyString = 'x');

		$project->setEmptyString('(Choose) …');
		$link->setEmptyString('(Choose) …');

		$gridFieldConfig = GridFieldConfig::create()->addComponents(
			new GridFieldToolbarHeader(),
			new GridFieldSortableHeader(),
			new GridFieldDataColumns(),
			new GridFieldEditButton(),
			new GridFieldAddNewButton(),
			new GridFieldDeleteAction(),
			new GridFieldDetailForm(),
			new GridFieldFilterHeader(),
			new GridFieldOrderableRows('SortOrder')
		);
		$gridfield = new GridField("Images", "Images", $this->Images(), $gridFieldConfig);

		$fields->addFieldsToTab('Root.Content', array(
			$header,
			$keyword,
			$title,
			$colour = new DropdownField("ColourID", "Colour", Colour::get()->map('ID', 'Name')),
			$description,
			new ToggleCompositeField(
				'Link',
				'Internal Link or Project',
				array(
					new HeaderField('Label', 'Choose either an internal link or project to link to.', 4),
					$link,
					new TextField ('LinkTitle'),
					$project
				)
			),
			$linkDescription,
			$explanation,
			$subTitle,
			$subExplanation,
			$overlay,
			$gridfield
		));

		$colour->setEmptyString('(Choose) …');

		$header->setRightTitle('Line of header text at the top of the slide. e.g. Hi There! Welcome to:');
		$keyword->setRightTitle('The large text. e.g. CHOCOLATE');
		$description->setRightTitle('Description of what the slide represents - e.g. The world\'s first chocolate website.');
		$explanation->setRightTitle('Explanation text that explains to the user and seo what they see.');
		$subTitle->setRightTitle('Sub heading within content.');
		$subExplanation->setRightTitle('Second Paragraph.');
		$linkDescription->setRightTitle('Text of the link');
		$link->setRightTitle('A page in the site to link to');
		$title->setRightTitle('e.g. Whittakers\' Chocolate');
		$overlay->setRightTitle('An optional image layer. This image will be used to produce a parallax effect.');

		return $fields;
	}
}