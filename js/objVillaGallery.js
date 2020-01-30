var objVillaGallery = (function() {
    
    var swiper;

    var init = function(objNumber) {
        $('#obj' + objNumber + '-villa-gallery').data('started', 'no');
    }

    var start = function(objNumber) {
        var started = $('#obj' + objNumber + '-villa-gallery').data('started');
        
        if(started == 'no'){
            console.log("Start obj" + objNumber + " GALLERY");

            var swiper = new Swiper('#obj' + objNumber + '-villa-gallery', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.m-swiper-button-next',
                    prevButton: '.m-swiper-button-prev'
                });

            $('#obj' + objNumber + '-villa-gallery').data('started', 'yes');
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