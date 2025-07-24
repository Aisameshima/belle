$(function () {
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
    scrollY = $(window).scrollTop(),
      buttonPosition = $('.work-item').offset().top;
    if(scrollY > buttonPosition - windowHeight){
      $('.work-item').addClass('start_animation_scroll');
    }else{
      $('.work-item').removeClass('start_animation_scroll');
    }
  });
});

