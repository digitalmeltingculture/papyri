var obj5Gallery = (function() {
    
    var swiper;

    var init = function() {
        $('#obj5-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#obj5-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start obj5 GALLERY");

            var swiper = new Swiper('#obj5-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#obj5-gallery').data('started', 'yes');
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