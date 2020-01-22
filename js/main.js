function trans_go(lang, page_id_from, page_id_to) {
	selectedLang = lang;
	i18n.init(lang);
	navigation.actGoPage(page_id_from, page_id_to);
}

function initMutemuiaGallery(){
	mutemuiaGallery.start();
}

function stopMutemuiaGallery(){
	mutemuiaGallery.goFirst();
}

function initUshabtiGallery(){
	ushabtiGallery.start();
}

function stopUshabtiGallery(){
	ushabtiGallery.goFirst();
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

function initObj1VillaGallery(){
	obj1VillaGallery.start();
}

function stopObj1VillaGallery(){
	obj1VillaGallery.goFirst();
}

function initObj2VillaGallery(){
	obj2VillaGallery.start();
}

function stopObj2VillaGallery(){
	obj2VillaGallery.goFirst();
}

function initObj3VillaGallery(){
	obj3VillaGallery.start();
}

function stopObj3VillaGallery(){
	obj3VillaGallery.goFirst();
}

function initObj4VillaGallery(){
	obj4VillaGallery.start();
}

function stopObj4VillaGallery(){
	obj4VillaGallery.goFirst();
}

function initObj5VillaGallery(){
	obj5VillaGallery.start();
}

function stopObj5VillaGallery(){
	obj5VillaGallery.goFirst();
}

function initObj1HerculaneumGallery(){
	obj1HerculaneumGallery.start();
}

function stopObj1HerculaneumGallery(){
	obj1HerculaneumGallery.goFirst();
}

function initObj2HerculaneumGallery(){
	obj2HerculaneumGallery.start();
}

function stopObj2HerculaneumGallery(){
	obj2HerculaneumGallery.goFirst();
}

function initObj3HerculaneumGallery(){
	obj3HerculaneumGallery.start();
}

function stopObj3HerculaneumGallery(){
	obj3HerculaneumGallery.goFirst();
}

function initObj4HerculaneumGallery(){
	obj4HerculaneumGallery.start();
}

function stopObj4HerculaneumGallery(){
	obj4HerculaneumGallery.goFirst();
}

function initObj5HerculaneumGallery(){
	obj5HerculaneumGallery.start();
}

function stopObj5HerculaneumGallery(){
	obj5HerculaneumGallery.goFirst();
}





function animateObj1Villa(){
	render_obj1_villa.animate();
}

function stopObj1Villa(){
	render_obj1_villa.stop();
}

function animateObj2Villa(){
	render_obj2_villa.animate();
}

function stopObj2Villa(){
	render_obj2_villa.stop();
}

function animateObj3Villa(){
	render_obj3_villa.animate();
}

function stopObj3Villa(){
	render_obj3_villa.stop();
}

function animateObj4Villa(){
	render_obj4_villa.animate();
}

function stopObj4Villa(){
	render_obj4_villa.stop();
}

function animateObj5Villa(){
	render_obj5_villa.animate();
}

function stopObj5Villa(){
	render_obj5_villa.stop();
}

function animateObj1Herculaneum(){
	render_obj1_herculaneum.animate();
}

function stopObj1Herculaneum(){
	render_obj1_herculaneum.stop();
}

function animateObj2Herculaneum(){
	render_obj2_herculaneum.animate();
}

function stopObj2Herculaneum(){
	render_obj2_herculaneum.stop();
}

function animateObj3Herculaneum(){
	render_obj3_herculaneum.animate();
}

function stopObj3Herculaneum(){
	render_obj3_herculaneum.stop();
}

function animateObj4Herculaneum(){
	render_obj4_herculaneum.animate();
}

function stopObj4Herculaneum(){
	render_obj4_herculaneum.stop();
}

function animateObj5Herculaneum(){
	render_obj5_herculaneum.animate();
}

function stopObj5Herculaneum(){
	render_obj5_herculaneum.stop();
}

function clearAndGoHome(){
	console.log("Clear and go Home");

	if( !$('#page-home').is(":visible") ){
		//Stop galleries
		//stopMutemuiaGallery();
		//stopUshabtiGallery();
		stopObj1Gallery();
		//stopObj2Gallery();
		//stopObj3Gallery();
		//stopObj4Gallery();
		//stopObj5Gallery();
		
		//Stop renderings
		stopMute2();
		stopMute3();
		stopUshabtiBox();
		stopUshabti1();
		stopUshabti2();
		stopUshabti3();

		//Hide all pages
		$('.page').hide();
		//Show page home
		$('#page-home').show();
	}

}
