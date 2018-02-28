<?php
/**
 * @file DataObjectURLSegmentField.php
 * @author Simon Winter <simon@saltedherring.com>
 *
 * Override the URLSegmentField to ensure the field uses the
 * DataObject rather than SiteTree.
 */
namespace SaltedHerring\Form;

use SilverStripe\CMS\Forms\SiteTreeURLSegmentField;
use SilverStripe\ORM\DataObject;

class DataObjectURLSegmentField extends SiteTreeURLSegmentField
{
    /**
     * @return Event
     */
    public function getPage()
    {
        $idField = $this->getForm()->Fields()->dataFieldByName('ID');
        return ($idField && $idField->Value()) ? DataObject::get_by_id($this->getClassName(), $idField->Value()) : singleton($this->getClassName());
    }

    private function getClassName()
    {
        $reflect = new \ReflectionClass($this->owner);
        return $reflect->getShortName();
    }
}
