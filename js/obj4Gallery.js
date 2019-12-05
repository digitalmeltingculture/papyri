var obj4Gallery = (function() {
    
    var swiper;

    var init = function() {
        $('#obj4-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#obj4-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start obj4 GALLERY");

            var swiper = new Swiper('#obj4-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#obj4-gallery').data('started', 'yes');
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