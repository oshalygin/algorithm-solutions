(() => {

    describe("Palindrome Index", () => {

        function processInput(stringInput) {
            var arrayResult = stringInput.split("\n");
            arrayResult.shift();
            return arrayResult;
        }

        function determineIfPalindrome(testCase) {
            let lengthOfTestCase = testCase.length;
            let isPalindrome = false;
            for (let iterator = 0; iterator < lengthOfTestCase; iterator++) {
                if (testCase[iterator] === testCase[lengthOfTestCase - 1 - iterator]) {
                    isPalindrome = true;
                    continue;
                }
                isPalindrome = false;
                break;
            }
            return isPalindrome;
        }

        function calculateCharacterRemovalIndex(stringInput) {
            let stringLength = stringInput.length;

            for (let index = 0; index < stringLength; index++) {
                if (stringInput[index] !== stringInput[stringLength - 1 - index]) {
                    return [index, stringLength - 1 - index];
                }
            }
            return null;

        }

        function calculateWhichIndexToRemove(indexesArray, stringInput) {
            for (let index of indexesArray) {

                let stringArray = stringInput.split("");
                stringArray.splice(index, 1);
                let testCase = stringArray.join("");

                if (determineIfPalindrome(testCase)) {
                    return index;
                }
            }
            return null;
        }

        function getRemovedIndices(arrayOfInput) {
            let removedIndices = [];
            let alreadyPalindrome = -1;
            for (let input of arrayOfInput) {

                let removedIndexArray = calculateCharacterRemovalIndex(input);
                if (!removedIndexArray) {
                    removedIndices.push(alreadyPalindrome);
                    continue;
                }
                let specificIndexRemoved = calculateWhichIndexToRemove(removedIndexArray, input);
                removedIndices.push(specificIndexRemoved);
            }
            return removedIndices;
        }

        function consoleOutput(arrayOfRemovedIndices) {
            for (let iterator = 0; iterator < arrayOfRemovedIndices.length; iterator++) {
                console.log(arrayOfRemovedIndices[iterator]);
            }
        }

        function assertExpectation(actual, expected) {
            for (let iterator = 0; iterator < actual.length; iterator++) {
                expect(actual[iterator]).toEqual(expected[iterator]);
            }
        }

        it("Test Case: 3 aaab baa aaa: 3 0 -1", () => {
            let input = "3\naaab\nbaa\naaa";

            let expected = [3, 0, -1];
            let arrayOfInput = processInput(input);
            let actual = getRemovedIndices(arrayOfInput);
            assertExpectation(actual, expected);

        });
    });

})();