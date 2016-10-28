<div style="position: fixed; bottom:5px; right:5px; border: solid 2px white; border-radius: 25px;"id="updates_sign_up" class="updates_sign_up ">
	<img style="display: inline-block;  padding: 12px 0px 0px 8px;" src="../img/speech_bubble.png"/>	
	<div id="sign_up" style="display: inline-block; vertical-align: top; padding: 12px 9px; color: white;"><a style="text-decoration: none;">Sign up for Updates HERE!</a></div>	
	<img id="close_button" style="padding: 0;" src="../img/close-button.png"/>		
	
	<div id="form_wrapper" style="padding: 8px; color: white;">
		<div id="sign_up_message">If you would like to hear from us about any future updates feel free to provide your email to be added to the mailing list. Thanks!</div>
		<form class ="ajax" id="sign_up_form" action="saveEmailToMailingList.php" method="post">
			<div>&nbsp</div>
			E-mail:
			<input id="email" type="text" name="email" placeholder="Enter email address here!">
			<br><br>																							
			<input type="submit" value="Submit">
		</form> 
		<div id="userAlert" style="color: red;"></div>
	</div>
</div>

<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<script src="..\js\formHandler.js"></script>
