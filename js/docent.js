$( document ).ready(function() {
    $('.video1').click(function() {
        $('#video1').get(0).pause();
        $('#video1').get(0).currentTime=0;
        $('#video1').get(0).play();
    });
    
    $('.video2').click(function() {
        $('#video2').get(0).pause();
        $('#video2').get(0).currentTime=0;
        $('#video2').get(0).play();
    });
    
    $('.video3').click(function() {
        $('#video3').get(0).pause();
        $('#video3').get(0).currentTime=0;
        $('#video3').get(0).play();
    });
});

// ------------------------------
// Scroll Nav
// http://twitter.com/mattsince87
// http://codepen.io/mattsince87/pen/exByn
// ------------------------------

function scrollNav() {
  $('.nav-top a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 30
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();