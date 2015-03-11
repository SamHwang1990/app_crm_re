module.exports = function(grunt){
    grunt.initConfig({
        distdir: 'public/dist',
        pkg: grunt.file.readJSON('package.json'),
        banner:
        '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
        ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
        src: {
            js: ['public/src/**/*.js'],
            jsTpl: ['<%= distdir %>/templates/**/*.js'],
            html: ['public/src/index.html'],
            tpl: {
                app: ['public/src/app/**/*.tpl.html'],
                common: ['public/src/common/**/*.tpl.html']
            },
            stylus: ['stylus/appcrm.styl'],
            stylusWatch: ['stylus/**/*.styl']
        },
        clean: ['<%= distdir %>'],
        copy: {
            assets: {
                files: [
                  { dest: '<%= distdir %>', src: 'index.html', expand: true, cwd: 'public/src'},
                  { dest: '<%= distdir %>/assets/imgs', src : '**', expand: true, cwd: 'public/src/assets/imgs' },
                  { dest: '<%= distdir %>', src: 'favicon.ico', expand: true, cwd: 'public/src/assets'},
                  { dest: '<%= distdir %>/assets/bower/bootstrap', src: '**', expand: true, cwd: 'public/bower_components/bootstrap/dist'},
                  { dest: '<%= distdir %>/assets/bower/angular_i18n', src: 'angular-locale_zh-cn.js', expand:true, cwd: 'public/bower_components/angular-i18n'},
                  { dest: '<%= distdir %>/assets/bower/angular_i18n', src: 'angular-locale_zh-hk.js', expand:true, cwd: 'public/bower_components/angular-i18n'},
                  { dest: '<%= distdir %>/assets/bower/angular_i18n', src: 'angular-locale_en-us.js', expand:true, cwd: 'public/bower_components/angular-i18n'}
                ]
            }
        },
        //karma: {
        //    unit: { options: karmaConfig('test/config/unit.js') },
        //    watch: { options: karmaConfig('test/config/unit.js', { singleRun:false, autoWatch: true}) }
        //},
        html2js: {
            app: {
                options: {
                    base: 'public/src/app'
                },
                src: ['<%= src.tpl.app %>'],
                dest: '<%= distdir %>/templates/app.js',
                module: 'templates.app'
            },
            common: {
                options: {
                    base: 'public/src/common'
                },
                src: ['<%= src.tpl.common %>'],
                dest: '<%= distdir %>/templates/common.js',
                module: 'templates.common'
            }
        },
        concat:{
            dist:{
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.js %>', '<%= src.jsTpl %>'],
                dest:'<%= distdir %>/<%= pkg.name %>.js'
            },
            angular: {
                src:['public/bower_components/angular/angular.js',
                      'public/bower_components/angular-ui-router/release/angular-ui-router.js'],
                dest: '<%= distdir %>/assets/bower/angular.js'
            },
            jquery:{
                src:['public/bower_components/jquery/dist/jquery.js'],
                dest: '<%= distdir %>/assets/bower/jquery.js'
            }
        },
        uglify: {
            dist:{
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
                dest:'<%= distdir %>/<%= pkg.name %>.js'
            },
            angular: {
                src:['<%= concat.angular.src %>'],
                dest: '<%= distdir %>/angular.js'
            }
        },
        stylus: {
            build: {
                files: {
                    '<%= distdir %>/<%= pkg.name %>.css':
                        ['<%= src.stylus %>'] },
                options: {
                    compile: true
                }
            },
            min: {
                files: {
                    '<%= distdir %>/<%= pkg.name %>.css': ['<%= src.stylus %>']
                },
                options: {
                    compress: true
                }
            }
        },
        watch:{
            build: {
                files:[
                    '<%= src.js %>',
                    '<%= src.stylusWatch %>',
                    '<%= src.tpl.app %>',
                    '<%= src.tpl.common %>',
                    '<%= src.html %>'
                ],
                tasks:['build','timestamp']
            }
        }
    });

    //grunt.loadNpmTasks('name')
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-html2js');

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });

    //grunt.registerTask('name', [dep])
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['clean','html2js','concat','stylus:build','copy:assets']);
};