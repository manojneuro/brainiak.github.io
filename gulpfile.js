var fs           = require('fs')
var gulp         = require('gulp')
var path         = require('path')
var sass         = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps   = require('gulp-sourcemaps')
var cleanCSS     = require('gulp-clean-css')
var rename       = require('gulp-rename')
var concat       = require('gulp-concat')
var uglify       = require('gulp-uglify')
var connect      = require('gulp-connect')
var open         = require('gulp-open')
var babel        = require('gulp-babel')
var replace      = require('gulp-replace')
var wrapper      = require('gulp-wrapper')
var watch        = require('gulp-watch')

// Integrate with Jekyll
var child        = require('child_process')
var gutil        = require('gulp-util')

var PATH = {
  HOME                 : './',
  ASSETS               : 'assets',
  ASSETS_TOOLKIT_JS    : 'src/js/toolkit.js',
  // SCSS_TOOLKIT_SOURCES : 'src/scss/toolkit*',
  SCSS                 : 'src/css/main.scss',
  JS                   : [
    'src/js/bootstrap/*.js',
    'src/js/custom/*.js'
  ],
  COPY                 : [
    'src/fonts/**/**',
    'src/img/**/**',
    'src/css/**/*.css',
    'src/js/*.js',
    'src/js/vendor/*.js'
  ]
}

var banner  = '/*!\n' +
  ' * Bootstrap\n' +
  ' * Copyright 2011-2016\n' +
  ' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
  ' */\n'
var jqueryCheck = 'if (typeof jQuery === \'undefined\') {\n' +
   '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\\'s JavaScript.\')\n' +
   '}\n'
var jqueryVersionCheck = '+function ($) {\n' +
  '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
  '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
  '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
  '  }\n' +
  '}(jQuery);\n\n'

gulp.task('default', ['jekyll', 'watch'])

gulp.task('jekyll', () => {
	const jekyll = child.spawn('jekyll', ['serve',
			'--watch',
			'--incremental',
			'--drafts',
      '--livereload',
      '--host',
      '0.0.0.0'
	])

	const jekyllLogger = (buffer) => {
		buffer.toString()
		.split(/\n/)
		.forEach((message) => gutil.log('Jekyll: ' + message))
	}

	jekyll.stdout.on('data', jekyllLogger)
	jekyll.stderr.on('data', jekyllLogger)
})

function copy(glob) {
  return glob
    .pipe(gulp.dest(PATH.ASSETS))
}

function scss(glob) {
  return glob
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(PATH.HOME))
    .pipe(gulp.dest(PATH.ASSETS))
}

function js(glob) {
  return glob
    .pipe(concat('toolkit.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel({
        "compact" : false,
        "presets": [
          [
            "es2015",
            {
              "modules": false,
              "loose": true
            }
          ]
        ],
        "plugins": [
          "transform-es2015-modules-strip"
        ]
      }
    ))
    .pipe(wrapper({
       header: banner +
               "\n" +
               jqueryCheck +
               "\n" +
               jqueryVersionCheck +
               "\n+function () {\n",
       footer: '\n}();\n'
    }))
    .pipe(gulp.dest('assets/js'))
}

funcs = [copy, scss, js]
srcs = [PATH.COPY, PATH.SCSS, PATH.JS]

gulp.task('watch', function() {
  for (i in funcs) {
    funcs[i](watch(srcs[i], {
      ignoreInitial: false,
      base: 'src'
    }))
  }
})

gulp.task('build', function() {
  for (i in funcs) {
    funcs[i](gulp.src(srcs[i], {
      base: 'src'
    }))
  }
})
//
// gulp.task('scss', function () {
//   return gulp.src(PATH.SCSS_TOOLKIT_SOURCES)
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.write(PATH.HOME))
//     .pipe(gulp.dest(PATH.ASSETS))
// })
//
// gulp.task('scss-min', ['scss'], function () {
//   return gulp.src(PATH.SCSS_TOOLKIT_SOURCES)
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(cleanCSS({compatibility: 'ie9'}))
//     .pipe(autoprefixer())
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(sourcemaps.write(PATH.HOME))
//     .pipe(gulp.dest(PATH.ASSETS))
// })
//
// gulp.task('js', function () {
//   return gulp.src(PATH.JS)
//     .pipe(concat('toolkit.js'))
//     .pipe(replace(/^(export|import).*/gm, ''))
//     .pipe(babel({
//         "compact" : false,
//         "presets": [
//           [
//             "es2015",
//             {
//               "modules": false,
//               "loose": true
//             }
//           ]
//         ],
//         "plugins": [
//           "transform-es2015-modules-strip"
//         ]
//       }
//     ))
//     .pipe(wrapper({
//        header: banner +
//                "\n" +
//                jqueryCheck +
//                "\n" +
//                jqueryVersionCheck +
//                "\n+function () {\n",
//        footer: '\n}();\n'
//     }))
//     .pipe(gulp.dest(PATH.ASSETS))
// })
//
// gulp.task('js-min', ['js'], function () {
//   return gulp.src(PATH.ASSETS_TOOLKIT_JS)
//     .pipe(uglify())
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest(PATH.ASSETS))
// })
//
// gulp.task('docs', ['docs_server'], function () {
//   gulp.src(__filename)
//     .pipe(open({uri: 'http://localhost:9001/docs/'}))
// })
//
// gulp.task('docs_server', function () {
//   connect.server({
//     root: 'docs',
//     port: 9001,
//     livereload: true
//   })
// })
