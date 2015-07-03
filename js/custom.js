/*///////////////////////////////////////
Lightbox Start //////////////////////////
///////////////////////////////////////*/

function lightbox(insertContent, ajaxContentUrl){

	// add lightbox/shadow <div/>'s if not previously added
	if($('#lightbox').size() == 0){
		var theLightbox = $('<div id="lightbox"/>');
		var theShadow = $('<div id="lightbox-shadow"/>');
		$(theShadow).click(function(e){
			closeLightbox();
		});
		$('body').append(theShadow);
		$('body').append(theLightbox);
	}

	// remove any previously added content
	$('#lightbox').empty();

	// insert HTML content
	if(insertContent != null){
		$('#lightbox').append(insertContent);
	}

	// insert AJAX content
	if(ajaxContentUrl != null){
		// temporarily add a "Loading..." message in the lightbox
		$('#lightbox').append('<p class="loading">Loading...</p>');

		// request AJAX content
		$.ajax({
			type: 'GET',
			url: ajaxContentUrl,
			success:function(data){
				// remove "Loading..." message and append AJAX content
				$('#lightbox').empty();
				$('#lightbox').append(data);
			},
			error:function(){
				alert('AJAX Failure!');
			}
		});
	}

	// move the lightbox to the current window top + 100px
	$('#lightbox').css('top', $(window).scrollTop() + 100 + 'px');

	// display the lightbox
	$('#lightbox').show();
	$('#lightbox-shadow').show();

}

// close the lightbox
function closeLightbox(){

	// hide lightbox and shadow <div/>'s
	$('#lightbox').hide();
	$('#lightbox-shadow').hide();

	// remove contents of lightbox in case a video or other content is actively playing
	$('#lightbox').empty();
}

/*///////////////////////////////////////
Lightbox End ////////////////////////////
///////////////////////////////////////*/

/*///////////////////////////////////////
Maps ////////////////////////////////////
///////////////////////////////////////*/

$('.Class11').click(function() {
	$('.Brooklyn').fadeIn();
	$('.SanFran').hide();
	$('.Chicago').hide();
	$('.LA').hide();
});

$('.Class22').click(function() {
	$('.LA').fadeIn();
	$('.Brooklyn').hide();
	$('.SanFran').hide();
	$('.Chicago').hide();
});

$('.Class33').click(function() {
	$('.LA').hide();
	$('.Brooklyn').hide();
	$('.SanFran').fadeIn();
	$('.Chicago').hide();
});

$('.Class44').click(function() {
	$('.LA').hide();
	$('.Brooklyn').hide();
	$('.SanFran').hide();
	$('.Chicago').fadeIn();
});





























