/* global define */

define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'./utils',
	'ScrollMagicAnimation'

], function animations(
	ScrollMagic,
	TweenMax,
	TimelineMax,
	utils
	) {

	'use strict';

	/* Main controller using the body element for scroll */
	var bodyController = new ScrollMagic.Controller();

	/* Importing utility stuff */
	var ease = utils.ease;
	var minWidth = utils.minWidth;
	var selectAll = utils.selectAll;
	var select = utils.select;

	/* Wrap scenes/sections in an object just to organize */
	var animateGenericText = function() {
		selectAll('[data-txt]').forEach(function(val) {
			if (window.outerWidth > 767) {
				return new ScrollMagic.Scene({
					triggerElement: val,
					duration: '200%',
					triggerHook: 0.85
				})
				.setClassToggle(val, 'active')
				.addTo(bodyController);
			}
		});
	};

	var removeDataAttrs = function() {
		var removeAttr = function(attr) {
			selectAll('[' + attr + ']').forEach(function(val) {
				val.removeAttribute(attr);
			});
		};
		if (window.outerWidth < 768) {
			removeAttr('data-txt');
		}
	};

	var init = function() {
		animateGenericText();
	};

	return {
		init: init,
		bodyController: bodyController
	};
});