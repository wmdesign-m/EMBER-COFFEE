$(function () {
  // 開閉ボタン
  $('.nav-toggle').on('click', function () {
    const $header = $('.page-header');
    const isOpen = $header.hasClass('is-open');

    $header.toggleClass('is-open');

    $(this).attr('aria-expanded', !isOpen);
    $(this).attr('aria-label', isOpen ? 'メニューを開く' : 'メニューを閉じる');
  });

  // ★追加：メニューリンクを押したら閉じる
  $('.main-nav a').on('click', function () {
    const $header = $('.page-header');
    $header.removeClass('is-open');

    $('.nav-toggle')
      .attr('aria-expanded', 'false')
      .attr('aria-label', 'メニューを開く');
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