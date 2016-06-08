module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        browserDisconnectTimeout: 5000,
        browserNoActivityTimeout: 60000,
        browserDisconnectTolerance: 10,
        files: [
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
        browsers: ["PhantomJS"]
    });
};