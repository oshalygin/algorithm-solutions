module.exports = function (wallaby) {
    return {
        "files": [
            "node_modules/es6-shim/es6-shim.js",
            "node_modules/babel-polyfill/dist/polyfill.min.js",
            "polyfills/array.prototype.includes.js",
            "polyfills/array.prototype.find.js"
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
            "**/*.js*": wallaby.compilers.babel({
                presets: ["es2015"],
                plugins: ["transform-object-rest-spread"]
            })
        }
    }
};