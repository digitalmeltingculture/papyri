var threeDGallery = (function() {
    
    var swiper;

    var init = function() {
        $('#3d-gallery').data('started', 'no');
    }

    var start = function() {
        var started = $('#3d-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start 3d GALLERY");

            var swiper = new Swiper('#3d-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#3d-gallery').data('started', 'yes');
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