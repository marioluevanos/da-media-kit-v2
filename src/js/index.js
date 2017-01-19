/* global requirejs */

requirejs.config({
	baseUrl: 'src/js/',
	paths: {
		'QueryLoader2': 			'./libs/queryloader2.min',
		'ScrollMagic': 				'./libs/ScrollMagic',
		'TweenMax': 				'./libs/GSAP.TweenMax',
		'TimelineMax': 				'./libs/GSAP.TweenMax',
		'ScrollToPlugin':	 		'./libs/GSAP.ScrollToPlugin',
		'ScrollMagicAnimation': 	'./libs/ScrollMagic.animation.gsap'
	},
	urlArgs: 'v=' + (new Date()).getTime()
});

requirejs([
	'./typeCrop',
	'./utils',
	'./nav',
	'./animations',
	'./sections/welcome',
	'./sections/stats',
	'./sections/brand-alignment',
	'./sections/brand-partnerships',
	'./sections/influencers',
	'./sections/about-us-v2',
	'./sections/contact',
	'QueryLoader2'
],
function index(
	typeCrop,
	utils,
	nav,
	animations,
	welcome,
	stats,
	brandAlignment,
	brandPartnerships,
	influencers,
	aboutUs,
	contact,
	QueryLoader2
	) {

	'use strict';

	/*
		Using typeCrop's "Promise" chain to piggy back
		and start off to initialize
	*/
	var _init = typeCrop('.crop');

	var _documentLoaded = function() {
		document.body.classList.add('loaded');
		window.scrollTo(0, 0);
	};

	var loaderOnComplete = function() {

		/* Begin the chain */
		_init
		.then(animations.init)
		.then(welcome.init)
		.then(stats.init)
		.then(brandAlignment.init)
		.then(brandPartnerships.init)
		.then(influencers.init)
		.then(animations.removeDataAttrs)
		.then(aboutUs.init)
		.then(contact.init)
		.then(nav.init)
		.then(setTimeout(_documentLoaded, 150));
	};

	return new QueryLoader2(document.body, {
		barColor 		: '#D4F5DE',
		backgroundColor : '#F2F2F2',
		percentage 		: true,
		barHeight 		: 3,
		minimumTime 	: 1000,
		fadeOutTime 	: 150,
		onComplete 		: loaderOnComplete
	});

});

