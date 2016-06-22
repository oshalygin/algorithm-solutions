(() => {
    describe("A Very Big Sum", () => {
        function sum(arrayInput) {
            return arrayInput.reduce((previousValue, newValue) => {
                return previousValue + newValue;
            });
        };

        function convertToNumberArray(arrayOfStrings) {
            return arrayOfStrings.map(returnIntegerValue);
        }

        function returnIntegerValue(number) {
            return parseInt(number, 10);
        }

        it("Test Scenario: 1000000001 1000000002 1000000003 1000000004 1000000005 : 5000000015", () => {
            let inputCapacityOfValues = "5";
            let inputStringOfValues = "1000000001 1000000002 1000000003 1000000004 1000000005";
            let expected = 5000000015;

            let arrayOfStringValues = inputStringOfValues.split(" ");
            let arrayOfNumbers = convertToNumberArray(arrayOfStringValues);

            let actual = sum(arrayOfNumbers);
            expect(actual).toEqual(expected);
        });
    });
})();