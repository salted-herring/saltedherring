<?php

namespace SaltedHerring\Config;

use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataExtension;

class CustomSiteConfig extends DataExtension
{
    private static $db = [
        'GoogleSiteVerificationCode' => 'Varchar(128)',
        'GoogleAnalyticsCode'        => 'Varchar(20)',
        'FooterBlurb'                => 'Varchar(256)',

        'EmailURL'                   => 'Varchar(256)',
        'EmailDisplay'               => 'Varchar(256)',

        'PhoneLink'                  => 'Varchar(128)',
        'PhoneDisplay'               => 'Varchar(128)',
        'StreetAddress'              => 'Varchar(256)',
        'FloorLevel'                 => 'Varchar(256)',
        'Locality'                   => 'Varchar(256)',
        'Postcode'                   => 'Varchar(256)',
        'Country'                    => 'Varchar(256)',
        'PObox'                      => 'Varchar(256)',
        'MapLinkURL'                 => 'Varchar(256)',
        'OGTitle'                    => 'Varchar(255)',
        'OGDescription'              => 'Varchar(255)'
    ];

    private static $has_one =  [
        'OGImage'                    => Image::class
    ];

    private static $extensions = [
        'SaltedHerring\Extensions\SocialDecorator'
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldToTab("Root.OpenGraph", new TextField('OGTitle', 'Open Graph Title'));
        $fields->addFieldToTab("Root.OpenGraph", new TextField('OGDescription', 'Open Graph Description'));
        $fields->addFieldToTab("Root.OpenGraph", new UploadField('OGImage', 'Open Graph Image'));

        $fields->addFieldToTab("Root.Google", new TextField('GoogleSiteVerificationCode', 'Google Site Verification Code'));
        $fields->addFieldToTab("Root.Google", new TextField('GoogleAnalyticsCode', 'Google Analytics Code'));

        $fields->addFieldToTab("Root.Footer", new TextareaField('FooterBlurb', 'Footer Blurb'));

        $fields->addFieldToTab("Root.Contact", new TextField('EmailURL', 'Email Address URL - encoded'));
        $fields->addFieldToTab("Root.Contact", new TextField('EmailDisplay', 'Email Address Display - encoded'));

        $fields->addFieldToTab("Root.Contact", new TextField('PhoneLink', 'PhoneLink'));
        $fields->addFieldToTab("Root.Contact", new TextField('PhoneDisplay', 'PhoneDisplay'));

        $fields->addFieldToTab("Root.Contact", new TextField('StreetAddress', 'StreetAddress'));
        $fields->addFieldToTab("Root.Contact", new TextField('FloorLevel', 'Floor Level'));
        $fields->addFieldToTab("Root.Contact", new TextField('Locality', 'Locality-City'));
        $fields->addFieldToTab("Root.Contact", new TextField('Postcode', 'Postcode'));
        $fields->addFieldToTab("Root.Contact", new TextField('Country', 'Country'));

        $fields->addFieldToTab("Root.Contact", new TextField('PObox', 'PO Box'));
        $fields->addFieldToTab("Root.Contact", new TextField('MapLinkURL', 'Google map URL'));
    }
}
