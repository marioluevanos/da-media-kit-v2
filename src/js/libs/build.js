({
	baseUrl: '../',
	mainConfigFile: '../index.js',
	paths: {
		'index': 					'./index',
		'animations': 				'./animations',
		'ScrollMagic': 				'./libs/ScrollMagic',
		'TweenMax': 				'./libs/GSAP.TweenMax',
		'TimelineMax': 				'./libs/GSAP.TweenMax',
		'ScrambleTextPlugin':		'./libs/GSAP.ScrambleTextPlugin',
		'ScrollToPlugin':	 		'./libs/GSAP.ScrollToPlugin',
		'ScrollMagicAnimation': 	'./libs/ScrollMagic.animation.gsap',
		'ScrollMagicAddIndicators': './libs/ScrollMagic.debug.addIndicators'
	},
	map: {
		'*': {
			'TimelineMax': 'TweenMax'
		}
	},
	preserveLicenseComments: false,
	name: 'index',
	out: '../../../index-min.js'
});