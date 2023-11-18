<?php
require 'vendor/autoload.php';
include_once ("models/Person.php");
include_once ("models/Patient.php");
include_once ("models/Doctor.php");
include_once ("models/Address.php");
use models\Address;
use models\Patient;
use PhpCollection\Sequence;
$patientSequence = new Sequence([new Patient("A0","F0","L0","","2024-12-02",new Address("","","",0,""),9952032862,'')]);

for($i=0;$i<100;$i++){
    $patientSequence->add(
        new Sequence([new Patient("A".$i,"F".$i,"L".$i,"","2024-12-02"
            ,new Address("","","",0,""),9952032862,'')])
    );
}

echo $patientSequence->get(2);
