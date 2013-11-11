module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      img: {
        files: [{src: 'src/img/*', dest: 'dist/img/', flatten: true, expand: true}]
      },
      // Copy Bootstrap files from the vendor/bootstrap submodule
      // Run this when the submodule is updated
      bootstrap: {
        files: [
          {src: 'node_modules/bootstrap/less/*.less',dest: 'src/less/bootstrap/less/', flatten: true, expand: true},
          {src: 'node_modules/bootstrap/fonts/*', dest: 'dist/fonts/', flatten: true, expand: true}
        ]
      }
    },

    less: {
      all: {
        options: {
          yiucompress: true,
          compress: true
        },
        files: {
          'dist/css/uw-ui-toolkit.css': ["src/less/uw-ui-toolkit.less"]
        }
      }
    },

    watch: {
      all: {
        files: ['src/**/*.less'],
        tasks: ['default']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('copy-bootstrap', ['copy:bootstrap']);
  grunt.registerTask('build', ['less','copy:img']);
}
