##Instructions

- 1 make app folder
  ** mkdir [folder name]
  ** cd [folder name]
- 2 install yeoman karma generator
  \*\* npm install -g yo generator-karma
- 3 run generator
  ** yo karma --browsers "Chrome" --app-files "src/**/_.js" --test-files "test/\*\*/_.js" --base-path ".."
- 4 open vs code
  \*\* code . test/karma.conf.js
- 5 Go back to your Karma’s configuration file `test/karma.conf.js` and add:

```customLaunchers: {
    ChromeDebugging: {
      base: 'Chrome',
      flags: [ '--remote-debugging-port=9333' ]
    }
  },
```

- 6 Now change `browsers` property value to:

```
 browsers: [
      'ChromeDebugging'
    ],
```

- 7 Press `f1` to open cmd tollbox and type `> Debug: Open launch.json` and press `Enter`.
  \*\* In launch.json override it to look like this:

```
{
  "version": "0.2.0",
    "configurations": [
      {
        "name": "Launch index.html",
            "type": "chrome",
            "request": "launch",
            //"reAttach": true,
            "file": "${workspaceFolder}/index.html",
            "port": 9333,
      }
    ]
}
```

- 8 install the following packages

```
npm install -D typescript karma-cli karma-sourcemap-loader webpack karma-webpack babel/core@^7.0.0 babel-loader@8.0.0 karma-chrome-launcher
```
- 9 Create webpack.config.js file

```
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        loader:"babel-loader"
      }
    ]
  },
  mode: "development"
};
```
- 10 create entry point for webpack in dist folder; call it metabundle.js
```
var context = require.context('.', true, /.+\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
```

- 11 Configure karma.conf.js by adding

```
var webpackConfig = require("../webpack.config");
webpackConfig.devtool = "inline-source-map";
//...
module.exports = function(config) {
    config.set({
        //...
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
    //files: ["dist/src/**/*.js", "dist/tests/**/*.js"],
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
        //...
    });
};
```
follow tutorial here on configuring webpack to work with karma: http://bit.ly/2WW0sB6

- 12 Make sure the path to the chrome binary is set in an environment variable
  \*\* Add to ~/.bashrc

```export CHROME_BIN = '/usr/bin/chromium-browser
    export PATH=$PATH:$CHROME_BIN
```

\*\* Save and on the terminal do

```
. ~/.bashrc
```
