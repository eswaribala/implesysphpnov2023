<?php

namespace models;
class Patient extends Person
{
    private $patientHistory;

    /**
     * @param $patientHistory
     */
    public function __construct($adharCardNo, $firstName, $lastName, $middleName, $dob, $address, $contactNo,$patientHistory)
    {
        //super
        parent::__construct($adharCardNo, $firstName, $lastName, $middleName, $dob, $address, $contactNo);
        $this->patientHistory = $patientHistory;
    }

    /**
     * @param $patientHistory
     */


    /**
     * @return mixed
     */
    public function getPatientHistory()
    {
        return $this->patientHistory;
    }

    /**
     * @param mixed $patientHistory
     */
    public function setPatientHistory($patientHistory)
    {
        $this->patientHistory = $patientHistory;
    }


    public function login()
    {
        echo "Patient logged in\n";
    }
}