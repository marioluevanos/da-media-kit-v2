/* global define */

define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'../utils',
	'../animations',
	'ScrollMagicAnimation'

], function influencers(
	ScrollMagic,
	TweenMax,
	TimelineMax,
	utils,
	animations
	) {

	'use strict';

	/* Main Controller */
	var bodyController = animations.bodyController;

	/* Importing utility stuff */
	var ease = utils.ease;
	var selectAll = utils.selectAll;
	var select = utils.select;
	var device = utils.device;

	/* Section Elements */
	var profCard = selectAll('.prof-card');
	var profInfluencers = select('.influencers .prof-influencers');

	/* Return the an animation timeline for each text in profiles */
	var profTextTL = selectAll('.prof-card').map(function(card) {
		if (device.desktop) {
			var animationElem = [].slice.call(card.querySelectorAll('[data-prof-anim]'));
			return new TimelineMax({ paused: true })
			.staggerFromTo(animationElem, 0.35, {
				autoAlpha: 0,
				y: '50%',
				ease: ease.power.in
			}, {
				autoAlpha: 1,
				y: '0%',
				ease: ease.power.out
			}, 0.05, 0);
		}
	});

	/* Profile Card Stack */
	var profCardAni_Start = {
		y: '150%',
		ease: ease.none
	};

	var profCardAni_End = {
		y: '0%',
		ease: ease.none
	};

	var profCardExit = {
		opacity: 0,
		y: '-25%',
		ease: ease.none
	};

	var profCardExit_StartTime = 0.4;

	var animateText = function(index) {
		return profTextTL[index].play();
	};

	var profileTL = function() {
		var profCardAnimTL = new TimelineMax()

		.call(animateText.bind(null, 0), [], this, 'dataOne')

		.fromTo(profCard[1], 1, profCardAni_Start, profCardAni_End, 'slideTwo')
		.to(profCard[0], profCardExit_StartTime, profCardExit, 'slideTwo+=0.5')

		.call(animateText.bind(null, 1), [], this, 'dataTwo')

		.fromTo(profCard[2], 1, profCardAni_Start, profCardAni_End, 'slideThree')
		.to(profCard[1], profCardExit_StartTime, profCardExit, 'slideThree+=0.5')

		.call(animateText.bind(null, 2), [], this, 'dataThree')

		.fromTo(profCard[3], 1, profCardAni_Start, profCardAni_End, 'slideFour')
		.to(profCard[2], profCardExit_StartTime, profCardExit, 'slideFour+=0.5')

		.call(animateText.bind(null, 3), [], this, 'dataFour')
		.to(profCard[3], 0.5, { x: '0%' }, 'slideExit');

		var profCardScene = new ScrollMagic.Scene({
			triggerElement: profInfluencers,
			duration: '300%',
			triggerHook: 0
		});

		profCardScene
			.setTween(profCardAnimTL)
			.setPin(profInfluencers)
			.addTo(bodyController);

		return profCardAnimTL;
	};

	var init = function() {
		if (device.desktop) {
			profileTL();
		}
	};

	return {
		init: init
	};


});