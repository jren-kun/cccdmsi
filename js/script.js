$(window).scroll(function() {    
        var scroll_top = $(window).scrollTop();

        if (scroll_top >= 200) {
            $("#scrollNav").addClass("on-scroll text-light");
        } else {
            $("#scrollNav").removeClass("on-scroll text-light");
        }
                      
});