$(document).ready(function() {
  /*
  $.fn.fullpage({
    navigation: true
  });
  $('#header').waypoint('sticky');
*/
  $('.swipebox').swipebox({
    hideBarsDelay : 3000, // 0 to always show caption and action bar
    videoMaxWidth : 1140, // videos max width
    beforeOpen: function() {}, // called before opening
    afterClose: function() {} // called after closing
  });
});
