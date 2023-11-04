<?php

namespace models;

class Address
{
    private $doorNo;
    private $streetName;
    private $city;
    private $pinCode;
    private $state;

    /**
     * @param $doorNo
     * @param $streetName
     * @param $city
     * @param $pinCode
     * @param $state
     */
    public function __construct($doorNo, $streetName, $city, $pinCode, $state)
    {
        $this->doorNo = $doorNo;
        $this->streetName = $streetName;
        $this->city = $city;
        $this->pinCode = $pinCode;
        $this->state = $state;
    }

    /**
     * @return mixed
     */
    public function getDoorNo()
    {
        return $this->doorNo;
    }

    /**
     * @param mixed $doorNo
     */
    public function setDoorNo($doorNo)
    {
        $this->doorNo = $doorNo;
    }

    /**
     * @return mixed
     */
    public function getStreetName()
    {
        return $this->streetName;
    }

    /**
     * @param mixed $streetName
     */
    public function setStreetName($streetName)
    {
        $this->streetName = $streetName;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @return mixed
     */
    public function getPinCode()
    {
        return $this->pinCode;
    }

    /**
     * @param mixed $pinCode
     */
    public function setPinCode($pinCode)
    {
        $this->pinCode = $pinCode;
    }

    /**
     * @return mixed
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * @param mixed $state
     */
    public function setState($state)
    {
        $this->state = $state;
    }


}