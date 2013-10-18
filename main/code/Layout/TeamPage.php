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
		'team/$teamMember!' => 'teamMember'
	);
	
	public function init() {
		parent::init();
	}
	
	public function teamMember() {
		//$teamMember = Project::get_one('URLSegment = `' . $this->request->param('teamMember') . '`');
		
		/*
echo '<pre>';
		print_r($teamMember);
		echo '</pre>';
*/
		
		die;
		
		/*
if(!$teamMember->exists()) {
			$this->httpError(404, 'The requested page could not be found.');
		}
		
		return $this->renderWith(array('TeamMemberPage', 'Page'), array(
			'Member' => $teamMember
		));
*/
	}
	
	public function getTeam() {
		return TeamMember::get();
	}
}
