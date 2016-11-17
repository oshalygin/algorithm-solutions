import { expect } from 'chai';
(() => {

    describe('Palindrome Index', () => {

        function processInput(stringInput) {
            const arrayResult = stringInput.split('\n');
            arrayResult.shift();
            return arrayResult;
        }

        function consoleOutput(arrayOfRemovedIndices) { //eslint-disable-line no-unused-vars
            for (let iterator = 0; iterator < arrayOfRemovedIndices.length; iterator++) {
                console.log(arrayOfRemovedIndices[iterator]); //eslint-disable-line no-console
            }
        }

        function determineIfPalindrome(testCase) {
            const lengthOfTestCase = testCase.length;
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
            const stringLength = stringInput.length;

            for (let index = 0; index < stringLength; index++) {
                if (stringInput[index] !== stringInput[stringLength - 1 - index]) {
                    return [index, stringLength - 1 - index];
                }
            }
            return null;

        }

        function calculateWhichIndexToRemove(indexesArray, stringInput) {
            for (const index of indexesArray) {

                const stringArray = stringInput.split('');
                stringArray.splice(index, 1);
                const testCase = stringArray.join('');

                if (determineIfPalindrome(testCase)) {
                    return index;
                }
            }
            return null;
        }

        function getRemovedIndices(arrayOfInput) {
            const removedIndices = [];
            const alreadyPalindrome = -1;
            for (const input of arrayOfInput) {

                const removedIndexArray = calculateCharacterRemovalIndex(input);
                if (!removedIndexArray) {
                    removedIndices.push(alreadyPalindrome);
                    continue;
                }
                const specificIndexRemoved = calculateWhichIndexToRemove(removedIndexArray, input);
                removedIndices.push(specificIndexRemoved);
            }
            return removedIndices;
        }


        function assertExpectation(actual, expected) {
            for (let iterator = 0; iterator < actual.length; iterator++) {
                expect(actual[iterator]).to.equal(expected[iterator]); //eslint-disable-line no-undef
            }
        }

        it('Test Case: 3 aaab baa aaa: 3 0 -1', () => {
            const input = '3\naaab\nbaa\naaa';

            const expected = [3, 0, -1];
            const arrayOfInput = processInput(input);
            const actual = getRemovedIndices(arrayOfInput);
            assertExpectation(actual, expected);

        });
    });

})();
