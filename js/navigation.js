/*******************************************
 ********** NAVIGATION MODULE **************
 * Modulo incaricato della navigazione tra 
 * le varie pagine/div    
 *******************************************/

var navigation = (function() {
    
    // Effect options
    var delayVal = 500;
    var fadeSpeed = 'slow';    

    var goPage = function() {
        var d = $.Deferred();

		$( ".nav-goPage" ).on( "click", function() {
		  	console.log( "Go Page" );
			var pageId = $(this).data('pageid');
            /*
            // No effect transition
            $(".page").hide();
            $("#"+pageId).show();   
            */      
            /* Fade effect transition */
            var currPageId = $(this).parents('.page').attr('id'); //destination page id
            var funcName = $(this).data('cbfunc'); //callback function
            $('#'+currPageId).fadeOut(fadeSpeed, function () {
                $("#"+pageId).delay(delayVal).fadeIn(fadeSpeed, function () {
                    // Execute callback function if defined
                    console.log(funcName);
                    if (typeof window[funcName] === "function") {
                        window[funcName]();
                    }                     
                });         
            });     	
		});

        d.resolve();
        return d.promise();    	
    }

    var actGoPage = function(pageIdFrom, pageIdTo) {
        var d = $.Deferred();

        /*
        // No effect transition
        $(".page").hide();
        $("#"+pageId).show();   
        */   
        // Fade effect transition
        $('#'+pageIdFrom).fadeOut(fadeSpeed, function () {
            $("#"+pageIdTo).delay(delayVal).fadeIn(fadeSpeed);
        });      
           
        d.resolve();
        return d.promise();     
    }

    var init = function(){
    	console.log("Navigation init");
    	$('#page-home').show();
    	goPage();
    }

    return {
        init: init,
        actGoPage: actGoPage
    }

})();