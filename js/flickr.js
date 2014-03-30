$(document).ready(function() {
  console.log("Viewport is : " + $(window).width() + "x" + $(window).height());
  var getFlickrPhotos = function(handlePhoto) {
    var flickrAPI = "http://api.flickr.com/services/rest/?" + $.param({
      "format": "json",
      "nojsoncallback": "1",
      "api_key": "4a584f50af7fd628f650cfa493a74841",
    });
    $.getJSON(flickrAPI, {
      "method": "flickr.photosets.getPhotos",
      "photoset_id": "72157635566205131"
    }, function(albumData) {
      if(!albumData || albumData['stat'] != 'ok') {
        console.log(albumData);
        return false;
      }
      $.each(albumData['photoset']['photo'], function(index, photo) {
        var promise = $.getJSON(flickrAPI, {
          "method": "flickr.photos.getSizes",
          "photo_id": photo['id'],
        }).pipe(function(photoData) {
          if(photoData && photoData['stat'] == 'ok') {
            var img = {};
            $.each(photoData.sizes.size, function(index, obj) {
              img[obj.label] = obj.source;
            });
            return img;
          }
          else {
            console.log(photoData);
            return false;
          }
        });
        handlePhoto(promise);
      });
    });
  };

  $(function() {
    // handle all the promises which download the photos
    getFlickrPhotos(function(photoPromise) {
      photoPromise.done(function(imgObj) {
        if(!imgObj || !imgObj.Large || !imgObj.Square) { console.log("say what");return; }
        var link = $("<a>").attr("class", "swipebox").attr("href", imgObj.Large);
        var img = $("<img>").attr("src", imgObj.Square).appendTo(link);
        link.appendTo($("#album"));
        console.log(imgObj.sm);
      });
    });
  });
});

