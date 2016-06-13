module.exports = function (config) {

    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        browserDisconnectTimeout: 5000,
        browserNoActivityTimeout: 60000,
        browserDisconnectTolerance: 10,
        files: [
            "node_modules/es6-shim/es6-shim.js",
            "node_modules/babel-polyfill/dist/polyfill.min.js",
            "polyfills/array.prototype.includes.js",
            "solutions/**/*.spec.js"
        ],
        exclude: [
        ],
        preprocessors: {
            "solutions/**/*.spec.js": ["babel"]
        },
        reporters: ["mocha"],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        browsers: ["PhantomJS"]
    });
};