$(document).ready(function(){

	var headerSlider = $('.header-slider');
	headerSlider.owlCarousel({
		dots: false,
		navSpeed: 600,
		mouseDrag: false,
		items: 1
	});
	var headerItems = headerSlider.find('.owl-item');
	var headerPrevBtn = $('.header-slider-prev');
	var headerNextBtn = $('.header-slider-next');
	attachCustomSliderBtns(headerSlider, headerItems, headerPrevBtn, headerNextBtn, 700);
 
	var portfolioSlider = $('.portfolio-slider');
	portfolioSlider.owlCarousel({
		margin: 20,
		dots: false,
		mouseDrag: false,
		responsive:{
			0:{
				items:1
			},
			550:{
				items:2
			},
			750:{
				items:3
			},
			960:{
				items:3
			}
		}
	});
	var portfolioItems = portfolioSlider.find('.owl-item');
	var portfolioPrevBtn = $('.sect-portfolio .control-btn-prev');
	var portfolioNextBtn = $('.sect-portfolio .control-btn-next');
	attachCustomSliderBtns(portfolioSlider, portfolioItems, portfolioPrevBtn, portfolioNextBtn);

	var postSlider = $('.post-slider');
	postSlider.owlCarousel({
		margin: 20,
		dots: false,
		mouseDrag: false,
		responsive:{
			0:{
				items:1
			},
			551:{
				items:2
			},
			960:{
				items:3
			}
		}
	});
	var postItems = postSlider.find('.owl-item');
	var postPrevBtn = $('.sect-posts .control-btn-prev');
	var postNextBtn = $('.sect-posts .control-btn-next');
	attachCustomSliderBtns(postSlider, postItems, postPrevBtn, postNextBtn);

	var peoplesaySlider = $('.peoplesay-slider');
	peoplesaySlider.owlCarousel({
		dots: false,
		mouseDrag: false,
		items: 1
	});
	var peoplesayItems = peoplesaySlider.find('.owl-item');
	var peoplesayPrevBtn = $('.sect-peoplesay .control-btn-prev');
	var peoplesayNextBtn = $('.sect-peoplesay .control-btn-next');
	attachCustomSliderBtns(peoplesaySlider, peoplesayItems, peoplesayPrevBtn, peoplesayNextBtn, 500);

	var twitterSlider = $('.twitter-slider');
	twitterSlider.owlCarousel({
		dots: false,
		mouseDrag: false,
		items: 1
	});
	var twitterItems = twitterSlider.find('.owl-item');
	var twitterPrevBtn = $('.sect-twitter .control-btn-prev');
	var twitterNextBtn = $('.sect-twitter .control-btn-next');
	attachCustomSliderBtns(twitterSlider, twitterItems, twitterPrevBtn, twitterNextBtn, 500);

	function attachCustomSliderBtns(slider, slides, prevBtn, nextBtn, speed) {
		checkBtns();
		if (!speed) speed = 300;
		prevBtn.click(function() {
			slider.trigger('prev.owl.carousel', [speed]);
			checkBtns();
		});
		nextBtn.click(function() {
			slider.trigger('next.owl.carousel',  [speed]);
			checkBtns();
		});
		function checkBtns() {
			if (slides[0].classList.contains('active')) {
				prevBtn.addClass('disabled');
			}
			else {
				prevBtn.removeClass('disabled');
			}
			if (slides[slides.length - 1].classList.contains('active')) {
				nextBtn.addClass('disabled');
			}
			else {
				nextBtn.removeClass('disabled');
			}
		}
	}
});