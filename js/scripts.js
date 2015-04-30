$(function() {
  /* highlight the top nav as scrolling occurs */
  $('body').scrollspy({
    target: '#nav',
    offset: $('#nav').height()
  })

  /* affix the navbar after scroll below header */
  $('#nav').affix({
    offset: {
      top: $('#nav').offset().top
    }
  });	

  $('#nav').on('affix.bs.affix affix-top.bs.affix', function(e) {
    var height;
    switch (e.type) {
      case 'affix':
        height = $('#nav').height();
        break;
      case 'affix-top':
        height = 0;
        break;
    }
    $('#affix-spacer').height(height);
  });

  /* smooth scrolling for nav sections */
  $('#nav .navbar-nav li>a').click( function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    var sectionOffset = $(section).offset().top;
    var navHeight = $('#nav').height();

    var posi = sectionOffset - navHeight;
    $('html, body').animate({scrollTop: posi}, 700);
  })

  /* instafeed.js */
  var feed = new Instafeed({
    get: 'user',
    userId: 1416158121,
    accessToken: '1416158121.467ede5.6a670872bf694751b43af736bdd775cf',
    template: '<a href="{{link}}"><img src="{{image}}"></a>'
  });
  feed.run();

});
