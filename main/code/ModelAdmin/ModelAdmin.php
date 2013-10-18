<?php
	
	class ProjectAdmin extends ModelAdmin {
	   public static $managed_models = array('Project', 'Award', 'Client', 'Category', 'Service');
	   static $url_segment = 'project';
	   static $menu_title = 'Projects';
	   
	   public function getEditForm($id = null, $fields = null) {
	        $form = parent::getEditForm($id, $fields);
	        $gridField = $form->Fields()->fieldByName($this->sanitiseClassName($this->modelClass));
	        $gridField->getConfig()->addComponents(	
				new GridFieldOrderableRows('SortOrder')
			);
	        return $form;
	    }
	}
	
	class ColourAdmin extends ModelAdmin {
		public static $managed_models = array('Colour');
		static $url_segment = 'colour';
		static $menu_title = 'Colours';
	}
	
	class TeamAdmin extends ModelAdmin {
		public static $managed_models = array('TeamMember');
		static $url_segment = 'team';
		static $menu_title = 'Team';
		
		public function getEditForm($id = null, $fields = null) {
	        $form = parent::getEditForm($id, $fields);
	        $gridField = $form->Fields()->fieldByName($this->sanitiseClassName($this->modelClass));
	        $gridField->getConfig()->addComponents(	
				new GridFieldOrderableRows('SortOrder')
			);
	        return $form;
	    }
	}
	
	
	