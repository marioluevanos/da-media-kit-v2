/* global	define */
define([

	'ScrollMagic',
	'TweenMax',
	'TimelineMax',
	'./utils',
	'./animations',
	'ScrollMagicAnimation',

], function nav(
	ScrollMagic,
	TweenMax,
	TimelineMax,
	utils,
	animations
	) {

	'use strict';

	/* Main animation controller */
	var bodyController = animations.bodyController;

	/* Import some utilities */
	var select = utils.select;
	var selectAll = utils.selectAll;
	var scrollTo = utils.scrollTo;

	var _scrollToDuration = 2.25;

	/* All sections with this attribute will get a nav item */
	var _sections = selectAll('[data-nav]');

	/* Make a list of the nav items */
	var _menuList = _sections.map(function(section) {
		return section.getAttribute('data-nav');
	});

	/* Add ids to the _sections */
	var _addSectionIDs = function() {
		_sections.forEach(function(sec) {
			var id = sec.attributes['data-nav'].value.toLowerCase().replace(/[ ]/g, '-');
			sec.setAttribute('id', id);
		});
	};

	/* Create a html anchor links  */
	var _createHTMLAnchors = function() {
		return _menuList.map(function(id, i) {

			var anchor = document.createElement('a');
			var text = id.toLowerCase().replace(/[ ]/g, '-');
			var className = (i !== (_menuList.length - 1)) ? 'nav-link' : 'contact-link';

			/* Add current class the first item */
			if (i === 0) {
				anchor.classList.add('current');
			}

			anchor.classList.add(className);
			anchor.setAttribute('href', '#' + text);
			anchor.innerHTML = _menuList[i];

			/* Return HTML anchor element to pass to the next function in the chain */
			return anchor;
		});
	};


	/* Append the links */
	var	_appendHTMLAnchors = function(anchors) {
		anchors.forEach(function(anchor) {
			select('#nav .nav-items').appendChild(anchor);
		});
		return anchors;
	};

	var _scrollToSection = function(i, event) {
		event.preventDefault();
		var section = select('[data-nav="' + _menuList[i] + '"]');
		var yPos = section.offsetTop;
		scrollTo(yPos, _scrollToDuration);
	};

	var	_addEvents = function(anchors) {
		anchors.forEach(function(anchor, i) {
			anchor.addEventListener('click', _scrollToSection.bind(null, i));
		});
	};

	/*
		Selects all the sections and and adss a className to the #media-kit DIV.
		Helps to add "specific" CSS to the section
	*/
	var _addSectionClassName = function() {

		var sections = selectAll('#media-kit > section');

		sections.forEach(function(sec) {
			var duration = sec.clientHeight;
			var sectionClassScene = new ScrollMagic.Scene({
				triggerElement: sec,
				duration: duration,
				triggerHook: 0.5
			});

			sectionClassScene
				.setClassToggle('#media-kit', sec.id)
				.addTo(bodyController);

		}.bind(this));
	};

	var _chain = function() {
		return new Promise(function(resolve) {
			resolve();
		});
	};

	var init = function() {
		_chain()
		.then(_addSectionIDs)
		.then(_createHTMLAnchors)
		.then(_appendHTMLAnchors)
		.then(_addEvents)
		.then(_addSectionClassName);
	};

	return {
		init: init
	};


});