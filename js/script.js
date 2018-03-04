$(document).ready(function() {
	$('nav a').click(function () {
	  var $href = $(this).attr('href');
	  $('html, body').animate({
	    scrollTop: $($href).offset().top - 120
	  }, 'slow');
	  // return false;
	});
});

function initMap() {
	var uluru = {lat: 43.4736285, lng: -80.53703009999998};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
         map: map
        });
}
   
  