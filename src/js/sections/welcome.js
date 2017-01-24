/* global define */

define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'../utils',
	'../animations',
	'ScrollMagicAnimation',

], function welcome(
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
	var bodyController = animations.bodyController;

	var svgImage = select('#mask svg.mask image');

	var _animateMaskedImage = function(scollingStarted) {
		if (window.outerWidth > 768) {
			var maskedTL = new TimelineMax()
				.fromTo(svgImage, 1, {
					attr: { y: 200 },
					ease: ease.none
				}, {
					attr: { y: -100 },
					ease: ease.none
				});

			var maskedScene = new ScrollMagic.Scene({
				triggerElement: svgImage,
				duration: '200%',
				triggerHook: 0
			});

			maskedScene
				.setTween(maskedTL)
				.tweenChanges(true)
				.addTo(bodyController);
		}
	};

	var _chain = function() {
		return new Promise(function(resolve) {
			resolve();
		})
	};

	var init = function() {
		_chain()
			.then(_animateMaskedImage);
	};

	return {
		init: init
	};


});