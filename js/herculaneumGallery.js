var herculaneumGallery = (function() {
    
    var swiper;

    var init = function() {
        $('#herculaneum-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#herculaneum-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start herculaneum GALLERY");

            var swiper = new Swiper('#herculaneum-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#herculaneum-gallery').data('started', 'yes');
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