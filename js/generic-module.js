var generic = (function() {
    var genAttr = 1; 


    var genFunc = function(num) {
        return fooAttr+num;
    }    

    var genFuncDeferred = function(num) {
        var d = $.Deferred();

        alert(fooAttr+num);

        d.resolve();
        return d.promise();
    }

    var waitingFunc = function(){
        $.when( genFuncDeferred() ).then(
          function(  ) {
            alert( "done" );
          }
        );        
    }

    var triggerEvent = function() {
        var msg = "ciao";
        /* Lancia evento */
        console.log("event triggered: " + msg);
        $(document).trigger("event_name", msg);
    }

    var init = function() {
        /* Cattura evento */
        $(document).on("event_name",
                function(event, msg) {
                    console.log("event with msg: " + msg)
                });
    }

    return {
        init: init,
        genFunc: genFunc,
        genFuncDeferred: genFuncDeferred,
        waitingFunc: waitingFunc,
        triggerEvent: triggerEvent
    }

})();