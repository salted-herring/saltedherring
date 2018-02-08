<?php

use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;

class BaseDBOTask extends BuildTask
{
    protected $title        = 'Base DBO Conversion';
    protected $description  = 'Convert BaseDBO extended objects into their own classes.';
    protected $enabled      = true;
    private static $segment = 'base-dbo';

    public function run($request)
    {
    }
}
