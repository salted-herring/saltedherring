<?php

class OG extends DataObject {
	public static $db = array(
		'OGTitle' => 'Varchar(255)',
		'OGDescription' => 'Varchar(1024)'
	);

	public static $has_one = array(
		'OGImage' => 'Image'
	);
	
	public static $belongs_to = array(
		'Page' => 'Page'
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->addFieldToTab("Root.Facebook", new TextField('OGTitle', 'Title'));
		$fields->addFieldToTab("Root.Facebook", new TextField('OGDescription', 'Description'));
		$fields->addFieldToTab("Root.Facebook", new UploadField('OGImage', 'Image (min 200px X 200px)'));
		
		return $fields;
	}
	
	function getCMSFields_forPopup() {
        $fields = new FieldSet();
        $fields->push( new TextField('OGTitle', 'Title'));
        $fields->push( new TextField('OGDescription', 'Description') );
        $fields->push( new UploadField('OGImage', 'Image (min 200px X 200px)'));
        return $fields;
    }
}