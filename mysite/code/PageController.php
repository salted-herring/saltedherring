<?php

use SilverStripe\Control\Director;
use SilverStripe\Control\ContentNegotiator;
use SilverStripe\Core\Convert;
use SilverStripe\ORM\DataObject;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Assets\Image;
use SilverStripe\CMS\Controllers\ContentController;

class PageController extends ContentController
{
    private static $allowed_actions = array(
        'rebuild',
        'meta'
    );

    private static $url_handlers = array(
        'meta' => 'meta'
    );

    protected function getSessionID()
    {
        return session_id();
    }

    protected function getHTTPProtocol()
    {
        $protocol = 'http';
        // if (isset($_SERVER['SCRIPT_URI']) && substr($_SERVER['SCRIPT_URI'], 0, 5) == 'https') {
        //     $protocol = 'https';
        // } elseif (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) == 'on') {
        //     $protocol = 'https';
        // }
        return $protocol;
    }

    protected function getCurrentPageURL()
    {
        return $this->getHTTPProtocol().'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
    }

    protected function getBaseTag()
    {
        $protocol = 'http';

        if (Director::isLive()) {
            $protocol = 'https';
        }

        return $protocol .'://' . $_SERVER['HTTP_HOST'];
    }

    public function MetaTags($includeTitle = true)
    {
        $tags = "";
        if ($includeTitle == true || $includeTitle == 'true') {
            $tags .= "<title>" . $this->getTheTitle() . "</title>\n";
        }

        // $charset = ContentNegotiator::get_encoding();
        // $tags .= "<meta http-equiv=\"Content-type\" content=\"text/html; charset=$charset\" />\n";
        if ($this->MetaKeywords) {
            $tags .= "<meta name=\"keywords\" content=\"" . Convert::raw2att($this->MetaKeywords) . "\" />\n";
        }
        if ($this->MetaDescription) {
            $tags .= "<meta name=\"description\" content=\"" . Convert::raw2att($this->MetaDescription) . "\" />\n";
        }
        if ($this->ExtraMeta) {
            $tags .= $this->ExtraMeta . "\n";
        }

        if ($this->URLSegment == 'home' && SiteConfig::current_site_config()->GoogleSiteVerificationCode) {
            $tags .= '<meta name="google-site-verification" content="' . SiteConfig::current_site_config()->GoogleSiteVerificationCode . '" />' . "\n";
        }

        // prevent bots from spidering the site whilest in dev.
        if (Director::isDev()) {
            $tags .= "<meta name=\"robots\" content=\"noindex, nofollow, noarchive\" />\n";
        }

        $this->extend('MetaTags', $tags);

        return $tags;
    }

    public function getTheTitle()
    {
        return Convert::raw2xml(!empty($this->MetaTitle) ? $this->MetaTitle : $this->Title);
    }

    public function getOGTags()
    {
        $data = [];

        if ($this->OGTitle) {
            $data['Title'] = $this->OGTitle;
        } elseif (SiteConfig::current_site_config()->OGTitle) {
            $data['Title'] = SiteConfig::current_site_config()->OGTitle;
        } elseif ($this->getTheTitle()) {
            $data['Title'] = $this->getTheTitle();
        }

        if ($this->OGDescription) {
            $data['Description'] = $this->OGDescription;
        } elseif (SiteConfig::current_site_config()->OGDescription) {
            $data['Description'] = SiteConfig::current_site_config()->OGDescription;
        } elseif ($this->MetaDescription) {
            $data['Description'] = Convert::raw2att($this->MetaDescription);
        }

        $imID = 0;
        if ($this->OGImageID != 0) {
            $imID = $this->OGImageID;
        } elseif (SiteConfig::current_site_config()->OGImage()) {
            $imID = SiteConfig::current_site_config()->OGImage()->ID;
        }

        $im = Image::get()->filter('ID', $imID);

        if ($im->count() > 0) {
            $data['Image'] = $im->first()->ScaleWidth(476)->getAbsoluteURL();
        }
        $data['URL'] = $this->getCurrentPageURL();

        return $this->customise($data)->renderWith(['Includes/OG']);
    }

    public function displayOG($var = 'Title')
    {
        switch ($var) {
            case 'Title':
                if ($this->OGTitle) {
                    return $this->OGTitle;
                }
                if (SiteConfig::current_site_config()->OGTitle) {
                    return SiteConfig::current_site_config()->OGTitle;
                }
                if ($this->getTheTitle()) {
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
                if ($this->MetaDescription) {
                    return Convert::raw2att($this->MetaDescription);
                }
                return false;
            case 'Image':
                $imID = 0;
                if ($this->OGImageID != 0) {
                    $imID = $this->OGImageID;
                } elseif (SiteConfig::current_site_config()->OGImage()) {
                    $imID = SiteConfig::current_site_config()->OGImage()->ID;
                }

                $im = Image::get()->filter('ID', $imID);

                if ($im->count() > 0) {
                    return $im->first()->ScaleWidth(476)->getAbsoluteURL();
                }

                return false;
            default:
                return false;
        }
    }

    public function meta($request)
    {
        if ($request->isAjax()) {
            $tags = $this->MetaTags();

            if ($this->displayOG('Title')) {
                $tags .= '<meta property="og:title" content="' . $this->displayOG('Title') .'" />';
            }
            if ($this->displayOG('Description')) {
                $tags .= '<meta property="og:description" content="' . $this->displayOG('Description') .'" />';
            }

            if ($this->displayOG('Image') && $this->displayOG('Image')->URL != '/assets/') {
                $tags .= '<meta property="og:title" content="' . $this->getHTTPProtocol() . Director::BaseURL() . $this->displaOG('Image')->URL .'" />';
            }

            $tags .= '<meta property="og:url" content="' . str_replace('meta', '', $this->getHTTPProtocol() . Director::BaseURL() . $this->getCurrentPageUrl()) . '" />';

            return $tags;
        }
    }
}
