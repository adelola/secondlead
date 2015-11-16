// Karma configuration
// Generated on Tue Nov 10 2015 16:02:58 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        APPLICATION_SPEC,
        'app/assets/javascripts/angular/**/*.html',
        'app/assets/javascripts/angular/**/*.js',
        'app/assets/javascripts/angular/*.js',
        'vendor/assets/javascripts/angular/angular.min.js',
        'vendor/assets/javascripts/angular-mocks/angular-mocks.js',
        'vendor/assets/javascripts/angular-gridster/dist/angular-gridster.min.js',
        'vendor/assets/javascripts/angular-ui-router/release/angular-ui-router.min.js',
        'vendor/assets/javascripts/angular-ui-select/dist/select.min.js',
        'spec/javascripts/**/*.spec.js'
    ],

    ngHtml2JsPreprocessor: {
        stripPrefix: 'app/assets/javascripts/angular/',
        
        //stripSufix: '.ext',

        // setting this option will create only a single module that contains templates
        // from all the files, so you can load them all with module('foo')
        moduleName: 'myAppTemplates'
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    // plugins : [
    // 'karma',
    //   'karma-jasmine',
    //   'karma-chrome-launcher', 
    //   'karma-coverage',
    //   'jasmine-core',
    //   'karma-ng-html2js-preprocessor'    
    // ]

  })
}