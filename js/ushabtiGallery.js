var ushabtiGallery = (function() {
    
    var swiper;

    var init = function() {
        $('#ushabti-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#ushabti-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start ushabti GALLERY");

            var swiper = new Swiper('#ushabti-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.u-swiper-button-next',
                    prevButton: '.u-swiper-button-prev'
                });

            $('#ushabti-gallery').data('started', 'yes');
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