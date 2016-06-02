<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);
}
class Page_Controller extends ContentController {

	private static $allowed_actions = array (
		'rebuild',
		'meta'
	);

	private static $url_handlers = array(
		'meta' => 'meta'
	);

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates
		// instead of putting Requirements calls here.  However these are
		// included so that our older themes still work
		/*
Requirements::themedCSS('reset');
		Requirements::themedCSS('layout');
		Requirements::themedCSS('typography');
		Requirements::themedCSS('form');
*/
	}

	protected function getSessionID() {
		return session_id();
	}

	protected function getHTTPProtocol() {
		$protocol = 'http';
		if (isset($_SERVER['SCRIPT_URI']) && substr($_SERVER['SCRIPT_URI'], 0, 5) == 'https') {
			$protocol = 'https';
		} else if (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) == 'on') {
			$protocol = 'https';
		}
		return $protocol;
	}

	protected function getCurrentPageURL() {
		return $this->getHTTPProtocol().'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	}

	protected function getBaseTag() {
		return $this->getHTTPProtocol().'://'.$_SERVER['HTTP_HOST'];
	}

	public function MetaTags($includeTitle = true) {
		$tags = "";
		if($includeTitle === true || $includeTitle == 'true') {
			$tags .= "<title>" . $this->getTheTitle() . "</title>\n";
		}

		$charset = ContentNegotiator::get_encoding();
		$tags .= "<meta http-equiv=\"Content-type\" content=\"text/html; charset=$charset\" />\n";
		if($this->MetaKeywords) {
			$tags .= "<meta name=\"keywords\" content=\"" . Convert::raw2att($this->MetaKeywords) . "\" />\n";
		}
		if($this->MetaDescription) {
			$tags .= "<meta name=\"description\" content=\"" . Convert::raw2att($this->MetaDescription) . "\" />\n";
		}
		if($this->ExtraMeta) {
			$tags .= $this->ExtraMeta . "\n";
		}

		if($this->URLSegment == 'home' && SiteConfig::current_site_config()->GoogleSiteVerificationCode) {
			$tags .= '<meta name="google-site-verification" content="' . SiteConfig::current_site_config()->GoogleSiteVerificationCode . '" />' . "\n";
		}

		// prevent bots from spidering the site whilest in dev.
		if(Director::isDev()) {
			$tags .= "<meta name=\"robots\" content=\"noindex, nofollow, noarchive\" />\n";
		}

		$this->extend('MetaTags', $tags);

		return $tags;
	}

	public function getTheTitle() {
		return Convert::raw2xml(($this->MetaTitle) ? $this->MetaTitle : $this->Title);
	}

	public function getOG($var = 'Title') {
		switch($var) {
			case 'Title':
				if ($this->OGTitle) {
					return $this->OGTitle;
				}
				if (SiteConfig::current_site_config()->OGTitle) {
					return SiteConfig::current_site_config()->OGTitle;
				}
				if($this->getTheTitle()) {
					return $this->getTheTitle();
				}
				return false;
			case 'Description':
				if ($this->OGDescription) {
					return $this->OGDescription;
				}
				if (SiteConfig::current_site_config()->OGDescription) {
					return SiteConfig::current_site_config()->OGDescription;
				}
				if($this->MetaDescription) {
					return Convert::raw2att($this->MetaDescription);
				}
				return false;
			case 'Image':
				if ($this->OGImage()) {
					return $this->OGImage();
				}
				if (SiteConfig::current_site_config()->OGImage()) {
					return SiteConfig::current_site_config()->OGImage();
				}
				return false;
			default:
				return false;
		}
	}

	public function meta($request) {
		if($request->isAjax()) {
		  $tags = $this->MetaTags();

		  if($this->getOG('Title')) {
		    $tags .= '<meta property="og:title" content="' . $this->getOG('Title') .'" />';
		  }
		  if($this->getOG('Description')) {
		    $tags .= '<meta property="og:description" content="' . $this->getOG('Description') .'" />';
		  }

		  if($this->getOG('Image') && $this->getOG('Image')->URL != '/assets/') {
		    $tags .= '<meta property="og:title" content="' . $this->getHTTPProtocol() . Director::BaseURL() . $this->getOG('Image')->URL .'" />';
		  }

		  $tags .= '<meta property="og:url" content="' . str_replace('meta', '', $this->getHTTPProtocol() . Director::BaseURL() . $this->getCurrentPageUrl()) . '" />';

		  return $tags;
		}
	}
}
