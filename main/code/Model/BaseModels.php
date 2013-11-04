<?php

class BaseDBO extends DataObject {
	public static $db = array(
		'Title' => 'Varchar(255)',
		'URLSegment' => 'Varchar(255)',
		'SortOrder' => 'Int'
	);
	
	public static $default_sort = 'SortOrder ASC';
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	function canView($member = false) {
    	return true;
	}
	function canEdit($member = false) {
		return true;
	}
	function canDelete($member = false) {
		return true;
	}
	function canCreate($member = false) {
		return true;
	}
	function canPublish($member = false) {
		return true;
	}
	
	function onBeforeWrite()
    {       
        // If there is no URLSegment set, generate one from Title
        if(!$this->URLSegment) 
        {
        	$name = $this->Title;
        	$filter = URLSegmentFilter::create();
			$this->URLSegment = $filter->filter($this->getTitle());
			// Fallback to generic page name if path is empty (= no valid, convertable characters)
			if(!$this->URLSegment) $this->URLSegment = $this->getTitle();
        } 
        else// if($this->isChanged('Title')) 
        {
            // Make sure the URLSegment is valid for use in a URL
            $segment = preg_replace('/[^A-Za-z0-9]+/','-', $this->getTitle());
            //$segment = preg_replace('/-+/','-',$segment);
              
            // If after sanitising there is no URLSegment, give it a reasonable default
            if(!$segment) {
                $segment = $this->getTitle();
            }
            $this->URLSegment = $segment;
        }
  
        // Ensure that this object has a non-conflicting URLSegment value.
        $count = 2;
        while($this->LookForExistingURLSegment($this->URLSegment)) 
        {
            $this->URLSegment = preg_replace('/-[0-9]+$/', null, $this->URLSegment) . '-' . $count;
            $count++;
        }
        
        $this->URLSegment = strtolower(trim($this->URLSegment, '-'));
        
        
        // Sort Order		
        if(!$this->ID) {
        	$query = DB::query("SELECT MIN(SortOrder) FROM BaseDBO WHERE ClassName = '" . $this->getClassName() . "'");
        	
        	if($query) {
	        	$minVal = (int)($query->value());   	
				$this->SortOrder = $minVal - 1;
        	}
        }
  
        parent::onBeforeWrite();
    }
          
    //Test whether the URLSegment exists already on another Product
    function LookForExistingURLSegment($URLSegment)
    {
        return (DataObject::get_one('BaseDBO', "URLSegment = '" . $URLSegment ."' AND BaseDBO.ID != " . $this->ID));
    }
    
    public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->RemoveFieldFromTab('Root.Main', 'URLSegment');
		$fields->RemoveFieldFromTab('Root.Main', 'SortOrder');
		$fields->RemoveFieldFromTab('Root.Main', 'Version');
		
		return $fields;
	}
	
	
}

class BaseMedia extends DataObject {
	public static $db = array(
		'Title' => 'Varchar(100)',
		'SortOrder' => 'Int'
	);
	
	function canView($member = false) {
    	return true;
	}
	function canEdit($member = false) {
		return true;
	}
	function canDelete($member = false) {
		return true;
	}
	function canCreate($member = false) {
		return true;
	}
	function canPublish($member = false) {
		return true;
	}
	
	public static $default_sort = 'SortOrder ASC, ID DESC';
	
	public static $has_one = array(
		'Project' => 'Project'
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
		'Title',
		'Type'
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	public function getType() {
		return $this->singular_name();
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->RemoveFieldFromTab('Root.Main', 'SortOrder');
		$fields->RemoveFieldFromTab('Root.Main', 'Version');
		$fields->RemoveFieldFromTab('Root.Main', 'ProjectID');
		$fields->RemoveFieldFromTab('Root.Main', 'TeamMemberID');
		
		return $fields;
	}
	
	public function onBeforeWrite() {
		// Sort Order
		
        if(!$this->ID) {
        	$query = DB::query("SELECT MIN(SortOrder) FROM BaseMedia WHERE ClassName = '" . $this->getClassName() . "'");
        	
        	if($query) {
	        	$minVal = (int)($query->value());   	
				$this->SortOrder = $minVal - 1;
        	}
        }
        
        parent::onBeforeWrite();
	}
	
	public function isMobile() {
		$mobi = new Mobile_Detect();
		
		return $mobi->isMobile();
	}
}

class MediaWithFallback extends BaseMedia {
	public static $db = array(
	);
	
	public static $has_one = array(
		'PosterImage' => 'Image'
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	 public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->addFieldToTab('Root.Main', new UploadField('PosterImage', 'Fallback Content'));
		
		return $fields;
	}
	
	public function outputFallback($width = -1) {
		if(!$this->PosterImage()) {
			return false;
		}
		if($this->isMobile()) {
			return $this->PosterImage()->setWidth(480);
		}
		
		return $this->PosterImage()->setWidth($width != -1 ? $width : 928);
	}
}

class ImageMedia extends BaseMedia {
	public static $db = array(
	);
	
	public static $has_one = array(
		'Image' => 'Image',
		'TeamMember' => 'TeamMember'
	);
	
	public static $has_many = array(
	);
	
	public static $summary_fields = array( 
		'getThumbnail' => 'Image',
		'Title' => 'Title'
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	public static $singular_name = 'Image';
	public static $plural_name = 'Images';
	
	public function getThumbnail() {
		if($this->Image()->exists()) {
			return DBField::create_field('HTMLVarchar', '<img src="' . $this->Image()->CroppedImage(40,40)->URL . '"/>');
		}
		return null; 
	}
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->RemoveFieldFromTab('Root.Main', 'TeamMemberID');
		
		return $fields;
	}
	
	public function outputImage($width = -1) {
		if(!$this->Image()) {
			return false;
		}
		if($this->isMobile()) {
			return $this->Image()->setWidth(480);
		}
		
		return $this->Image()->setWidth($width != -1 ? $width : 928);
	}
}

class SliderImage extends ImageMedia {
	public static $has_one = array(
		'Slider' => 'Slider'
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->RemoveFieldFromTab('Root.Main', 'SliderID');
		
		return $fields;
	}
}



class SWFMedia extends MediaWithFallback {
	public static $db = array(
	);
	
	public static $has_one = array(
		'File' => 'File'
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	public static $singular_name = 'SWF';
	public static $plural_name = 'SWFs';
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->AddFieldToTab('Root.Main', new UploadField('File', 'SWF'));
		
		return $fields;
	}
}

class VimeoMedia extends MediaWithFallback {
	public static $db = array(
		'vimeoID' => 'Varchar(20)'
	);
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
	);
	
	static $summary_fields = array(
	);
	
	public static $defaults = array(
	);
	
	static $searchable_fields = array(
	);
	
	public static $singular_name = 'Vimeo';
	public static $plural_name = 'Vimeos';
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->AddFieldToTab('Root.Main', new TextField('vimeoID', 'Vimeo ID'));
		
		return $fields;
	}
}