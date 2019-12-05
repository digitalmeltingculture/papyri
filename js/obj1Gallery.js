var obj1Gallery = (function() {
    
    var swiper;

    var init = function() {
        $('#obj1-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#obj1-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start obj1 GALLERY");

            var swiper = new Swiper('#obj1-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#obj1-gallery').data('started', 'yes');
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