
//menu
$('.header-in > #nav-pc > ul.gnb').mouseenter(function(){
    $('.sub').stop().fadeIn();
  });
  $('.header-in > #nav-pc > ul.gnb').mouseleave(function(){
    $('.sub').stop().fadeOut();
  });
  


// scroll up&down
$(document).ready(function() {
    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".up").offset().top
        }, 1500);
    });
    });
    
    $(document).ready(function() {
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $(".down").offset().top
        }, 1000);
    });
    });


