/* global define */

define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'../utils',
	'../animations',
	'ScrollMagicAnimation'

], function brandAlignment(
	ScrollMagic,
	TweenMax,
	TimelineMax,
	utils,
	animations
	) {

	'use strict';

	var selectAll = utils.selectAll;
	var ease = utils.ease;
	var device = utils.device;

	var bodyController = animations.bodyController;

	var boxes = selectAll('.brand-alignment .box');

	var _showArtFaces = function() {
		boxes.forEach(function(box, i) {
			var delay = i * 50;
			setTimeout(function() {
				box.classList.toggle('show-art-faces');
			}, delay);
		});
	};

	var _boxesSetUp = function(box) {
		box.classList.add('no-hover');
		TweenMax.set(box, { opacity: 0 });
	};

	var _boxesComplete = function() {
		boxes.forEach(function(box) {
			box.classList.remove('no-hover');
		});
	};

	var _addEvents = function() {
		boxes.forEach(function(box) {
			box.addEventListener('click', _showArtFaces, false);
		});
	};

	var animate = function() {

		boxes.forEach(function(box) {

			_boxesSetUp(box);

			var _boxesAppear = new TimelineMax()
				.staggerFromTo(boxes, 1, {
					opacity: 0,
					y: '15%'
				}, {
					opacity: 1,
					y: '0%',
					ease: ease.elastic
				}, 0.10, 0, _boxesComplete)
				.pause();

			var _boxesScene = new ScrollMagic.Scene({
				triggerElement: '.brand-alignment',
				duration: '300%',
				triggerHook: 0.5
			});

			_boxesScene
				.on('enter leave', function(e) {
					return e.type === 'enter' ? _boxesAppear.play() : _boxesAppear.reverse();
				})
				.addTo(bodyController);

		});
	};

	var init = function() {
		if (device.desktop) {
			animate();
		}
		_addEvents();
	}

	return {
		init: init
	};
});