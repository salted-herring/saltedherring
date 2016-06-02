<?php

global $project;
$project = 'mainsite';

global $database;
$database = SS_DATABASE_NAME;
 
// Use _ss_environment.php file for configuration
require_once("conf/ConfigureFromEnv.php");

GD::set_default_quality(100);

/* Image::set_backend("OptimisedGDBackend"); */


MySQLDatabase::set_connection_charset('utf8');

SSViewer::set_theme('default');

i18n::set_locale('en_GB');

// Enable nested URLs for this site (e.g. page/sub-page/)
if (class_exists('SiteTree')) SiteTree::enable_nested_urls();

// Maintenance page
if (defined('SS_ENVIRONMENT_TYPE')) {
	if (SS_ENVIRONMENT_TYPE == 'maint') {
		if (file_exists('../assets/maintenance.html')) {
			echo file_get_contents('../assets/maintenance.html');
		} else {
			echo 'maintenance mode';
		}
		die();
	}
}

require_once(ROOT."mainsite/code/Lib/MobileDetect.php");
$mobi = new Mobile_Detect();
define('MOBILE', $mobi->isMobile());

GoogleSitemap::register_dataobject('Project', 'daily');
GoogleSitemap::register_dataobject('Category', 'daily');
GoogleSitemap::register_dataobject('TeamMember');
GoogleSitemap::register_dataobject('HomePage', 'daily');


if (Director::isDev()) {
	SSViewer::flush_template_cache();
}

if (Director::isLive()) {
	Director::forceSSL();
	SS_Log::add_writer(new SS_LogEmailWriter('administration@saltedherring.com'), SS_Log::ERR);
}
