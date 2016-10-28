<?php
	$myfile = fopen("mailingList.txt", "a");
	fwrite($myfile, $_POST["email"].',');
	fclose($myfile);	
	echo 'Thank you for subscribing to the mailing list!'
?>