import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function scss(done) {
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('src/css/build', {sourcemaps: '.'}) )

    done()
}

export function dev() {
    watch('src/scss/**/*.scss',scss)
}

export default series(dev,scss)