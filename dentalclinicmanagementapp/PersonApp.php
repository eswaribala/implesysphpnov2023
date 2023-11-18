<?php
include_once ("models/Person.php");
include_once ("models/Patient.php");
include_once ("models/Doctor.php");
include_once ("models/Address.php");
include_once ("exceptions/DOBException.php");

use exceptions\DOBException;
use models\Address;
use models\Doctor;
use models\Patient;

$person1= new Patient("A347847","23432Parameswari23445","Bala","","2024-12-02"
    ,new Address("","","",0,""),9952032862,'');

$date=$person1->getDob();

$today=date("Y-m-d");

try {

    if ($date < $today)
        echo "DOB Correct\n";
    else
        throw new DOBException($date);

}
catch (DOBException $exception){
 echo "$exception\n";
}
/*

 $firstName=$person1->getFirstName();
echo $firstName;
$pattern="/[A-Za-z]/";
if(preg_match($pattern,$firstName))
    echo "Match Found";
else
    echo "Match Not Found";
    */


$person2=new Doctor("A347847","Parameswari","Bala","","1970-12-02"
    ,new Address("","","",0,""),9952032862,'349434','');

$person1->login();
$person2->login();