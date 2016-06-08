module.exports = function (wallaby) {
    return {
        "files": [
            "Solutions/**/*.spec.js"
        ],

        "tests": [
            "Solutions/**/*.spec.js"
        ],

        testFramework: 'jasmine',
        debug: false,
        compilers: {
            'Solutions/**/*.spec.js': wallaby.compilers.babel({
                babel: require("./node_modules/babel-core")
            })
        },
    }
};