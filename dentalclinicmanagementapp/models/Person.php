<?php

namespace models;

abstract class Person
{
    protected $adharCardNo;
    protected $firstName;
    protected $lastName;
    protected  $middleName;
    protected  $dob;
    protected $address;
    protected $contactNo;

    /**
     * @param $adharCardNo
     * @param $firstName
     * @param $lastName
     * @param $middleName
     * @param $dob
     * @param $address
     * @param $contactNo
     */
    public function __construct($adharCardNo, $firstName, $lastName, $middleName, $dob, $address, $contactNo)
    {
        $this->adharCardNo = $adharCardNo;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->middleName = $middleName;
        $this->dob = $dob;
        $this->address = $address;
        $this->contactNo = $contactNo;
    }




    /*function login($userName,$password,$role){

    }*/


   /* public function __construct($adharCardNo, $firstName)
    {
        $this->adharCardNo = $adharCardNo;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->middleName = $middleName;
        $this->dob = $dob;
        $this->address = $address;
        $this->contactNo = $contactNo;
    }

    */
    /**
     * @return mixed
     */
    public function getAdharCardNo()
    {
        return $this->adharCardNo;
    }

    /**
     * @param mixed $adharCardNo
     */
    public function setAdharCardNo($adharCardNo)
    {
        $this->adharCardNo = $adharCardNo;
    }

    /**
     * @return mixed
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * @param mixed $firstName
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * @return mixed
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * @param mixed $lastName
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * @return mixed
     */
    public function getMiddleName()
    {
        return $this->middleName;
    }

    /**
     * @param mixed $middleName
     */
    public function setMiddleName($middleName)
    {
        $this->middleName = $middleName;
    }

    /**
     * @return mixed
     */
    public function getDob()
    {
        return $this->dob;
    }

    /**
     * @param mixed $dob
     */
    public function setDob($dob)
    {
        $this->dob = $dob;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * @return mixed
     */
    public function getContactNo()
    {
        return $this->contactNo;
    }

    /**
     * @param mixed $contactNo
     */
    public function setContactNo($contactNo)
    {
        $this->contactNo = $contactNo;
    }

   abstract public  function login();


}

