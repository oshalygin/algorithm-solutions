(function () {
    describe("sanity check tests", function () {
        it("simple math", function () {
            let expected = 3;
            let firstValue = 1;
            let secondValue = 2;
            let actual = firstValue + secondValue;

            expect(actual).toEqual(expected);
        });
    });
})();