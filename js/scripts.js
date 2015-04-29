$(function() {
  /* highlight the top nav as scrolling occurs */
  $('body').scrollspy({
    target: '#nav',
    offset: $('#nav').height()
  })

  /* affix the navbar after scroll below header */
  $('#nav').affix({
    offset: {
      top: $('header').height()
    }
  });	

  /* smooth scrolling for nav sections */
  $('#nav .navbar-nav li>a').click( function(e) {
    e.preventDefault();
    var anchorOffset = $($(this).attr('href')).offset().top;
    var windowOffset = $(window).scrollTop();
    var navHeight = $('#nav').height();
    var headerHeight = $('header').height();

    console.log(anchorOffset + " " + windowOffset + " " + navHeight + " " + headerHeight);

    var posi = 0;
    if (windowOffset < headerHeight) {
      // we haven't scroll past the header
      posi = anchorOffset - navHeight;
      console.log("there");
    }
    else {
      posi = anchorOffset - navHeight;
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
