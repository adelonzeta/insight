module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        sass: {
            bluid: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.sass'],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },
        clean: {
            staging: {
                options: {
                  force: true
                },
                src: [
                  "!.gitignore",
                  "../gh-pages/**/*"
                ]
            },
            prod: {
              options: {
                force: true
              },
              src: [
                "../adelonzeta.github.io/**/*"
              ]
            },
            bower: {
                src: [
                    "public/fonts/vendor/**/*",
                    "public/js/vendor/**/*"
                ]
            }
        },
        bowercopy: {
            javascripts: {
                options: {
                    destPrefix: "public/js"
                },
                files: {
                    "vendor/jquery.js": "jquery/dist/jquery.js",
                    "vendor/bootstrap.js": "bootstrap-sass/assets/javascripts/bootstrap.js"
                }
            },
            fonts: {
                options: {
                    destPrefix: "public/fonts"
                },
                files: {
                    "vendor/bootstrap": "bootstrap-sass/assets/fonts/bootstrap",
                    "vendor/font-awesome": "font-awesome/fonts"
                }
            }
        },
        watch: {
            styles: {
                files: ['sass/**/*.sass'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            staging: {
                expand: true,
                cwd: 'public',
                src: ['**'],
                dest: '../gh-pages',
                filter: 'isFile'
            },
            prod: {
              expand: true,
              cwd: '../gh-pages',
              src: ['**'],
              dest: '../adelonzeta.github.io'
            }
        },
        htmlmin: {
          staging: {
            options: {
              removeComments: true,
              collapseWhitespace: true,
              collapseBooleanAttributes: true,
              removeAttributeQuotes: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true
            },
            files: {
              "../gh-pages/index.html": "../gh-pages/index.html"
            }
          }
        },
        uglify: {
          staging: {
            files: [{
              expand: true,
              cwd: "../gh-pages/js",
              src: "**/*.js",
              dest: "../gh-pages/js"
            }]
          }
        }
    });
    grunt.registerTask('default', [
        'clean:bower',
        'bowercopy',
        'sass'
    ]);
    grunt.registerTask('staging', [
        'clean:bower',
        'bowercopy',
        'sass',
        'clean:staging',
        'copy:staging',
        'htmlmin:staging',
        'uglify:staging'
    ]);
    grunt.registerTask('deploy', [
        'clean:bower',
        'bowercopy',
        'sass',
        'clean:staging',
        'copy:staging',
        'htmlmin:staging',
        'uglify:staging',
        'clean:prod',
        'copy:prod'
    ]);
};
