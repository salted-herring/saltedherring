<?php

global $project;
$project = 'main';

global $database;
$database = SS_DATABASE_NAME;

define('ROOT', realpath('../') . '/');

// Use _ss_environment.php file for configuration
require_once("conf/ConfigureFromEnv.php");

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

require_once(ROOT."main/code/Lib/MobileDetect.php");
$mobi = new Mobile_Detect();
define('MOBILE', $mobi->isMobile());


Object::add_extension('SiteConfig', 'CustomSiteConfig');
/* Object::add_extension('ProjectImage', 'ProjectMediaDecorator'); */

GD::set_default_quality(100);

if (Director::isDev()) {
	SSViewer::flush_template_cache();
}

if (Director::isLive()) {
	SS_Log::add_writer(new SS_LogEmailWriter('administration@saltedherring.com'), SS_Log::ERR);
}
