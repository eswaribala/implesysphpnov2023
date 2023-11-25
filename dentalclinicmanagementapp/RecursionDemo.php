<?php
function getDirectories($dir, &$results=array()){
    $files=scandir($dir);
    foreach ($files as $key=>$value){
        $path=realpath($dir.DIRECTORY_SEPARATOR.$value);
        if(!is_dir($path)){
            $results[]=$path;
        }else if($value !="." && $value!=".."){
            getDirectories($path,$results);
            $results[]=$path;
        }

    }
  return $results;
}

var_dump(getDirectories("G:\Local disk\backup\acer\backup\py"));