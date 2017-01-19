/* global define */

define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'../utils',
	'../animations',
	'ScrollMagicAnimation'

], function stats(
	ScrollMagic,
	TweenMax,
	TimelineMax,
	utils,
	animations
	) {

	'use strict';

	var selectAll = utils.selectAll;
	var ease = utils.ease;
	var bodyController = animations.bodyController;
	var _statScenes = {};

	/* Audience Data */
	_statScenes.audience = function audience() {

		var audience_box = selectAll('.stat');
		var audience_text = selectAll('[data-anim="audience"]');

		/* Create timeline for audience stats */
		var audienceTL = new TimelineMax({ paused: true })
			.staggerFromTo(audience_box, 1, {
				y: '105%',
				ease: ease.power.in
			}, {
				y: '0%',
				ease: ease.power.out
			}, 0.1, 0)
			.staggerFromTo(audience_text, 1, {
				y: '105%',
				autoAlpha: 0,
				ease: ease.power.in
			}, {
				y: '0%',
				autoAlpha: 1,
				ease: ease.power.out
			}, 0.05, 0.2);

		return new ScrollMagic.Scene({
			triggerElement: '.stat-audience.stat-module',
			duration: '300%',
			triggerHook: 0.75
		})
		.on('enter leave', function(e) {
			return (e.type === 'enter') ? audienceTL.timeScale(1).play() : audienceTL.timeScale(2).reverse();
		})
		.addTo(bodyController);

	};

	/* Audience Index Data */
	_statScenes.audienceIndex = function audienceIndex() {

		var audienceIndex_bg = selectAll('.stat-audience-index .bg');
		var audienceIndex_values = selectAll('.stat-audience-index .range .value');
		var audienceIndex_text = selectAll('[data-anim="audience-index"]');

		var audienceIndexTL = new TimelineMax({ paused: true })
			.staggerFrom(audienceIndex_bg, 1, {
				width: '0%',
				scaleX: 0,
				ease: ease.power.out
			}, 0.1, 0)
			.staggerFrom(audienceIndex_values, 1, {
				width: '0%',
				scaleX: 0,
				ease: ease.power.out
			}, 0.1, 0.3)
			.staggerFromTo(audienceIndex_text, 1, {
				y: '105%',
				autoAlpha: 0,
				ease: ease.power.in
			}, {
				y: '0%',
				autoAlpha: 1,
				ease: ease.power.out
			}, 0.05, 0.3);

		var audienceIndexScene = new ScrollMagic.Scene({
			triggerElement: '.stat-audience-index.stat-module',
			duration: '300%',
			triggerHook: 0.75
		})
		.on('enter leave', function(e) {
			return (e.type === 'enter') ? audienceIndexTL.timeScale(1).play() : audienceIndexTL.timeScale(2).reverse();
		});

		audienceIndexScene
			.setClassToggle('.stat-audience-index .range', 'active')
			.addTo(bodyController);

	};

	_statScenes.engagement = function engagement() {

		var engagement_anim = selectAll('[data-anim="engagement"]');

		var enagementTL = new TimelineMax({ paused: true })
			.staggerFromTo(engagement_anim, 1, {
				y: '105%',
				autoAlpha: 0,
				ease: ease.power.in
			}, {
				y: '0%',
				autoAlpha: 1,
				ease: ease.power.out
			}, 0.1, 0);

		var engagementScene = new ScrollMagic.Scene({
			triggerElement: '.stat-engagement.stat-module',
			duration: '300%',
			triggerHook: 0.75
		})
		.on('enter leave', function(e) {
			return (e.type === 'enter') ? enagementTL.timeScale(1).play() : enagementTL.timeScale(2).reverse();
		});

		engagementScene.addTo(bodyController);
	};

	_statScenes.social = function social() {

		var social_icons = selectAll('.stat-social-presence .icon');
		var social_box = selectAll('.stat-social-presence .data');

		var socialTL = new TimelineMax({ paused: true })
			.staggerFrom(social_icons, 1, {
				opacity: 0,
				y: '100%',
				ease: ease.power.out
			}, 0.15, 0)
			.staggerFrom(social_box, 1, {
				opacity: 0,
				y: '100%',
				ease: ease.power.out
			}, 0.15, 0.15);

		var sociaStatScene = new ScrollMagic.Scene({
			triggerElement: '.stat-social-presence.stat-module',
			duration: '600%',
			triggerHook: 0.75
		});

		sociaStatScene.on('enter leave', function(e) {
				return (e.type === 'enter') ? socialTL.timeScale(1).play() : socialTL.timeScale(2).reverse();
			})
			.addTo(bodyController);
	};

	_statScenes.logoWall = function logoWall() {

		var logos = selectAll('.brands-logo');

		var brandLogosTL = new TimelineMax({ paused: true })
			.staggerFromTo(logos, 1, {
				y: '100%'
			}, {
				y: '0%',
				ease: ease.power.out
			}, 0.025);

		return new ScrollMagic.Scene({
			triggerElement: '.stat-brands.stat-module',
			duration: '300%',
			triggerHook: 0.75
		})
		.on('enter leave', function(e) {
			return (e.type === 'enter') ? brandLogosTL.timeScale(1).play() : brandLogosTL.timeScale(2).reverse();
		})
		.addTo(bodyController);
	};

	var init = function init() {
		if (window.outerWidth > 768) {
			for ( var fn in _statScenes) {
				if (typeof _statScenes[fn] === 'function') {
					_statScenes[fn]();
				}
			}
		}
	};

	return {
		init: init
	};

});