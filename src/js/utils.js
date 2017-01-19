/* global	define,
			Elastic,
			Power0,
			Power1,
			Power4,
			RoughEase,
			Back */

define(['TweenMax', 'ScrollToPlugin'], function utils(TweenMax) {

	'use strict';

	var scrollTo = function(yPos, dur) {
		return TweenMax.to(window, dur, {
			scrollTo: {
				y: yPos,
				autoKill: true
			},
			ease: ease.power.out
		});
	};

	var device = {
		desktop: window.outerWidth > 768,
		mobile: window.outerWidth < 768
	};

	var ease = {
		power: 		{
						out: Power4.easeOut,
						in: Power4.easeIn,
						inOut: Power1.easeInOut
					},
		elastic: 	Elastic.easeOut.config(1, 1),
		none: 		Power0.easeNone,
		back: 		{
						out: function(x) { return Back.easeOut.config(x); 	},
						in: function(x) { return Back.easeIn.config(x);		}
					},
		rough: 		RoughEase.ease.config({
						points: 100,
						strength: 4,
						clamp: true,
						randomize: true
					})
	};

	/* Shortcut to select all elements */
	var selectAll = function(element) {
		return [].slice.call(document.querySelectorAll(element));
	};

	var select = function(element) {
		return document.querySelector(element);
	};

	return {
		scrollTo: scrollTo,
		selectAll: selectAll,
		select: select,
		device: device,
		ease: ease
	};
});



