<?php
/**
 * @file UpdateCategoryTitles.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 * Update category titles if they are blank
 */
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;

use SaltedHerring\Model\Category;

class UpdateCategoryTitles extends BuildTask
{
    protected $title = 'Update category titles';
    protected $description = 'Update category titles if they are blank - move Name to Title field.';
    protected $enabled = true;
    protected $silent = false;
    protected $error = false;
    protected $shutdown = false;

    /**
     * @param    SS_HTTPRequest $request
     */
    public function run($request)
    {
        foreach (Category::get() as $category) {
            if (empty($category->Title)) {
                $category->Title = $category->Name;
            }

            if (empty($category->MetaTitle)) {
                $category->MetaTitle = $category->Title;
            }

            if (empty($category->MetaDescription)) {
                $category->MetaDescription = 'Salted Herring\'s ' . $category->Title . ' projects.';
            }

            $category->write();

            if ($category->isPublished()) {
                $category->writeToStage('Live');
            }
        }
    }
}
