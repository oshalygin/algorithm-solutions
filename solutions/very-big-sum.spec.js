import { expect } from "chai";
(() => {
    describe("A Very Big Sum", () => {
        function sum(arrayInput) {
            return arrayInput.reduce((previousValue, newValue) => {
                return previousValue + newValue;
            });
        }

        function returnIntegerValue(number) {
            return parseInt(number, 10);
        }

        function convertToNumberArray(arrayOfStrings) {
            return arrayOfStrings.map(returnIntegerValue);
        }


        it("Test Scenario: 1000000001 1000000002 1000000003 1000000004 1000000005 : 5000000015", () => {

            let inputStringOfValues = "1000000001 1000000002 1000000003 1000000004 1000000005";
            let expected = 5000000015;

            let arrayOfStringValues = inputStringOfValues.split(" ");
            let arrayOfNumbers = convertToNumberArray(arrayOfStringValues);

            let actual = sum(arrayOfNumbers);
            expect(actual).to.equal(expected); //eslint-disable-line no-undef
        });
    });
})();