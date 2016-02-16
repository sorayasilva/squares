var wimg = $('.galimg').width();
$('.galimg').height(wimg);

$('.galimg img').each(function(){

	var w = $(this).width();
	var h = $(this).height();

	if(w > h){
		$(this).addClass('landscape');
		$('.landscape').css('text-align' ,'center');
	
	var shrink = $(this).height() / imgh;
	var halcrop = (imgw * shrink - w) / 2;

	$(this).css('left', -halfcrop +'px');
	
	}

	else {
		$(this).addClass('portrait');
	}
	
});

