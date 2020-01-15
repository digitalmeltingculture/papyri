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

function initObj1Gallery(){
	obj1Gallery.start();
}

function stopObj1Gallery(){
	obj1Gallery.goFirst();
}

function initObj2Gallery(){
	obj2Gallery.start();
}

function stopObj2Gallery(){
	obj2Gallery.goFirst();
}


function initObj3Gallery(){
	obj3Gallery.start();
}

function stopObj3Gallery(){
	obj3Gallery.goFirst();
}


function initObj4Gallery(){
	obj4Gallery.start();
}

function stopObj4Gallery(){
	obj4Gallery.goFirst();
}


function initObj5Gallery(){
	obj5Gallery.start();
}

function stopObj5Gallery(){
	obj5Gallery.goFirst();
}


function animateMute1(){
	console.log("animateMute1");
	render_mute_1.animate();
}

function stopMute1(){
	console.log("stopMute1");
	render_mute_1.stop();
}


function animateMute2(){
	console.log("animateMute2");
	render_mute_2.animate();
}

function stopMute2(){
	console.log("stopMute2");
	render_mute_2.stop();
}


function animateMute3(){
	console.log("animateMute3");
	render_mute_3.animate();
}

function stopMute3(){
	console.log("stopMute3");
	render_mute_3.stop();
}


function animateUshabtiBox(){
	console.log("animateUshabtiBox");
	render_cofanetto.animate();
}

function stopUshabtiBox(){
	console.log("stopUshabtiBox");
	render_cofanetto.stop();
}

function animateUshabti1(){
	console.log("animateUshabti1");
	render_ushabti1.animate();
}

function stopUshabti1(){
	console.log("stopUshabti1");
	render_ushabti1.stop();
}

function animateUshabti2(){
	console.log("animateUshabti2");
	render_ushabti2.animate();
}

function stopUshabti2(){
	console.log("stopUshabti2");
	render_ushabti2.stop();
}

function animateUshabti3(){
	console.log("animateUshabti3");
	render_ushabti3.animate();
}

function stopUshabti3(){
	console.log("stopUshabti3");
	render_ushabti3.stop();
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
