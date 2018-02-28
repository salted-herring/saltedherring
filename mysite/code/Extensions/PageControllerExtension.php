<?php
namespace SaltedHerring\Extensions;

use SilverStripe\Control\Director;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Core\Extension;
use SilverStripe\View\SSViewer;

class PageControllerDecorator extends Extension
{
    public function getCSS()
    {
        $css = $this->getFileName();

        $overrides = [
            'ProjectPage' => 'workpage',
            'AboutSectionPage' => 'aboutpage',
            'TeamMemberPage' => 'teampage'
        ];

        if (in_array($css, array_keys($overrides))) {
            $css = $overrides[$css];
        }

        $css = strtolower($css);

        if (!file_exists(Director::baseFolder() . '/themes/default/css/' . $css . '.css')) {
            $css = 'styles';
        }

        return sprintf("<link rel=\"stylesheet\" href=\"%s\" />", '/themes/default/css/' . $css . '.css');
    }

    public function getRequireJS()
    {
        $js = $this->getFileName();

        $overrides = [
            'ProjectPage' => 'workpage',
            'AboutSectionPage' => 'aboutpage',
            'TeamMemberPage' => 'teampage'
        ];

        if (in_array($js, array_keys($overrides))) {
            $js = $overrides[$js];
        }

        $js = strtolower($js);

        if (Director::isDev()) {
            $script = "<script src=\"" . "/themes/default/js/lib/require.js\"></script>\n";
            $script .= "<script>\n";
            $script .= "require([\"" . "/themes/default/js/dev.config\"], function (common) {";
            $script.= "require([\"pagetypes/" . $js . "\"]);";
            $script.= "});";
            $script .= "</script>";

            return $script;
        } else {
            $script = '<script src="' . '/themes/default/js/lib/require.js" data-main="' . '/themes/default/%s"></script>';
            return sprintf($script, 'build/pagetypes/' . $js);
        }
    }

    private function getFileName()
    {
        $reflect = new \ReflectionClass($this->owner->data());
        return $reflect->getShortName();
    }

    public function getGACode()
    {
        $GA = SiteConfig::current_site_config()->GoogleAnalyticsCode;

        if ($GA) {
            return $GA;
        }
        return false;
    }

    public function getSiteVersion()
    {
        $version = SiteConfig::current_site_config()->SiteVersion;

        if ($version) {
            return $version;
        }
        return false;
    }

    public function getCustomGACode()
    {
        $custom = SiteConfig::current_site_config()->GoogleCustomCode;

        if ($custom) {
            return $custom;
        }
        return false;
    }

    public function getFooterBlurb()
    {
        $FooterBlurb = SiteConfig::current_site_config()->FooterBlurb;

        if ($FooterBlurb) {
            return $FooterBlurb;
        }
        return false;
    }

    public function getEmailURL()
    {
        $EmailURL = SiteConfig::current_site_config()->EmailURL;

        if ($EmailURL) {
            return $EmailURL;
        }
        return false;
    }

    public function getEmailDisplay()
    {
        $EmailDisplay = SiteConfig::current_site_config()->EmailDisplay;

        if ($EmailDisplay) {
            return $EmailDisplay;
        }
        return false;
    }

    public function getPhoneLink()
    {
        $PhoneLink = SiteConfig::current_site_config()->PhoneLink;

        if ($PhoneLink) {
            return $PhoneLink;
        }
        return false;
    }

    public function getPhoneDisplay()
    {
        $PhoneDisplay = SiteConfig::current_site_config()->PhoneDisplay;

        if ($PhoneDisplay) {
            return $PhoneDisplay;
        }
        return false;
    }

    public function getStreetAddress()
    {
        $StreetAddress = SiteConfig::current_site_config()->StreetAddress;

        if ($StreetAddress) {
            return $StreetAddress;
        }
        return false;
    }

    public function getFloorLevel()
    {
        $FloorLevel = SiteConfig::current_site_config()->FloorLevel;

        if ($FloorLevel) {
            return $FloorLevel;
        }
        return false;
    }

    public function getLocality()
    {
        $Locality = SiteConfig::current_site_config()->Locality;

        if ($Locality) {
            return $Locality;
        }
        return false;
    }

    public function getPostcode()
    {
        $Postcode = SiteConfig::current_site_config()->Postcode;

        if ($Postcode) {
            return $Postcode;
        }
        return false;
    }

    public function getCountry()
    {
        $Country = SiteConfig::current_site_config()->Country;

        if ($Country) {
            return $Country;
        }
        return false;
    }

    public function getPObox()
    {
        $PObox = SiteConfig::current_site_config()->PObox;

        if ($PObox) {
            return $PObox;
        }
        return false;
    }

    public function getMapLinkURL()
    {
        $MapLinkURL = SiteConfig::current_site_config()->MapLinkURL;

        if ($MapLinkURL) {
            return $MapLinkURL;
        }
        return false;
    }




    public function isMobile()
    {
        $mobi = new \Mobile_Detect();
        return $mobi->isMobile();
    }
}
