<?php
$fileName="C:\Users\Balasubramaniam\Desktop\break timings.txt";
$file=fopen($fileName,"r");
$content=fread($file, filesize($fileName));
echo "$content";
fclose($file);

//write content into file
$file=fopen($fileName,"a");
fwrite($file,"PHP,PERL,Python");
fclose($file);
