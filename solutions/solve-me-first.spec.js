import { expect } from "chai";
(() => {
    describe("Solve Me First", () => {

        let sumCalculator = function (x, y) { return x + y; };

        it("Test Case: 123 + 11 = 134", () => {
            let firstInput = "123";
            let secondInput = "11";
            let expected = 134;
            let firstInteger = parseInt(firstInput, 10);
            let secondInteger = parseInt(secondInput, 10);

            let actual = sumCalculator(firstInteger, secondInteger);

            expect(actual).to.equal(expected);
        });
    });
})();