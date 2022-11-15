$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    //smoot scrolling

    $('a[href*="#"]').on('click',function(e){
        e.preventDefult();
        $('html,body').animate({
            scrollTop : $($(this).attr(href)).offset().top,
        },
         500,
         'linear'
        );
    });

});