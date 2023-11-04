<?php

namespace models;

class Registration
{

    private static $registrationNo;
    private $dateOfRegistration;
    private $patient;
    private $registrationFee;

    /**
     * @param $dateOfRegistration
     * @param $patient
     * @param $registrationFee
     */
    public function __construct($dateOfRegistration, $patient, $registrationFee)
    {
        $this->dateOfRegistration = $dateOfRegistration;
        $this->patient = $patient;
        $this->registrationFee = $registrationFee;
    }

    /**
     * @return mixed
     */
    public static function getRegistrationNo()
    {
        return self::$registrationNo;
    }

    /**
     * @param mixed $registrationNo
     */
    public static function setRegistrationNo($registrationNo)
    {
        self::$registrationNo = $registrationNo;
    }

    /**
     * @return mixed
     */
    public function getDateOfRegistration()
    {
        return $this->dateOfRegistration;
    }

    /**
     * @param mixed $dateOfRegistration
     */
    public function setDateOfRegistration($dateOfRegistration)
    {
        $this->dateOfRegistration = $dateOfRegistration;
    }

    /**
     * @return mixed
     */
    public function getPatient()
    {
        return $this->patient;
    }

    /**
     * @param mixed $patient
     */
    public function setPatient($patient)
    {
        $this->patient = $patient;
    }

    /**
     * @return mixed
     */
    public function getRegistrationFee()
    {
        return $this->registrationFee;
    }

    /**
     * @param mixed $registrationFee
     */
    public function setRegistrationFee($registrationFee)
    {
        $this->registrationFee = $registrationFee;
    }


}