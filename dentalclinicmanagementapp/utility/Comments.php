<?php
//The training focuses on HC application development
# The Training uses OOPS concepts
/*
 * Author Parameswari Balasubramaniam
 * Data 04/11/2023
 * Version 1.0
 */

//Statements
$clinicName="Smile Dental Care";
$location="Chennai";
echo $clinicName,$location;
//print $clinicName,$location;

echo "Clinic Name=$clinicName in Location=$location\n";
print "Clinic Name=$clinicName in Location=$location\n";

//understanding the difference between $ and $$
$address="30, Gandhi Road";
$$address=600049;

echo "$address\n";
echo "$$address\n";

//constants

define("BLOODGROUP","O+");
const ORGANNAME="Kidney";
echo BLOODGROUP,"\n";
echo ORGANNAME,"\n";

//Log Analysis

//Magic constants
echo __DIR__,"\n";
echo __FILE__,"\n";
echo __LINE__,"\n";

//associative array
$patient=array("name"=>"Parameswari","dob"=>"02/12/2023","gender"=>"Female");
foreach ($patient as $data){
    echo $data,"\n";
}

function getDoctorInfo(&$name,$country="India", ...$skills){
  return array("name"=>$name,"country"=>$country,"sills"=>$skills);

}

$name="Dr.Vignesh";
foreach (getDoctorInfo($name,"UK","BDS","MDS","DDS") as $data){
    if (gettype($data)=="array"){
        foreach ($data as $skill){
            echo $skill,"\t";
        }
    }
    else {
        echo $data, "\n";
    }
}
