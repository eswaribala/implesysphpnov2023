<?php
$fileName="C:\Users\Balasubramaniam\Desktop\break timings.txt";
$file=fopen($fileName,"r");
$content=fread($file, filesize($fileName));
echo "$content";
fclose($file);