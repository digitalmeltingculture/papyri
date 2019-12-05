var obj2Gallery = (function() {
    
    var swiper;

    var init = function() {
        $('#obj2-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#obj2-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start obj2 GALLERY");

            var swiper = new Swiper('#obj2-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#obj2-gallery').data('started', 'yes');
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