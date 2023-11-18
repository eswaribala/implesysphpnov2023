<?php


use models\Address;
use models\Doctor;
use models\Patient;

$person1=new Patient("A347847","Parameswari","Bala","","1970-12-02"
    ,new Address("","","",0,""),9952032862,'');

$person2=new Doctor("A347847","Parameswari","Bala","","1970-12-02"
    ,new Address("","","",0,""),9952032862,'349434','');

$person1->login();
$person2->login();