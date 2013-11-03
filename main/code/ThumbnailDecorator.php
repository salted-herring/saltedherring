<?php

class ThumbnailDecorator extends DataExtension {
 
	public function extraStatics($class = NULL, $extension = NULL) {
        return array(
            'has_one' => array(
                'Thumbnail' => 'Image',
            ),
        );
    }
}