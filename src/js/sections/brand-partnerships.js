/* global define*/

define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'../utils',
	'../animations',
	'ScrollMagicAnimation'

], function brandPartnerships(
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

	var _caseStudies = selectAll('.case');
	var _siteLogoType = select('#logo-type .logo-type');

	/*
		This helps play the video when it's in view,
		otherwise, it's paused
	*/
	var video = function() {
		selectAll('video').forEach(function(video) {

			/* Pause the videos when this initializes */
			video.pause();
			var playPauseScene = new ScrollMagic.Scene({
				triggerElement: video,
				duration: '100%',
				triggerHook: 0.5
			});

			playPauseScene.on('progress', function(e) {
				var inView =
					e.state === 'DURING' && e.scrollDirection === 'FORWARD' ||
					e.state === 'DURING' && e.scrollDirection === 'REVERSE';
				var play = function() {
					if (video.paused) {
						video.play();
					}
				};

				if (inView) {
					play();
				}
				else {
					video.pause();
				}
			});
			playPauseScene.addTo(bodyController);
		});
	};


	var caseStudyAnimations = function() {

		_caseStudies.forEach(function(val) {

			var caseVideo = val.querySelector('.case-hero video');
			var caseFigure = val.querySelector('.case-bg-image figure');
			var caseBg = val.querySelector('.case-bg');
			var caseTitle = val.querySelector('.case-hero .case-title');
			var caseMain = val.querySelector('.case-main');

			var caseAnimationTL = new TimelineMax()
				.fromTo(caseVideo, 1.5, {
					y: '-50%',
					ease: ease.none
				}, {
					y: '-60%',
					ease: ease.none
				}, 0)
				.fromTo(caseVideo, 1, {
					opacity: 1,
					ease: ease.none
				}, {
					opacity: 0.6,
					ease: ease.none
				}, 0)
				.fromTo(caseTitle, 1.25, {
					scale: 1,
					ease: ease.none
				}, {
					scale: 0.9,
					ease: ease.none
				}, 0)
				.fromTo(caseMain, 1, {
					y: '100%',
					ease: ease.none
				}, {
					y: '0%',
					ease: ease.none
				}, 0.75)
				.fromTo(caseBg, 0.75, {
					x: '-25%',
					ease: ease.none
				}, {
					x: '-35%',
					ease: ease.none
				}, 0.25)
				.fromTo(caseFigure, 0.75, {
					x: '10%',
					ease: ease.none
				}, {
					x: '30%',
					ease: ease.none
				}, 0.25);


			/* Main Case Study Scene */
			var caseScene = new ScrollMagic.Scene({
				triggerElement: val,
				duration: '100%',
				triggerHook: 0
			});

			caseScene
				.setPin(val)
				.setTween(caseAnimationTL)
				.addTo(bodyController);

			hideDALogo(val);

		}.bind(this));
	};

	/*
		Hide the DA logo in the lower right when there is another
		DA logo in the scene
	*/
	var hideDALogo = function(triggerElement) {
		var brandIntLogoTL = new TimelineMax({ paused: true })
			.fromTo(_siteLogoType, 0.15, {
				autoAlpha: 1,
				ease: ease.none
			}, {
				autoAlpha: 0,
				ease: ease.none
			});

		var brandIntLogoScene = new ScrollMagic.Scene({
			triggerElement: triggerElement,
			duration: '200%',
			triggerHook: 1
		});

		brandIntLogoScene.on('enter leave', function(e) {
			return (e.type === 'enter') ? brandIntLogoTL.play() : brandIntLogoTL.reverse();
		})
		.addTo(bodyController);
	};

	var init = function() {
		video();
		if (device.desktop) {
			caseStudyAnimations();
		}
	};

	return {
		init: init
	};

});