<?php
class TeamPage extends Page {
	
	public static $db = array(
	);
	
	public static $has_one = array(
	);
	
	public static $has_many = array(
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		return $fields;
	}
	
}
class TeamPage_Controller extends Page_Controller {
	
	public static $url_handlers = array (
		'meta' => 'meta',
		'$teamMember!/$meta' => 'teamMember'
	);
	
	public function init() {
		parent::init();
	}
	
	public function getTheTitle() {
		$title = parent::getTitle();
		
		if($this->request->param('teamMember')) {
			$title .= ' - ' . DataObject::get_one('TeamMember', "URLSegment='" . $this->request->param('teamMember') . "'")->FirstName;
		}
		
		return $title;
	}
	
	public function teamMember($request) {
		
		if($request->param('meta')) {
			return $this->meta($request);
		}
		
		$teamMember = DataObject::get_one('TeamMember', "URLSegment='" . $request->param('teamMember') . "'");
		
		if(!$teamMember->exists()) {
			$this->httpError(404, 'The requested page could not be found.');
		}
		
		$this->MetaTitle = $teamMember->getUserName();
		
		return $this->renderWith(array('TeamMemberPage', 'Page'), array(
			'Member' => $teamMember,
			'getTeam' => $this->getTeam()
		));
	}
	
	public function getTeam() {
		return TeamMember::get();
	}
}
