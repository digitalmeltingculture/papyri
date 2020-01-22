var villaGallery = (function() {
    
    var swiper;

    var init = function() {
        $('#villa-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#villa-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start villa GALLERY");

            var swiper = new Swiper('#villa-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#villa-gallery').data('started', 'yes');
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