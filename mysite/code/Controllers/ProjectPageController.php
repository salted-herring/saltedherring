<?php

namespace SaltedHerring\Layout;

use PageController;

use SaltedHerring\Model\Category;

class ProjectPageController extends PageController
{
    public function getCategories()
    {
        return Category::get();
    }
}
