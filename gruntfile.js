module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    ts: {
      default: {
        tsconfig: true
      },
      options: {
        fast: "never"
      }
    },
    karma: {
      unit: {
        configFile: "tests/karma.conf.js",
        background: true,
        singleRun: false
      }
    },
    watch: {
      //run unit tests with karma (server needs to be already running)
      karma: {
        files: ['src/**/*.ts', 'tests/**/*.ts','dist/metabundle.js'],
        tasks: ["ts","karma:unit:run"] //NOTE the :run flag
      }
    }
  });
  grunt.loadNpmTasks("grunt-karma");
  grunt.registerTask('default', ['karma']);
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["watch"]);
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};
