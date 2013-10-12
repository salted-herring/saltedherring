<?php

class ProjectMediaDecorator extends DataExtension {
 
    function extraStatics() {
        return array(
            'has_one' => array(
                'Project' => 'Project',
            ),
        );
    }
}