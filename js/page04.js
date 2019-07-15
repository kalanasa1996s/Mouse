$(document).on("mousemove",function (e) {
    $("span").css("top",e.pageY);
    $("span").css("left",e.pageX);
})


var timer;
    $(document).on("mousemove",function (event) {
        $('#kalana').fadeIn(1000);
        $('#kalana').css('top',event.pageY);
        $('#kalana').css('top',event.pageX);
        clearTimeout(timer);
        timer=setTimeout(function () {
            $('#kalana').fadeOut('slow');
        },1000);

        
    })