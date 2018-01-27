module.exports = function(grunt) {
    'use strict';

    // vars e configs
    require('load-grunt-tasks')(grunt);

    // tarefas
    grunt.registerTask('default', ['clean:init', 'concat:css', 'concat:css-dependencies', 'concat:angular', 'concat:js-dependencies', 'babel', 'cssmin', 'uglify', 'copy', 'htmlmin', 'watch', 'clean:finish']);
    grunt.registerTask('prod', ['clean:init', 'concat:css', 'concat:css-dependencies', 'concat:angular', 'concat:js-dependencies', 'babel', 'cssmin', 'uglify', 'copy', 'htmlmin', 'clean:finish']);

    // config de ações a fazer
    grunt.initConfig({

        copy: {
          dist: {
            files: [
                {
                    expand: true, //habilita o cwd
                    cwd: './source/',
                    src: ['**/**/*.html', '**/**/*.json', '**/**/*.jpg', '**/**/*.svg'],
                    dest: 'www/'
                }
            ]
          }
        },

        //limpa pastas
        clean: {
            init: {
                cwd: './',
                src: ['www', 'temp']
            },
            finish: {
                cwd: './',
                src: ['temp']
            }
        },

        //concatena arquivos
        concat: {
            'css': {
                src: ['source/app/assets/css/app-global-style.css', 'source/app/**/*.css'],
                dest: 'temp/css/concat.css'
            },
            'css-dependencies': {
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.min.css'
                ],
                dest: 'temp/css/app-dependencies.css'
            },
            'angular': {
                src: [
                    'source/app/config/app.module.js',
                    'source/app/config/app.config.js',
                    'source/app/config/routes/**/*.js',
                    'source/app/shared/**/*.js',
                    'source/app/**/*.js',
                ],
                dest: 'temp/js/angular-concat.js'
            },
            'js-dependencies': {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-locale-pt-br/angular-locale_pt-br.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
                    'node_modules/@uirouter/angularjs/release/stateEvents.min.js',
                    'node_modules/ng-file-upload/dist/ng-file-upload.min.js',
                    'node_modules/angular-sanitize/angular-sanitize.min.js'
                ],
                dest: 'temp/js/app-dependencies.js'
            }
        },

        //minifica css concatenado
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
             files: {
                  'www/web-files/css/app.min.css': ['temp/css/concat.css'],
                  'www/web-files/css/app-dependencies.min.css': ['temp/css/app-dependencies.css']
               }
            }
        },

        uglify: {
            options: {
              mangle: true
            },

            dist: {
              files: {
                'www/web-files/js/app.min.js': ['temp/js/angular-concat-es6.js'],
                'www/web-files/js/app-dependencies.min.js': ['temp/js/app-dependencies.js']
              }
            },
        },

        babel: {
            options: {
                sourceMap: false,
                presets: ['env']
            },
            dist: {
                files: {
                    'temp/js/angular-concat-es6.js': 'temp/js/angular-concat.js'
                }
            }
        },

        //minifica html
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                        {
                            expand: true,     // Enable dynamic expansion.
                            cwd: 'www/',      // Src matches are relative to this path.
                            src: ['**/*.html'], // Actual pattern(s) to match.
                            dest: 'www/',   // Destination path prefix.
                        },
                      ],
            }
        },

        watch: {
            html: {
                files: [
                    'source/**/*.html',
                ],
                tasks: ['copy', 'htmlmin'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            css: {
                files: [
                    'source/**/*.css',
                ],
                tasks: ['concat:css', 'cssmin'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            scripts: {
                files: [
                    'source/**/*.js',
                ],
                tasks: ['concat:angular', 'babel', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            }
        }

    });

}