<?php

class PageDecorator extends DataExtension {
	public function createCSS() {
		$dir = 'themes/' . SiteConfig::current_site_config()->Theme . '/scss/';
		$scss = strtolower(get_class($this->owner)) . '.scss';
		$file = ROOT . $dir . $scss;
		
		// generate scss file.
		if(!file_exists($file)) {
			try {
				$contents = $this->__readFILE(ROOT . $dir . '.bootstrap.scss');
				$this->__writeFILE($file, $contents);
			} catch(Exception $e) {
				user_error($e, E_USER_WARNING);
			}
		}
	}
	
	private function __readFILE($file) {
		$handle = fopen($file, 'r');
		$contents = fread($handle, filesize($file));
		fclose($handle);
		
		return $contents;
	}
	
	private function __writeFILE($file, $contents) {
		$handle = fopen($file, 'w');
		fwrite($handle, $contents);
		fclose($handle);
	}
	
	
	
	public function createJS() {
		$dir = 'themes/' . SiteConfig::current_site_config()->Theme . '/js/';
		$js = strtolower(get_class($this->owner)) . '.js';
		$file = ROOT . $dir . 'pagetypes/' . $js;
		
		// generate js file.
		try {
			if(!file_exists($file)) {
				$contents = $this->__readFILE(ROOT . $dir . 'pagetypes/.bootstrap.js');
				
			} else {
				$contents = $this->__readFILE($file);
			}
		
			$this->__writeFILE($file, str_replace('pagename', strtolower(get_class($this->owner)) . ' page', $contents));
		
		} catch(Exception $e) {
			user_error($e, E_USER_WARNING);
		}
		
		// update Gruntfile.
		$this->updateGruntFile(ROOT . $dir . 'pagetypes/');	
	}
	
	private function updateGruntfile($directory) {
		$files = array();
		
		foreach (new DirectoryIterator($directory) as $fileInfo) {
		    if($fileInfo->isDot() || substr($fileInfo->getFilename(), 0, 1) === '.') continue;
		    array_push($files, array('name' => 'pagetypes/' . $fileInfo->getBasename('.js')));
		}
		
		$files = json_encode($files);
		
		try {			
			$contents = $this->__readFILE(ROOT . 'themes/' . SiteConfig::current_site_config()->Theme . '/.Gruntfile-bolierplate.js');
			
			$this->__writeFILE(ROOT . 'themes/' . SiteConfig::current_site_config()->Theme . '/Gruntfile.js', str_replace('modules: []', 'modules: ' . $files, $contents));
		} catch(Exception $e) {
			user_error($e, E_USER_WARNING);
		}
	}
	
	
	public function onAfterWrite() {
		parent::onAfterWrite();
		
		$this->createCSS();
		$this->createJS();
	}
}

class PageControllerDecorator extends Extension {
	public function getCSS() {
		$css = strtolower($this->owner->data()->class);
		
		if(!file_exists(ROOT . $this->owner->ThemeDir() . '/css/' . $css . '.css')) {
			$css = 'styles';
		}
		
		return sprintf('<link rel="stylesheet" href="%s" />', $this->owner->ThemeDir() . '/css/' . $css . '.css');
	}
	
	public function getRequireJS() {
		
		if(Director::isDev()) {
			//return sprintf($script, 'js/pagetypes/' . strtolower($this->ClassName));
			$script = "<script src=\"" . $this->owner->ThemeDir() . "/js/lib/require.js\"></script>\n";
			$script .= "<script>\n";
            $script .= "require([\"" . $this->owner->ThemeDir() . "/js/dev.config\"], function (common) {";
            $script.= "require([\"pagetypes/" . strtolower($this->owner->ClassName) . "\"]);";
            $script.= "});";
			$script .= "</script>";

			return $script;
			
		} else {
			$script = '<script src="' . $this->owner->ThemeDir() . '/js/lib/require.js" data-main="' . $this->owner->ThemeDir() . '/%s"></script>';
			return sprintf($script, 'build/pagetypes/' . strtolower($this->owner->ClassName));
		}
	}
	
	public function getGACode() {
		$GA = SiteConfig::current_site_config()->GoogleAnalyticsCode;
		
		if($GA) {
			return $GA;
		}
		return false;
	}
	
	public function getSiteVersion() {
		$version = SiteConfig::current_site_config()->SiteVersion;
		
		if($version) {
			return $version;
		}
		return false;
	}
	
	public function getCustomGACode() {
		$custom = SiteConfig::current_site_config()->GoogleCustomCode;
		
		if($custom) {
			return $custom;
		}
		return false;
	}
	
	public function isMobile() {
		$mobi = new Mobile_Detect();
		return $mobi->isMobile();
	}
}