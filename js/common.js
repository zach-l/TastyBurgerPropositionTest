window.onload = function() {
	fixedAtTheTop();
	animateSignUpBox();
	function fixedAtTheTop(){
		//Grabs the current pageYOffset value 
		function getScrollValue() {
			if (typeof window.pageYOffset !== 'undefined' ) {
			  return window.pageYOffset;
			}
		}	
		/*Adds and removes the "FixedAtTheTop" class to all of the elements of the navigation bar making allowing it to be 
		animated and fixed at the top of the page*/
		window.onscroll = function() {
			var navBar = document.getElementById('nav_bar'),
				scroll = getScrollValue(),
				logo = document.getElementById('logo'),
				windowWidth= window.innerWidth;
				smallLogo = document.getElementById('small_logo');
			if(windowWidth > 770){
				if (scroll <= 90) {
				navBar.style.position = "FixedAtTheTop";
				navBar.classList.remove('FixedAtTheTop');
				logo.classList.remove('FixedAtTheTop');	
				small_logo.classList.remove('FixedAtTheTop');
				}
				else {
					navBar.style.position = "fixed";
					navBar.classList.add('FixedAtTheTop');
					logo.classList.add('FixedAtTheTop');
					small_logo.classList.add('FixedAtTheTop');
				}
			}			
		}
	}
	
	//Adds and removes the "ExpandBox" class to the sign up box allowing it to be animated when clicked on.
	function animateSignUpBox(){		
		var signUpBox = document.getElementById('updates_sign_up');
		var signUp = document.getElementById('sign_up');
		var closeButton = document.getElementById('close_button');
		
		closeButton.onclick=function(){signUpBox.classList.remove('ExpandBox');}; 
		signUp.onclick=function(){signUpBox.classList.add('ExpandBox');}; 	
	}
};