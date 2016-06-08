module.exports = function (wallaby) {
    return {
        "files": [
            ""
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