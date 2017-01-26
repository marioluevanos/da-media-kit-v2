/* global define */

define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'../utils',
	'../animations',
	'ScrollMagicAnimation',

], function aboutUs(
	ScrollMagic,
	TweenMax,
	TimelineMax,
	utils,
	animations
	) {

	'use strict';

	var select = utils.select;
	var selectAll = utils.selectAll;
	var ease = utils.ease;
	var device = utils.device;
	var bodyController = animations.bodyController;

	var bigTitle = select('.about-big-title');

	var _bigTitleAnimaion = function() {

		var bigTitleTL = new TimelineMax()
			.fromTo(bigTitle, 1, {
				x: '-20%'
			}, {
				x: '-170%'
			});

		var bigTitleScene = new ScrollMagic.Scene({
			triggerElement: bigTitle,
			duration: '150%',
			triggerHook: 1
		});

		bigTitleScene
			.setTween(bigTitleTL)
			.tweenChanges(false)
			.addTo(bodyController);
	};

	var _slideshow = function _slideshow() {

		var slides = selectAll('.slider-item');
		var captions = selectAll('.slider-captions');
		var captionText = captions.map(function(c) { return c.children; });
		var navPrev = select('.slider-prev');
		var navNext = select('.slider-next');
		var startAutoplay = select('.slider-autoplay');
		var stopAutoplay = select('.slider-stop');

		var slidesCount = slides.length;
		var prevSlideID = null;
		var currSlideID = 0;
		var isAnimating = false;
		var isAutoPlay = false;
		var duration = 1;
		var delay = 5;

		function init() {

			TweenMax.set(slides, { y: '100%' });
			TweenMax.set(captions, { autoAlpha: 0 });


			navPrev.addEventListener('click', gotoPrevSlide, false);
			navNext.addEventListener('click', gotoNextSlide, false);
			startAutoplay.addEventListener('click', startAutoPlay, false);
			stopAutoplay.addEventListener('click', stopAutoPlay, false);
			gotoSlide(0, 0);
			startAutoPlay();
		}

		function gotoPrevSlide() {
			var slideToGo = currSlideID - 1;
			if (slideToGo <= -1) {
				slideToGo = slidesCount - 1;
			}
			stopAutoPlay();
			gotoSlide(slideToGo, duration, 'prev');
		}

		function gotoNextSlide() {
			var slideToGo = currSlideID + 1;
			if (slideToGo >= slidesCount) {
				slideToGo = 0;
			}
			stopAutoPlay();
			gotoSlide(slideToGo, duration, 'next');
		}

		function gotoSlide(slideID, _time, _direction) {

			var nextTL = function(prevID, currID, time) {

				var prevSlide = slides[prevID];
				var currSlide = slides[currID];

				var prevCaption = captions[prevID];
				var currCaption = captions[currID];

				var prevCaptionText = captionText[prevID];
				var currCaptionText = captionText[currID];

				return	new TimelineMax({ paused: true })

					.set(prevSlide, { zIndex: 0 }, 0)
					.to(prevSlide, time*2, {
						y: '100%',
						ease: ease.power.inOut
					}, 0)
					.set(currSlide, { zIndex: 1 }, 0)
					.fromTo(currSlide, time, {
						y: '-100%',
						ease: ease.power.inOut
					}, {
						y: '0%',
						ease: ease.power.inOut
					}, 0)

					.to(prevCaption, time, {
						autoAlpha: 0
					}, 0)
					.fromTo(currCaption, time, {
						autoAlpha: 0
					}, {
						autoAlpha: 1,
						ease: ease.none
					}, 0)

					.staggerTo(prevCaptionText, time, {
						y: 15,
						ease: ease.power.inOut
					}, 0.1, 0)
					.staggerFromTo(currCaptionText, time, {
						y: -15,
						autoAlpha: 0,
						ease: ease.power.inOut
					}, {
						y: 0,
						autoAlpha: 1,
						ease: ease.power.inOut
					}, 0.1, 0);
			};

			var prevTL = function(prevID, currID, time) {

				var prevSlide = slides[prevID];
				var currSlide = slides[currID];

				var prevCaption = captions[prevID];
				var currCaption = captions[currID];

				var prevCaptionText = captionText[prevID];
				var currCaptionText = captionText[currID];

				return new TimelineMax({ paused: true })

					.set(prevSlide, { zIndex: 0 }, 0)
					.to(prevSlide, time*2, {
						y: '-100%',
						ease: ease.power.inOut
					}, 0)
					.set(currSlide, { zIndex: 1 }, 0)
					.fromTo(currSlide, time, {
						y: '100%',
						ease: ease.power.inOut
					}, {
						y: '0%',
						ease: ease.power.inOut
					}, 0)

					.to(prevCaption, time, {
						autoAlpha: 0
					}, 0)
					.fromTo(currCaption, time, {
						autoAlpha: 0
					}, {
						autoAlpha: 1,
						ease: ease.none
					}, 0)

					.staggerTo(prevCaptionText, time, {
						y: -15,
						ease: ease.power.inOut
					}, 0.1, 0)
					.staggerFromTo(currCaptionText, time, {
						y: 15,
						autoAlpha: 0,
						ease: ease.power.inOut
					}, {
						y: 0,
						autoAlpha: 1,
						ease: ease.power.inOut
					}, 0.1, 0);
			};


			if (!isAnimating) {

				var time = (_time !== null) ? _time : duration;
				var direction = (_direction != null) ? _direction : 'next';

				isAnimating = true;
				prevSlideID = currSlideID;
				currSlideID = slideID;

				if (direction === 'next') {
					nextTL(prevSlideID, currSlideID, time).play();

				} else {
					prevTL(prevSlideID, currSlideID, time).play();
				}

				TweenMax.delayedCall(time, function() {
					isAnimating = false;
				});
			}
		}

		function play() {
			gotoNextSlide();
			TweenMax.delayedCall(delay, play);
		}

		function startAutoPlay(immediate) {
			if (immediate != null) {
				immediate = false;
			}

			if (immediate) {
				gotoNextSlide();
			}
			TweenMax.delayedCall(delay, play);
		}

		function stopAutoPlay() {
			isAutoPlay = false;
			TweenMax.killDelayedCallsTo(play);
		}

		init();

	};

	var init = function() {
		_slideshow();
		if (device.desktop) {
			_bigTitleAnimaion();
		}
	};

	return {
		init: init
	};

});


