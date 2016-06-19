module.exports = function (wallaby) {
    return {
        "files": [
            "node_modules/es6-shim/es6-shim.js",
            "node_modules/babel-polyfill/dist/polyfill.min.js",
            "polyfills/array.prototype.includes.js",
            "polyfills/array.prorotype.find.js"
        ],

        "tests": [
            "solutions/**/*.spec.js"
        ],
        env: {
            type: "node"
        },
        testFramework: 'jasmine',
        debug: true,
        compilers: {
            'solutions/**/*.spec.js': wallaby.compilers.babel({
                babel: require("./node_modules/babel-core")
            })
        },
    }
};