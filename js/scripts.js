$(function() {
  /* highlight the top nav as scrolling occurs */
  $('body').scrollspy({
    target: '#nav',
    offset: $('#nav').height()
  })

  /* affix the navbar after scroll below header */
  $('#nav').affix({
    offset: {
      top: $('header').height() - $('#nav').height() - 1
    }
  });	

  /* smooth scrolling for nav sections */
  $('#nav .navbar-nav li>a').click( function(e) {
    e.preventDefault();
    var link = $(this).attr('href');
    var posi = 0;
    var headerOffset = $('header').height() - $(window).scrollTop();
    if (headerOffset > 0) {
      posi = headerOffset - $("#nav").height();
      posi = $(link).offset().top - $("#nav").height();
      console.log("there");
    }
    else {
      posi = $(link).offset().top - $("#nav").height();
      console.log("here");
    }
    console.log(posi);
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
