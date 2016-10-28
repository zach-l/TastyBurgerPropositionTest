window.onload = function() {
		function getScrollTop() {
			if (typeof window.pageYOffset !== 'undefined' ) {
			  // Most browsers
			  return window.pageYOffset;
			}

			var d = document.documentElement;
			if (d.clientHeight) {
			  // IE in standards mode
			  return d.scrollTop;
			}

			// IE in quirks mode
			return document.body.scrollTop;
		}

		window.onscroll = function() {
			var navBar = document.getElementById('nav_bar'),
				scroll = getScrollTop(),
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
			
		};

	};