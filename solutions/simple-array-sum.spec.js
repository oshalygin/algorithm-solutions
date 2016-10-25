import { expect } from "chai";
(() => {
    describe("Simple Array Sum", () => {

        function calculateArrayValues(arrayInput) {
            arrayInput.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            });
        }
        it("Test Case: 1 2 3 4 10 11 = 31", () => {

            let inputCacpacityOfValues = "5";
            let inputStringOfValues = "1 2 3 4 10 11";
            const expected = 31;

            let numberOfValues = parseInt(inputCacpacityOfValues);
            let arrayOfValues = inputStringOfValues.split(" ");
            let actual = calculateArrayValues(arrayOfValues);


            // expect(actual).toEqual(expected);
        });
    });
})();