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

	var bigTitle = select('.brand-values-big-title');
	var brandImages = selectAll('.brand-value-img');
	var brandText = selectAll('.brand-value-txt');

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
			.tweenChanges(true)
			.addTo(bodyController);
	};

	var _slideshow = function _slideshow() {

		/* Pre stage elements */
		var stage = function(elements, css) {
			elements.forEach(function(val, i) {
				if (i > 0) { TweenMax.set(val, css); }
			});
		};

		stage(brandImages, {
			opacity: 0
		});

		stage(brandText, {
			opacity: 0
		});

		/*
			TODO:
			— Make a timeline with all the sequenced slide animations in a looping order
			— Same thing for the text description and sync images/text together
			— Add progress indicator
			— Use TimelineMax methods to control animation
		*/
	};

	var init = function() {
		if (device.desktop) {
			_slideshow();
			_bigTitleAnimaion();
		}
	};

	return {
		init: init
	};

});