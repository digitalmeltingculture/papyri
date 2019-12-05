var obj3Gallery = (function() {
    
    var swiper;

    var init = function() {
        $('#obj3-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#obj3-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start obj3 GALLERY");

            var swiper = new Swiper('#obj3-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#obj3-gallery').data('started', 'yes');
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