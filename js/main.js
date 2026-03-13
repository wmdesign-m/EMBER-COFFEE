$(function () {
  const $header = $('.page-header');
  const $toggle = $('.nav-toggle');
  const $nav = $('.main-nav');

  $toggle.on('click', function (e) {
    e.stopPropagation();

    const isOpen = $header.hasClass('is-open');

    $header.toggleClass('is-open');
    $('body').toggleClass('menu-open');

    $(this).attr('aria-expanded', !isOpen);
    $(this).attr('aria-label', isOpen ? 'メニューを開く' : 'メニューを閉じる');
  });

  $nav.on('click', function (e) {
    e.stopPropagation();
  });

  $('.main-nav a').on('click', function () {
    const $header = $('.page-header');
    $header.removeClass('is-open');
    $('body').removeClass('menu-open');

    $toggle
      .attr('aria-expanded', 'false')
      .attr('aria-label', 'メニューを開く');
  });

  $(document).on('click', function (e) {
    if (
      $header.hasClass('is-open') &&
      !$(e.target).closest('.page-header').length
    ) {
      $header.removeClass('is-open');
      $('body').removeClass('menu-open');

      $toggle
        .attr('aria-expanded', 'false')
        .attr('aria-label', 'メニューを開く');
    }
    });

  // PCだけ：スクロールでヘッダーをコンパクト化
  $(window).on('scroll', function () {
    if (window.innerWidth >= 960) {
      if ($(window).scrollTop() > 120) {
        $('.page-header').addClass('is-scrolled');
      } else {
        $('.page-header').removeClass('is-scrolled');
      }
    } else {
      $('.page-header').removeClass('is-scrolled');
    }
  });
});