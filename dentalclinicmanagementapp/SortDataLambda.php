<?php
$customer=[['name'=>'Parameswari','age'=>53],
    ['name'=>'Anand','age'=>23],
    ['name'=>'Jaya','age'=>35],
    ['name'=>'Sumith','age'=>12]
    ];

//sort the customer by age
//with lambda
usort($customer,fn($obj1,$obj2)=>$obj1['age']<=>$obj2['age']);
print_r($customer);

//sort using anonymous function
usort($customer,function ($obj1,$obj2){
    return $obj1['age']<=>$obj2['age'];
});