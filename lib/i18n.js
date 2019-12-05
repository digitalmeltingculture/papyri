/*******************************************
 ************* i18n MODULE *****************
 * Modulo incaricato della gestione del 
 * multilingua
 *******************************************/

var i18n = (function() {
	var langCode = 'it';
	var langJS = null;

	var translate = function (jsdata)
	{	
		$("[tkey]").each (function (index)
		{
			var strTr = jsdata [$(this).attr ('tkey')];
		    $(this).html (strTr);
		});
	} 	

	var init = function(lang){
    	console.log("i18n init");
		
		if(lang)
			langCode = lang;
		
    	$.getJSON('lang/'+langCode+'.json', translate);
    }

    return {
        init: init
    }
 })();