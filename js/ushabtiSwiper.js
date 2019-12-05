var ushabtiSwiper = (function() {
    
    var swiper;

    var init = function() {
        $('#ushabtiSwiper').data('started', 'no');
    }

    var start = function() {
        var started = $('#ushabtiSwiper').data('started');
        
        if(started == 'no'){
            console.log("Start USHABTI SWIPER");
            swiper = new Swiper('#ushabtiSwiper', {
                                nextButton: '.ushabtiSwiper-button-next',
                                prevButton: '.ushabtiSwiper-button-prev'
                            });    

            $('#ushabtiSwiper').data('started', 'yes');
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