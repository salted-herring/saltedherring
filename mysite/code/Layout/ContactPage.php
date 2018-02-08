<?php

namespace SaltedHerring\Layout;

use Page;


use HtmlEditorField;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\TextField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Control\Email\Email;

class ContactPage extends Page
{
    private static $db = array(
        'IntroText'       => 'Varchar(256)',
        'PhoneNumber'     => 'Varchar(256)',
        'ContentTitle'    => 'Varchar(128)',
        'ContentSubTitle' => 'Varchar(128)',
        'BodyCopy'        => 'HTMLText',
        'Email'           => 'Varchar(256)',
        'MapLink'         => 'Varchar(256)'
    );

    private static $has_one = array(
        'ContentImage' => Image::class
    );

    private static $has_many = array(
    );

    private static $table_name = 'ContactPage';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->RemoveByName('Content');
        $fields->AddFieldToTab('Root.Main', new TextField('IntroText'));
        $fields->AddFieldToTab('Root.Main', new UploadField('ContentImage'));
        $fields->AddFieldToTab('Root.Main', new TextField('ContentTitle'));
        $fields->AddFieldToTab('Root.Main', new TextField('ContentSubTitle'));
        $fields->AddFieldToTab('Root.Main', new HtmlEditorField('BodyCopy'));
        $fields->AddFieldToTab('Root.Main', new TextField(Email::class, 'Email Button Text'));
        $fields->AddFieldToTab('Root.Main', new TextField('MapLink', 'Map Button Text'));

        return $fields;
    }
}
