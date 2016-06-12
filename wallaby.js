module.exports = function (wallaby) {
    return {
        "files": [
            "node_modules/es6-shim/es6-shim.js",
            "polyfills/array.prototype.includes.js"
        ],

        "tests": [
            "solutions/**/*.spec.js"
        ],

        testFramework: 'jasmine',
        debug: true,
        compilers: {
            'solutions/**/*.spec.js': wallaby.compilers.babel({
                babel: require("./node_modules/babel-core")
            })
        },
    }
};