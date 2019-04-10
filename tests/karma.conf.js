// Karma configuration
// Generated on 2019-04-09

var webpackConfig = require("../webpack.config");
webpackConfig.devtool = "inline-source-map";

module.exports = function(config) {
  "use strict";

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: "..",

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: ["jasmine"],

    preprocessors: {
      "dist/metabundle.js": ["webpack", "sourcemap"] // *.tsx for React Jsx
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },

    reporters: ["progress"],

    // list of files / patterns to load in the browser
    files: ["dist/metabundle.js"],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    customLaunchers: {
      ChromeDebugging: {
        base: "Chrome",
        flags: ["--remote-debugging-port=9333"]
      }
    },
    browsers: ["ChromeDebugging"],

    // Which plugins to enable
    plugins: [
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-sourcemap-loader",
      "karma-webpack"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
