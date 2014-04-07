<?php
class TeamPage extends Page {
	
	private static $db = array(
	);
	
	private static $has_one = array(
	);
	
	private static $has_many = array(
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		return $fields;
	}
	
}
class TeamPage_Controller extends Page_Controller {
	
	private static $allowed_actions = array (
		'meta',
		'teamMember'
	);
	
	private static $url_handlers = array (
		'meta' => 'meta',
		'$teamMember!/$arg' => 'teamMember'
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
		
		if($request->param('arg')) {
			if($request->param('arg') == 'meta') {
				return $this->meta($request);
			} else if($request->param('arg') == 'portraits') {
				return $this->getPortraits();
			} else {
				return false;
			}			
		}
		
		$teamMember = DataObject::get_one('TeamMember', "URLSegment='" . $request->param('teamMember') . "'");
		
		if(!$teamMember->exists() || !$teamMember->isPublished) {
			$this->httpError(404, 'The requested page could not be found.');
		}
		
		$this->MetaTitle = $teamMember->getUserName();
		
		return $this->renderWith(array('TeamMemberPage', 'Page'), array(
			'Member' => $teamMember,
			'getTeam' => $this->getTeam()
		));
	}
	
	public function getTeam() {
		return TeamMember::get()->filter(array('isPublished' => true));
	}
	
	public function getPortraits() {
		if($this->request->param('teamMember')) {
			$member = TeamMember::get()->filter('URLSegment', $this->request->param('teamMember'));
			if($member) {
				return $member->first()->getOtherPortraits();
			}
		}
		
		return false;
	}
}
