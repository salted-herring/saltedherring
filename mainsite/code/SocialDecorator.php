<?php

class SocialDecorator extends DataExtension {
	public static $db = array(
		'OGTitle' => 'Varchar(255)',
        'OGDescription' => 'Varchar(255)'
	);
	public static $has_one =  array(
		'OGImage' => 'Image'
	);
	
	function __construct() {
		parent::__construct();
	}
	
	function getCMSFields() {	 
	    $fields = parent::getCMSFields();
	    return $fields;
	}
    
	public function updateCMSFields(FieldList $fields) {
		$og = ToggleCompositeField::create(
			'OG',
			new LabelField('Open', 'Open Graph Tags - for Facebook sharing'),
			array(
				new TextField('OGTitle', 'Title'),
				new TextField('OGDescription', 'Description'),
				new UploadField('OGImage', 'Image')
			)
		);
		$og->setStartClosed(false);
		$fields->addFieldToTab('Root.Social', $og);
	}
	
	public function onBeforeWrite() {
		parent::onBeforeWrite();
		
		if($this->owner->ID && $this->owner->Title && !$this->owner->OGTitle) {
			$this->owner->OGTitle = $this->owner->Title;
		}
		
		if($this->owner->ID && $this->owner->Content && !$this->owner->OGDescription) {
			$matches = array();
			preg_match('(<p.*>(.*)</p>)', $this->owner->Content, $matches);
			
			if($matches) {
				$this->owner->OGDescription = $matches[1];
			}
		}
	}
}