window.onload = function(){ 

	document.getElementById('menuToggle').onclick = function() {
	
	    var className = ' ' + menuToggle.className + ' ';
	
	    if ( ~className.indexOf(' close ') ) {
	        this.className = className.replace(' close ', ' ');
	    } else {
	        this.className += ' close';
	    }              
	}
	
};