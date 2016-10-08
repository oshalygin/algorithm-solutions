/* eslint-disable no-undef */
(() => {

    describe("Nested Array Display", () => {

        function nestedLayerRepresentation(nestedCount) {
            let displayKey = "-";
            return displayKey.repeat(nestedCount);
        }

        function processArray(indexValue) {
            return [...indexValue];
        }

        function isArray(input) {
            return Array.isArray(input);
        }

        function containsNesting(inputArray) {
             return !!inputArray.filter(isArray).length;
        }

        function parseArray(inputArray, nestedCount = 0) {
            let processedArray = [];

            for (let index = 0; index < inputArray.length; index = index + 1) {
                if (isArray(inputArray[index])) {
                    if (!containsNesting(processArray(inputArray[index]))) {

                        let deconstructedArray = inputArray[index].map((arrayValue => {
                            return (nestedLayerRepresentation(nestedCount) + arrayValue.toString());
                        }));
                        processedArray = [...processedArray, ...deconstructedArray];

                    } else {
                        console.log(inputArray[index]);
                        processedArray = [...processedArray, ...parseArray(inputArray[index], (nestedCount + 1))];
                    }
                } else {
                    processedArray = [...processedArray, (nestedLayerRepresentation(nestedCount) + inputArray[index].toString())];
                }
                // processedArray = [...processedArray, processArray(inputArray[index])];
            }
            console.log(processedArray);
            return processedArray;
        }

        it("nested array returns false for containsNesting", () => {
            const actual = containsNesting([1, 3, 5]);
            expect(actual).toBeFalsy();
        });

        it("nested array returns true for containsNesting", () => {
            const actual = containsNesting([1, 3, [5, 6]]);
            expect(actual).toBeTruthy();
        });

        it("nested array returns true for containsNesting", () => {
            const actual = containsNesting([1, 3, [5, 6, [7]]]);
            expect(actual).toBeTruthy();
        });

        it("simplified scenario", () => {
            const data = [1, [2, 3, 4],
                [5, 6, 7, [8, 9, [10]]]
            ];

            const expected = [
                "1",
                "-2",
                "-3",
                "-4",
                "-5",
                "-6",
                "-7",
                "--8",
                "--9",
                "---10"
            ];
            let result = parseArray(data);

            console.log(result);

        });

    });

})();
