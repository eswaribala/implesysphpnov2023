<?php


$totalBill=function($dataArray){
    $sum=0;
    foreach ($dataArray as $data){
        $sum+=$data;
    }
};

$bills=array(37848,349659,24568,439958);
