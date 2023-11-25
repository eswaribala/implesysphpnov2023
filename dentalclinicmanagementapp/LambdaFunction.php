<?php
//lambda method
//version 7.4 onwards
$totalBill=fn($bill1,$bill2)=> $bill1+$bill2;

echo $totalBill(438658,3956936);


$bills=[35,2,6,12];

$totalBill=array_map(fn($data)=>$data*$data,$bills);
print_r($totalBill);





