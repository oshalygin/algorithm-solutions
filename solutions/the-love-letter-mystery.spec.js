// James found a love letter his friend Harry has written for his girlfriend.
// James is a prankster, so he decides to meddle with the letter.He changes all the words in the letter into palindromes.

// To do this, he follows two rules:

// He can reduce the value of a letter, e.g. he can change d to c, but he cannot change c to d.
// In order to form a palindrome, if he has to repeatedly reduce the value of a letter,
// he can do it until the letter becomes a.Once a letter has been changed to a, it can no longer be changed.
// Each reduction in the value of any letter is counted as a single operation.
// Find the minimum number of operations required to convert a given string into a palindrome.

// Input Format

// The first line contains an integer , i.e., the number of test cases.
// The next  lines will contain a string each. The strings do not contain any spaces.

// Constraints

//  length of string
// All characters are lower case English letters.

// Output Format

// A single line containing the number of minimum operations corresponding to each test case.
import { expect } from 'chai';
(() => {
    describe('The Love Letter Mystery', () => {

        function getTestCases(userInput) {
            const inputArray = userInput.split('\n');
            inputArray.shift();

            return inputArray;
        }

        function calculateReductions(firstCharacter, secondCharacter) {
            const firstValue = firstCharacter.charCodeAt(0);
            const secondValue = secondCharacter.charCodeAt(0);

            return Math.abs(firstValue - secondValue);
        }

        function determineOperations(testCase) {
            const characters = testCase.split('');
            let numberOfOperations = 0;
            const lengthOfString = characters.length;

            for (let iterator = 0; iterator < lengthOfString / 2; iterator++) {
                numberOfOperations += calculateReductions(characters[iterator], characters[lengthOfString - 1 - iterator]);
            }
            return numberOfOperations;
        }

        function getListOfOperations(testCases) {
            const listOfOperations = [];

            for (const testCase of testCases) {
                const numberOfOperations = determineOperations(testCase);
                listOfOperations.push(numberOfOperations);
            }
            return listOfOperations;
        }

        function testExpectation(actual, expected) {
            for (let iterator = 0; iterator < actual.length; iterator++) {
                expect(actual[iterator]).to.equal(expected[iterator]);
            }
        }

        function consoleOutput(operations) { //eslint-disable-line no-unused-vars
            for (const operationCount of operations) {
                console.log(operationCount); //eslint-disable-line no-console
            }
        }

        it('First Test Case: 2, 0, 4, 2', () => {
            const input = '4\nabc\nabcba\nabcd\ncba';
            const expected = [2, 0, 4, 2];
            const testCases = getTestCases(input);
            const actual = getListOfOperations(testCases);

            testExpectation(actual, expected);
            // consoleOutput(actual);

        });
    });

})();
