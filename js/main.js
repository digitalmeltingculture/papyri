function trans_go(lang, page_id_from, page_id_to) {
	selectedLang = lang;
	i18n.init(lang);
	navigation.actGoPage(page_id_from, page_id_to);
}

function initThreeDGallery(){
	threeDGallery.start();
}



function initVillaGallery(){
	villaGallery.start();
}

function stopVillaGallery(){
	villaGallery.goFirst();
}

function initHerculaneumGallery(){
	herculaneumGallery.start();
}

function stopHerculaneumGallery(){
	herculaneumGallery.goFirst();
}




function initObjVillaGallery(objNumber){
	objVillaGallery.start(objNumber);
}

function stopObjVillaGallery(objNumber){
	objVillaGallery.goFirst(objNumber);
}




function initObjHerculaneumGallery(objNumber){
	objHerculaneumGallery.start(objNumber);
}

function stopObjHerculaneumGallery(objNumber){
	objHerculaneumGallery.goFirst(objNumber);
}





function animateObjVilla(){
	render_obj_villa.animate();
}

function stopObjVilla(){
	render_obj_villa.stop();
}

$(document).on('click', '.render_obj_villa > i.nav-close', function(){
	stopObjVilla();
});





function animateObjHerculaneum(){
	render_obj_herculaneum.animate();
}

function stopObjHerculaneum(){
	render_obj_herculaneum.stop();
}

$(document).on('click', '.render_obj_herculaneum > i.nav-close', function(){
	stopObjHerculaneum();
});





function clearAndGoHome(){
	console.log("Clear and go Home");

	if( !$('#page-home').is(":visible") ){
		//Stop galleries
		stopVillaGallery();
		stopHerculaneumGallery();
		stopObjVillaGallery();
		stopObjHerculaneumGallery();
		
		//Stop renderings
		stopObjVilla();
		stopObjHerculaneum();

		//Hide all pages
		$('.page').hide();
		//Show page home
		$('#page-home').show();
	}

}
