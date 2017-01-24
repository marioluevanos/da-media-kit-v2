/* global define */

define([

	'ScrollMagic',

], function animations(ScrollMagic) {

	'use strict';

	/* Main controller using the body element for scroll */
	var bodyController = new ScrollMagic.Controller();

	return {
		bodyController: bodyController
	};
});