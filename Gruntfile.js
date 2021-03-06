module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		mochaTest: {
			options: {
				timeout: 3000,
				ignoreLeaks: false,
				reporter: 'spec'
			},
			src: ['test/*_test.js']
		},
		jshint: {
			options: {
				camelcase: true,
				curly: true,
				eqeqeq: true,
				immed: true,
				indent: 4,
				latedef: 'nofunc',
				newcap: true,
				noarg: true,
				nonew: true,
				undef: true,
				unused: true,
				trailing: true,
				loopfunc: true,
				proto: true,
				node: true,
				'-W068': true  // Wrapping non-IIFE function literals in parens is unnecessary
			},
			tests: {
				options: {
					expr: true,
					unused: false,
					globals: {
						describe: false,
						it: false,
						before: false,
						beforeEach: false,
						after: false,
						afterEach: false
					}
				},
				src: ['test/*_test.js']
			},
			src: ['tiapp.xml.js']
		},
		jsdoc: {
			dist: {
				src: ['tiapp.xml.js'],
				options: {
					destination: 'doc',
					configure: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template/jsdoc.conf.json',
					template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template'
				}
			}
		}
	});

	// Load grunt plugins for modules
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsdoc');

	// Register tasks
	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('default', ['jshint', 'mochaTest', 'jsdoc']);

};