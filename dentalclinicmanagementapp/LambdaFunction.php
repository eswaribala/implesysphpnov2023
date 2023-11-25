<?php
//lambda method
//version 7.4 onwards
//method1
$totalBill=fn($bill1,$bill2)=> $bill1+$bill2;

echo $totalBill(438658,3956936);

//method 2
$bills=[35,2,6,12];

$totalBill=array_map(fn($data)=>$data*$data,$bills);
print_r($totalBill);


//method3

$totalBill=function ($data){
    $sum=0;
    foreach($data as $d){
        $sum+=$d;
    }
    return $sum;
};

echo $totalBill($bills);





