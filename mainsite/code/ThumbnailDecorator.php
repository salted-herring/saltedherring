<?php

class ThumbnailDecorator extends DataExtension {

	private static $has_one = array(
		'Thumbnail' => 'Image'
	);
}