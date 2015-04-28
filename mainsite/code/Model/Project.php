<?php

class Project extends BaseDBO {
	private static $db = array(
		'TagLine' => 'Varchar(50)',
		'Quote' => 'Varchar(255)',
		'Citation' => 'HTMLVarchar(255)',
		'ProjectInfo' => 'HTMLText',
		'SiteURL' => 'Varchar(255)',
		'isPublished' => 'Boolean'
	);

	private static $has_one = array(
		'Client' => 'Client',
		'Colour' => 'Colour'
	);

	private static $has_many = array(
		'ProjectAwards' => 'ProjectAward',
		'Media' => 'BaseMedia'
	);

	private static $many_many = array(
		'Categories' => 'Category',
		'Services' => 'Service',
		'RelatedProjects' => 'Project'
	);

	private static $belongs_to = array(
		'Slider' => 'Slider'
	);

	private static $belongs_many_many = array(
		'Project' => 'Project'
	);

	private static $defaults = array(
		'isPublished' => true
	);

	private static $summary_fields = array(
		'Title',
		'isPublished'
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->removeByName('Categories');
		$fields->removeByName('ClientID');
		$fields->removeByName('Services');
		$fields->removeByName('Media');
		$fields->removeByName('ProjectAwards');
		$fields->removeByName('Project');
		$fields->removeByName('RelatedProjects');

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

		$rel = array();

		foreach(Project::get()->exclude(array('ID' => $this->ID)) as $project) {
			$rel[$project->ID] = $project->Title;
		}

		// Root.Main
		$fields->addFieldsToTab('Root.Main', array(
			$title = new TextField('Title'),
			$tagLine = new TextField('TagLine', 'Tag Line'),
			$quote = new TextareaField('Quote'),
			$cite = new TextField('Citation', 'Source'),
			$categories = $this->ID ? new ListboxField($name = "Categories", $title = "Categories") : new LiteralField('CatWarn', '<p><strong>Categories</strong> can be added once the project has been created</p>'),
			$serv = $this->ID ? new ListboxField($name = "Services", $title = "Services") : new LiteralField('ServiceWarn', '<p><strong>Services</strong> can be added once the project has been created</p>'),
			$client = new DropDownField('ClientID', 'Client', $clients),
			$related = $this->ID ? new ListboxField($name = "RelatedProjects", $title = "Related Projects")  : new LiteralField('RelatedWarn', '<p><strong>Related Projects</strong> can be added once the project has been created</p>'),
		));

		if($this->ID) {
			$categories->setSource($cats);
			$categories->setMultiple(true);

			$serv->setSource($services);
			$serv->setMultiple(true);

			$related->setSource($rel);
			$related->setMultiple(true);
		}

		$tagLine->setRightTitle('Short, single line description of project');
		$cite->setRightTitle('Quotation source. Can contain html tags - e.g. to link to twitter etc.');
		$quote->setTitle('Quote - use “ & ” for quote marks.');

		if($this->ID) {
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

			$url = new HiddenField('URLSegment');
			$url->setAttribute('data-prefix', 'http://' . $_SERVER['HTTP_HOST']);
			$url->setAttribute('value', $this->Link());
			$fields->addFieldToTab('Root.Main', $url);
		}

		return $fields;
	}


	public function getURL() {
		return '/work/project/' . $this->URLSegment;
	}

	public function AbsoluteLink() {
		return Director::absoluteURL($this->Link());
	}

	public function Link() {
		return $this->getURL();
	}

	public function getFirstImage() {
		$im = NULL;
		foreach($this->Media() as $media) {
			if($media->getType() == 'Image') {
				return $media;
			}
		}

		return $im;
	}

	public function getAllMedia() {
		$curr = $this->getFirstImage();

		if($curr) {
			return $this->Media()->exclude(array(
				'ID' => $curr->ID
			));
		}

		return $this->Media;
	}

	private function checkPageSubjectInFirstParagraph() {
		if ($this->checkPageSubjectDefined()) {
			$first_paragraph = $this->ProjectInfo->FirstParagraph();

			if (trim($first_paragraph != '')) {
				if (preg_match('/' . $this->SEOPageSubject . '/i', $first_paragraph)) {
					return true;
				}
				else {
					return false;
				}
			}
		}

		return false;
	}

	public function onBeforeWrite() {
		parent::onBeforeWrite();

		if($this->MetaDescription == NULL) {
			$this->MetaDescription = $this->Title . ' - ' . $this->TagLine;
		}

		$dir = ROOT . 'themes/' . SiteConfig::current_site_config()->Theme . '/json/';
		$data = array();

		foreach(Category::get() as $cat) {
			$projects = Project::get()->filter(array('isPublished' => 1))->leftJoin('Project_Categories', 'Project.ID = Project_Categories.ProjectID')->filter('CategoryID', $cat->ID);

			$current = array(
				'Category' => $cat->Title,
				'URLSegment' => $cat->URLSegment,
				'Projects' => array()
			);

			foreach($projects as $project) {
				array_push($current['Projects'], array(
					'Title' => $project->Title,
					'TagLine' => htmlentities($project->TagLine),
					'URLSegment' => $project->URLSegment
				));
			}

			try {
				$handle = fopen($dir . $cat->URLSegment . '.json', 'w');
				fwrite($handle, json_encode($current));
				fclose($handle);
			} catch(Exception $e) {
				user_error($e, E_USER_WARNING);
			}
		}

		$all = array();

		foreach(Project::get()->filter(array('isPublished' => 1)) as $project) {
			array_push($all, array(
				'Title' => $project->Title,
				'TagLine' => htmlentities($project->TagLine),
				'URLSegment' => $project->URLSegment
			));
		}

		try {
			$handle = fopen($dir . 'all.json', 'w');
			fwrite($handle, json_encode($all));
			fclose($handle);
		} catch(Exception $e) {
			user_error($e, E_USER_WARNING);
		}
	}

	public function getValidRelatedProjects() {
		return $this->RelatedProjects()->filter(array('isPublished' => 1));
	}

	public function canView($member = null) {
		if(Permission::check('ADMIN')) {
			return true;
		}
		return $this->isPublished;
	}

	public function getSiteConfig() {
		return SiteConfig::current_site_config();
	}
}


class ProjectAward extends DataObject {
	private static $db = array(
		'URL' => 'Varchar(255)'
	);

	private static $has_one = array(
		'Project' => 'Project',
		'Award' => 'Award'
	);

	private static $has_many = array(
	);

	static $summary_fields = array(
		'Award.Name' => 'Name',
		'gettheURL' => 'URL'
	);

	private static $defaults = array(
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
