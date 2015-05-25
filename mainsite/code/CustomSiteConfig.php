<?php
class CustomSiteConfig extends DataExtension {

	private static $db = array(

		'GoogleSiteVerificationCode' => 'Varchar(128)',
		'GoogleAnalyticsCode' => 'Varchar(20)',
		'FooterBlurb' => 'Varchar(256)'

	);

	private static $has_one = array(
		'OG' => 'OG'
	);

	public function updateCMSFields(FieldList $fields) {
		$fields->addFieldToTab("Root.OpenGraph", new TextField('OGTitle', 'Open Graph Title'));
		$fields->addFieldToTab("Root.OpenGraph", new TextField('OGDescription', 'Open Graph Description'));
		$fields->addFieldToTab("Root.OpenGraph", new UploadField('OGImage', 'Open Graph Image (min 200px X 200px)'));

		$fields->addFieldToTab("Root.Google", new TextField('GoogleSiteVerificationCode', 'Google Site Verification Code'));
		$fields->addFieldToTab("Root.Google", new TextField('GoogleAnalyticsCode', 'Google Analytics Code'));

		$fields->addFieldToTab("Root.Footer", new TextareaField('FooterBlurb', 'Footer Blurb'));
	}
}
