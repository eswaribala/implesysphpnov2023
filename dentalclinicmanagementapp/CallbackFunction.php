<?php
$bills=[35,2,6,12];

$callback=fn($data)=>$data*$data;

$totalBill=array_map($callback,$bills);
print_r($totalBill);
