<?php

namespace SaltedHerring\Extensions;

use SilverStripe\ORM\DataExtension;

class PublishedDecorator extends DataExtension
{
    private static $db = array(
        'isPublished' => 'Boolean'
    );
}
