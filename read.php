<?php
$array = array(2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27);
foreach ($array as $value) {
  exec( "gpio -g mode ".$value." in");
  echo exec("gpio -g read ".$value);
}
?>
