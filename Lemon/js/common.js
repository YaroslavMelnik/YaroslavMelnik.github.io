$(function(){
	$('.header__mobile--burger').on('click', function(){
		$('.header__nav--mobile').slideToggle(400);
	});


	$('.slider, .col-1__slider').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				// dots:false,
				nav:false,
				autoplay:true,
				autoplayTimeout:5000,
				autoplayHoverPause:true,
				autoplaySpeed:1000
			},
			
		}
	});

	$('.fade-in').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
		});

	$('.fade-left').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInLeft',
		offset: 100
		});

	$('.fade-up').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 100
		});

	$('.fade-right').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInRight',
		offset: 100
		});

	$('.fade-down').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInDown',
		offset: 100
		});






});