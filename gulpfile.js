const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const shell = require('gulp-shell');
const { exec } = require('child_process')

gulp.task('default', function (done) {
    console.log('hello world');
    done();
});

gulp.task('build', shell.task('pnpm build'))

gulp.task('docker:copy', function (done) {
    const root = path.resolve(__dirname);
    const target = path.resolve(root, 'dist');
    fs.rmSync(target, { recursive: true, force: true });
    fs.mkdirSync(target);

    const sourceItems = []
    fs.readdirSync('.').forEach(item => {
        if (item === 'dist' || item === 'node_modules') {
            return;
        }
        sourceItems.push(item);
    });
    sourceItems.forEach(source => {
        fs.cpSync(source, path.resolve(target, source), { recursive: true });
    });

    const excludedPackages = [
        'packages/client',
    ].map(item => path.resolve(target, item));
    excludedPackages.forEach(item => {
        fs.rmSync(item, { recursive: true, force: true });
    });
    done();
});

gulp.task('docker:node-modules', shell.task(['cd dist && pnpm install --prod --ignore-scripts']));
gulp.task('docker:build-image', shell.task(['cd dist && docker build -t seval-portal .']));
gulp.task('docker:build', function (done) {
    gulp.series('build',
        'docker:copy', 
        'docker:node-modules', 
        'docker:build-image'
    )(done);
})