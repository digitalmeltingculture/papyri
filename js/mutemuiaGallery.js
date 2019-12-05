var mutemuiaGallery = (function() {
    
    var swiper;

    var init = function() {
        $('#mutemuia-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#mutemuia-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start MUTEMUIA GALLERY");

            var swiper = new Swiper('#mutemuia-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#mutemuia-gallery').data('started', 'yes');
        }
    }

    var goFirst = function() {
        if(swiper){
            swiper.slideTo(0);
        }
    }

    return {
        init: init,
        start: start,
        goFirst: goFirst
    }

})();