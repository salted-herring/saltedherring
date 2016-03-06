<?php 

class CategorySlugUpdater extends BuildTask {
	protected $title = 'Category Slug Updater';
	protected $description = 'Update category\'s slug';

	protected $enabled = true;

	public function run($request) {
		$cats = Category::get();
		foreach ($cats as $cat) {
			$cat->write();
		}
		
		print '<h2>All cateories updated</h2>';
		print '<p><a href="/dev/tasks">Back...</a></p>';
	}
	
}