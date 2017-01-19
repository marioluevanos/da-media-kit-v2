/* global define */

define([
	'../utils',

], function contact(
	utils
	) {

	'use strict';

	var select = utils.select;

	var updateCurrentYear = function() {
		var date = new Date();
		var year = date.getFullYear();
		var footerCurrentYear = select('.current-year');
		if ( !footerCurrentYear ) {
			return
		} else {
			footerCurrentYear.innerHTML = year.toString();
		}
	};

	var init = function() {
		updateCurrentYear();
	};

	return {
		init: init
	};

});