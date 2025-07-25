$(function () {
  $(window).on('scroll', function () {
    var windowHeight = $(window).height();
    var scrollY = $(window).scrollTop();

    $('.work-item').each(function () {
      var $this = $(this);
      var itemOffset = $this.offset().top;

      if (scrollY > itemOffset - windowHeight + 100) {
        $this.addClass('start_animation_scroll');
      }
    });
  });

  $(window).trigger('scroll'); // 初期表示時にも発火
});