<?php

require 'vendor/autoload.php';
include_once ("models/Person.php");
include_once ("models/Patient.php");
include_once ("models/Doctor.php");
include_once ("models/Address.php");
use models\Address;
use models\Patient;
use PhpCollection\Map;

$patientMap=new Map();
for($i=0;$i<100;$i++){
    $patientMap->set('995203286'.$i, new Patient("A".$i,"F".$i,"L".$i,"","2024-12-02"
        ,new Address("","","",0,""),9952032862,''));
}

//retrieve only keys

foreach ($patientMap->keys() as $key){
    echo "$key\n";
}

// retrieve only values
foreach ($patientMap->values() as $value){
    $obj_str = print_r($value, true);
    echo "$obj_str\n";
}