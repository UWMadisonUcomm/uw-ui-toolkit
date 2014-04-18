module.exports = function(grunt){

  // Bootstrap javascript files
  var bootstrap_js = [
    'src/js/bootstrap/transition.js',
    'src/js/bootstrap/alert.js',
    'src/js/bootstrap/button.js',
    'src/js/bootstrap/carousel.js',
    'src/js/bootstrap/collapse.js',
    'src/js/bootstrap/dropdown.js',
    'src/js/bootstrap/modal.js',
    'src/js/bootstrap/tooltip.js',
    'src/js/bootstrap/popover.js',
    'src/js/bootstrap/scrollspy.js',
    'src/js/bootstrap/tab.js',
    'src/js/bootstrap/affix.js'
  ];

  // Load configuration in with nconf, allowing config.json overrides.
  // https://github.com/flatiron/nconf
  var nconf = require('nconf').file({ file:'config.json' }).env();

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    conf: nconf,
    copy: {
      img: {
        files: [{src: 'src/img/*', dest: 'dist/img/', flatten: true, expand: true}]
      },

      /**
       * copy:bootstrap is used to upgrade bootstrap in
       * src/less/bootstrap, and should not be run routinely
       * First, upgrade the tag ref for the bootstrap
       * devDependency in package.json.
       * Then, npm install, grunt copy:bootstrap.
       */
      bootstrap: {
        files: [
          {src: 'bower_components/bootstrap/less/*.less',dest: 'src/less/bootstrap/', flatten: true, expand: true},
          {src: 'bower_components/bootstrap/fonts/*', dest: 'dist/fonts/', flatten: true, expand: true},
          {src: 'bower_components/bootstrap/js/*.js', dest: 'src/js/bootstrap/', flatten: true, expand: true}
        ]
      }
    },

    less: {
      toolkit: {
        files: { 'dist/css/uw-ui-toolkit.css': ["src/less/uw-ui-toolkit.less"] }
      },
      min: {
        options: {
          compress: true
        },
        files: { 'dist/css/uw-ui-toolkit.min.css': ["src/less/uw-ui-toolkit.less"] }
      }
    },
    uglify: {
      toolkit: {
        options: {
          beautify: true,
          mangle: false,
          preserveComments: true
        },
        files: {
          "dist/js/uw-ui-toolkit.js": bootstrap_js
        }
      },
      min: {
        options: {
          beautify: false,
          mangle: true
        },
        files: {
          "dist/js/uw-ui-toolkit.min.js": bootstrap_js
        }
      }
    },
    aws_s3: {
      options: {
        accessKeyId: "<%= conf.get('AWS_ACCESS_KEY_ID') %>",
        secretAccessKey: "<%= conf.get('AWS_SECRET_ACCESS_KEY') %>",
        bucket: "<%= conf.get('BUCKET') || 'uw-ui-toolkit' %>",
        region: 'us-east-1',
        differential: true
      },
      snapshot: {
        files: [
          { cwd: 'dist', src: ['**'], dest: 'snapshot', expand: true },
          { cwd: 'build', src: 'uw-ui-toolkit-snapshot.zip', dest: 'downloads/', expand: true }
        ]
      },
      release: {
        options: {
          differential: false,
          params: {
            CacheControl: 'public, max-age=2000'
          }
        },
        files: [
          { cwd: 'dist', src: ['**'], dest: '<%= pkg.version %>', expand: true },
          { cwd: 'build', src: 'uw-ui-toolkit-<%=pkg.version %>.zip', dest: 'downloads/', expand: true }
        ]
      }
    },
    compress: {
      snapshot_zip: {
        options: {
          archive: 'build/uw-ui-toolkit-snapshot.zip'
        },
        files: [
          {src:['**'], cwd: 'dist',expand: true}
        ]
      },
      release_zip: {
        options: {
          archive: 'build/uw-ui-toolkit-<%=pkg.version %>.zip'
        },
        files: [
          {src:['**'], cwd: 'dist',expand: true}
        ]
      },
    },
    watch: {
      all: {
        files: ['src/**/*.less'],
        tasks: ['less'],
        options: {
          livereload:true
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Register tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['less','copy:img','uglify']);

  // Deploy builds to S3
  grunt.registerTask('snapshot', ['build', 'compress:snapshot_zip', 'aws_s3:snapshot']);
  grunt.registerTask('release', ['build', 'compress:release_zip', 'aws_s3:release']);
}
