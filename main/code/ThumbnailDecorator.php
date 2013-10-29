<?php

class ThumbnailDecorator extends DataExtension {
 
    function extraStatics() {
        return array(
            'has_one' => array(
                'Thumbnail' => 'Image',
            ),
        );
    }
}