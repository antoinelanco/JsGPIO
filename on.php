<?php

$a = $_GET['button'];

exec( "gpio -g mode ".$a." out");
exec("gpio -g write ".$a." 1");
echo "ON";

?>
