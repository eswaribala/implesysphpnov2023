<?php

namespace models;

class Doctor extends Person
{
    private $licenseNo;
    private $digitalSignature;

    /**
     * @param $licenseNo
     * @param $digitalSignature
     */
    public function __construct($adharCardNo, $firstName, $lastName, $middleName, $dob, $address, $contactNo,$licenseNo, $digitalSignature)
    {
        parent::__construct($adharCardNo, $firstName, $lastName, $middleName, $dob, $address, $contactNo);
        $this->licenseNo = $licenseNo;
        $this->digitalSignature = $digitalSignature;
    }

    /**
     * @return mixed
     */
    public function getLicenseNo()
    {
        return $this->licenseNo;
    }

    /**
     * @param mixed $licenseNo
     */
    public function setLicenseNo($licenseNo)
    {
        $this->licenseNo = $licenseNo;
    }

    /**
     * @return mixed
     */
    public function getDigitalSignature()
    {
        return $this->digitalSignature;
    }

    /**
     * @param mixed $digitalSignature
     */
    public function setDigitalSignature($digitalSignature)
    {
        $this->digitalSignature = $digitalSignature;
    }


    public function login()
    {
        // TODO: Implement login() method.
    }
}