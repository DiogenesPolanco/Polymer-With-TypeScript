'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './';
        this.sourceApp = this.source + 'app/';

        this.tsOutputPath = this.sourceApp + '/elements';
        this.allJavaScript = [this.sourceApp + '/elements/**/*.js'];
        this.allTypeScript = this.sourceApp + '/elements/**/*.ts';
        this.DIST = 'dist';
        this.typings = './typings/';
        this.temp = '.tmp/';
        this.images ='app/images/**/*';
        this.fonts = 'app/fonts/**';
        this.pages= 'app/**/*.html';
        this.elements ='app/elements/**/*.css';
        this.styles = 'app/styles/**/*.css';
        this.libraryTypeScriptDefinitions = './typings/main/**/*.ts';
       
    }
    return gulpConfig;
})();
module.exports = GulpConfig;