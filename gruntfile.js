module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: [
          'src/javascript/vendor/jquery-1.11.2.js',
          'src/javascript/main.js',
          'src/javascript/analytics.js'
        ],
        dest: 'public/js/scripts.min.js'
      }
    },
    less: {
      build: {
        src: ['src/less/main.less'],
        dest: 'public/css/styles.css'
      }
    },
    watch: {
      scripts: {
        files: ['src/javascript/*.js'],
        tasks: ['uglify:build'],
        options: {
          livereload: true,
        }
      },
      styles: {
        files: ['src/less/*.less'],
        tasks: ['less:build'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: ['public/**/*.{html,php}'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 'uglify', 'less', 'watch']);
 
};
