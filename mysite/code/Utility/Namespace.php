<?php

namespace SaltedHerring\Utility;

class Utility
{
    public static function getClassName($class)
    {
        $reflect = new \ReflectionClass($class);
        return $reflect->getShortName();
    }
}
