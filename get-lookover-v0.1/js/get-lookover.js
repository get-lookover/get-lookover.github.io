const doc = $(document).ready;
doc(function () {
  $('.navmenu').click(function () {
    var navbar = $(".navbar-nav");
    navbar.slideToggle();
  });
  function navMatch(mediaQuery) {
    if (mediaQuery.matches) {
      $('.navbar-nav').hide();
    } else {
      $('.navbar-nav').show();
    }
  }

  var mediaQuery = window.matchMedia("(max-width: 600px)")
  navMatch(mediaQuery)
  mediaQuery.addListener(navMatch)

});

function closeAlert(alertHide) {
  alertHide.parentElement.style.display = 'none';
}

function close(parentEl) {
  parentEl.parentElement.style.display = 'none';
}