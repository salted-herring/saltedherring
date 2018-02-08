<?php

namespace SaltedHerring\Extensions;

use Exception;
use DirectoryIterator;
use SilverStripe\Core\Config\Config;
use SilverStripe\View\SSViewer;
use SilverStripe\ORM\DataExtension;
use SilverStripe\Control\Director;

class PageDecorator extends DataExtension
{
    public function createCSS()
    {
        // $dir = '/themes/' . Config::inst()->get(SSViewer::class, "theme") . '/scss/';
        // $scss = strtolower(get_class($this->owner)) . '.scss';
        // $file = Director::baseFolder() . $dir . $scss;
        //
        // // generate scss file.
        // if (!file_exists($file)) {
        //     try {
        //         $contents = $this->__readFILE(Director::baseFolder() . $dir . '.bootstrap.scss');
        //         $this->__writeFILE($file, $contents);
        //     } catch (Exception $e) {
        //         user_error($e, E_USER_WARNING);
        //     }
        // }
    }

    private function __readFILE($file)
    {
        // $handle = fopen($file, 'r');
        // $contents = fread($handle, filesize($file));
        // fclose($handle);
        //
        // return $contents;
    }

    private function __writeFILE($file, $contents)
    {
        // if (!is_writable($file)) {
        //     return false;
        // }
        //
        // $handle = fopen($file, 'w');
        // fwrite($handle, $contents);
        // fclose($handle);
    }



    public function createJS()
    {
        // $dir = '/themes/' . Config::inst()->get(SSViewer::class, "theme") . '/js/';
        // $js = strtolower(get_class($this->owner)) . '.js';
        // $file = Director::baseFolder() . $dir . 'pagetypes/' . $js;
        //
        // // generate js file.
        // try {
        //     if (!file_exists($file)) {
        //         $contents = $this->__readFILE(Director::baseFolder() . $dir . 'pagetypes/.bootstrap.js');
        //     } else {
        //         $contents = $this->__readFILE($file);
        //     }
        //
        //     $this->__writeFILE($file, str_replace('pagename', strtolower(get_class($this->owner)) . ' page', $contents));
        // } catch (Exception $e) {
        //     user_error($e, E_USER_WARNING);
        // }
        //
        // // update Gruntfile.
        // $this->updateGruntFile(Director::baseFolder() . $dir . 'pagetypes/');
    }

    private function updateGruntfile($directory)
    {
        // $files = array();
        //
        // foreach (new DirectoryIterator($directory) as $fileInfo) {
        //     if ($fileInfo->isDot() || substr($fileInfo->getFilename(), 0, 1) === '.') {
        //         continue;
        //     }
        //     array_push($files, array('name' => 'pagetypes/' . $fileInfo->getBasename('.js')));
        // }
        //
        // $files = json_encode($files);
        //
        // try {
        //     $contents = $this->__readFILE(Director::baseFolder() . 'themes/' . Config::inst()->get(SSViewer::class, "theme") . '/.Gruntfile-bolierplate.js');
        //
        //     $this->__writeFILE(Director::baseFolder() . 'themes/' . Config::inst()->get(SSViewer::class, "theme") . '/Gruntfile.js', str_replace('modules: []', 'modules: ' . $files, $contents));
        // } catch (Exception $e) {
        //     user_error($e, E_USER_WARNING);
        // }
    }


    public function onAfterWrite()
    {
        parent::onAfterWrite();

        $this->createCSS();
        $this->createJS();
    }
}
