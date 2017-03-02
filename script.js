$(document).ready(function () {
  var $brand = $('.navbar-brand');
  var $offsetY = $('#background').offset().top - 150;
  var $navLinks = $('#main-nav a');
  var $collapsedNav = $('.navbar-collapse')

  // Use this to decode html entity for changeLetter
  function decodeHTML(html) {
    var temp = document.createElement('textarea');
    temp.innerHTML = html;
    return temp.value;
  }
  // Change letter O to Ø
  function changeLetter(elem) {
    var str = elem.text().toLowerCase();
    var oSlash = decodeHTML('&Oslash;');
    str = str.replace(/\o/g, oSlash);
    elem.text(str);
  }
  $('.letter-change').each(function() {
    changeLetter($(this));
  });

  // Smooth scroll to content
  $navLinks.on('click', function(e) {
    e.preventDefault();
    $(':focus').blur(); // Remove focus
    var $link = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $($link).offset().top - 50
    }, 900);
    // Mobile Menu - Toggle close menu after clicking nav link
    if ($collapsedNav.hasClass('in')) {
      $('.navbar-toggle').click();
    }
  });

  // Show brand after scroll
  function scroll() {
    if ($(window).scrollTop() >= $offsetY) {
      $brand.fadeIn('slow');
    } else {
      $brand.fadeOut('slow');
    }
  }
  document.onscroll = scroll;

});
