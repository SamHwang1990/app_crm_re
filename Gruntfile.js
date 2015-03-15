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
      jsTpl: {
        zhCn: ['<%= distdir %>/templates/zh-cn/*.js'],
        zhHk: ['<%= distdir %>/templates/zh-hk/*.js'],
        enUs: ['<%= distdir %>/templates/en-us/*.js']
      },
      html: ['public/src/index.html'],
      tpl: {
        zhCn: {
          app: ['public/src/app/**/*.zh-cn.tpl.html'],
          common: ['public/src/common/**/*.zh-cn.tpl.html']
        },
        zhHk: {
          app: ['public/src/app/**/*.zh-hk.tpl.html'],
          common: ['public/src/common/**/*.zh-hk.tpl.html']
        },
        enUs: {
          app: ['public/src/app/**/*.en-us.tpl.html'],
          common: ['public/src/common/**/*.en-us.tpl.html']
        }
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
      zhCn_app: {
        options: {
          base: 'public/src/app',
          rename: function (moduleName) {
            return moduleName.replace('zh-cn.', '');
          }
        },
        src: ['<%= src.tpl.zhCn.app %>'],
        dest: '<%= distdir %>/templates/zh-cn/app.js',
        module: 'templates.app'
      },
      zhCn_common: {
        options: {
          base: 'public/src/common',
          rename: function (moduleName) {
            return moduleName.replace('zh-cn.', '');
          }
        },
        src: ['<%= src.tpl.zhCn.common %>'],
        dest: '<%= distdir %>/templates/zh-cn/common.js',
        module: 'templates.common'
      },
      zhHk_app: {
        options: {
          base: 'public/src/app',
          rename: function (moduleName) {
            return moduleName.replace('zh-hk.', '');
          }
        },
        src: ['<%= src.tpl.zhHk.app %>'],
        dest: '<%= distdir %>/templates/zh-hk/app.js',
        module: 'templates.app'
      },
      zhHk_common: {
        options: {
          base: 'public/src/common',
          rename: function (moduleName) {
            return moduleName.replace('zh-hk.', '');
          }
        },
        src: ['<%= src.tpl.zhHk.common %>'],
        dest: '<%= distdir %>/templates/zh-hk/common.js',
        module: 'templates.common'
      },
      enUs_app: {
        options: {
          base: 'public/src/app',
          rename: function (moduleName) {
            return moduleName.replace('en-us.', '');
          }
        },
        src: ['<%= src.tpl.enUs.app %>'],
        dest: '<%= distdir %>/templates/en-us/app.js',
        module: 'templates.app'
      },
      enUs_common: {
        options: {
          base: 'public/src/common',
          rename: function (moduleName) {
            return moduleName.replace('en-us.', '');
          }
        },
        src: ['<%= src.tpl.enUs.common %>'],
        dest: '<%= distdir %>/templates/en-us/common.js',
        module: 'templates.common'
      }
    },
    concat:{
      dist:{
        options: {
            banner: "<%= banner %>"
        },
        src:['<%= src.js %>'],
        dest:'<%= distdir %>/<%= pkg.name %>.js'
      },
      angular: {
        src:['public/bower_components/angular/angular.js',
              'public/bower_components/angular-ui-router/release/angular-ui-router.js',
              'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
        ],
        dest: '<%= distdir %>/assets/bower/angular.js'
      },
      jquery:{
        src:['public/bower_components/jquery/dist/jquery.js'],
        dest: '<%= distdir %>/assets/bower/jquery.js'
      },
      zhCnTpl:{
        src:['<%= src.jsTpl.zhCn %>'],
        dest: '<%= distdir %>/templates/zh-cn/tpl.js'
      },
      zhHkTpl:{
        src:['<%= src.jsTpl.zhHk %>'],
        dest: '<%= distdir %>/templates/zh-hk/tpl.js'
      },
      enUsTpl:{
        src:['<%= src.jsTpl.enUs %>'],
        dest: '<%= distdir %>/templates/en-us/tpl.js'
      }
    },
    stylus: {
      build: {
        files: {
          '<%= distdir %>/<%= pkg.name %>.css': ['<%= src.stylus %>'] },
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
          '<%= src.tpl.zhCn.app %>',
          '<%= src.tpl.zhCn.common %>',
          '<%= src.tpl.zhHk.app %>',
          '<%= src.tpl.zhHk.common %>',
          '<%= src.tpl.enUs.app %>',
          '<%= src.tpl.enUs.common %>',
          '<%= src.html %>'
        ],
        tasks:['build','timestamp']
      }
    }
  });

  //grunt.loadNpmTasks('name')
  grunt.loadNpmTasks('grunt-contrib-concat');
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