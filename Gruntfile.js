module.exports = function (grunt) {
  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.initConfig({
    sass: {
      options: {sourcemap: 'none', style: 'compressed'},
      files: {expand: true, cwd: 'sass', src: '**/*.sass', dest: 'build/css', ext: '.css'}
    },
    bake: {
      build: {
        options: {
          transforms: {
            evaluate: function( string ) {
              return string.slice(1, -1).split("'").join("").split(",");
            }
          }
        },
        expand: true, cwd: 'views', src: ['*.html', 'journal/*.html'], dest: 'build'}
    },
    bowercopy: {
      fonts: {options: {destPrefix: 'build/fonts/vendor'}, files: {'bootstrap': 'bootstrap-sass/assets/fonts/bootstrap', 'font-awesome': 'font-awesome/fonts', 'slick-carousel': 'slick-carousel/slick/fonts'}},
      scripts: {options: {destPrefix: 'build/js/vendor'}, files: {'jquery.js': 'jquery/dist/jquery.min.js', 'bootstrap.js': 'bootstrap-sass/assets/javascripts/bootstrap.min.js', 'slick.js': 'slick-carousel/slick/slick.js'}},
      assets: {options: {destPrefix: 'build/assets/vendor'}, files: {'slick-carousel': 'slick-carousel/slick/ajax-loader.gif'}}
    },
    copy: {
      assets: {expand: true, cwd: 'assets', src: '**/*', dest: 'build/assets', filter: 'isFile'},
      prod: {expand: true, cwd: 'build', src: '**/*', dest: '../gh-pages'}
    },
    clean: {
      styles: {src: 'build/css/**/*'},
      assets: {src: 'build/assets/**/*'},
      scripts: {src: 'build/js/**/*'},
      bake: {src: 'build/**/*.html'},
      bower: {src: ['build/fonts/vendor/**/*', 'build/js/vendor/**/*.js']},
      build: {src: 'build/**/*'},
      prod: {options: {force: true}, src: ['!../gh-pages/.gitignore', '!../gh-pages/README.md', '../gh-pages/**/*']}
    },
    uglify: {
      files: {expand: true, cwd: 'scripts', src: '**/*.js', dest: 'build/js'}
    },
    replace: {
      build: {src: ["build/*.html"], overwrite: true, replacements: [{from: '<a href="/" class="brand">', to: '<a href="/insight" class="brand">'}]}
    },
    watch: {
      styles: {files: 'sass/**/*.sass', tasks: ['clean:styles', 'sass']},
      assets: {files: 'assets/**/*', tasks: ['clean:assets', 'bowercopy:assets', 'copy:assets']},
      scripts: {files: 'scripts/**/*.js', tasks: ['clean:scripts', 'bowercopy:scripts', 'uglify']},
      bake: {files: 'views/**/*.html', tasks: ['clean:bake', 'bake']}
    }
  });
  grunt.registerTask('default', ['clean:build', 'bowercopy', 'copy:assets', 'uglify', 'sass', 'bake']);
  grunt.registerTask('deploy', ['clean:build', 'bowercopy', 'copy:assets', 'uglify', 'sass', 'bake', 'replace', 'clean:prod', 'copy:prod']);
};
