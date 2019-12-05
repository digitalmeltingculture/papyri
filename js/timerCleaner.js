/*******************************************
 ****************** TIMER ******************
 * Modulo incaricato di ritornare alla home
 * se non ci sono interazioni in tot tempo  
 *******************************************/

var timerCleaner = (function() {
 	var refresh;
 	var seconds;
 	var cbfunction;

	var intvrefresh = function() {
		            clearInterval(refresh);
		            refresh = setInterval(function() {
		               cbfunction();
		            }, seconds * 1000);
		        };

 	var init = function(sec, cbfunc) {
 		seconds = sec;
 		cbfunction = function(){
 			window.location.reload(false);
 		};
				
		$(document).on('keypress click', function() { intvrefresh() });
		
		intvrefresh();
		
	}

	return {
        init: init
    }

 })();


/*******************************************
 ************** TIMER REBOOT **************
 * Modulo incaricato di riavviare la pagina *  
 *******************************************/

var timerReboot = (function() {
 	var refresh;
 	var seconds;
 	var cbfunction;

	var intvrefresh = function() {
		            clearInterval(refresh);
		            refresh = setInterval(function() {
		               cbfunction();
		            }, seconds * 1000);
		        };

 	var init = function(sec) {
 		seconds = sec;
 		cbfunction = function(){
 			window.location.reload(false);
 		};
 		intvrefresh();
	}

	return {
        init: init
    }

 })();