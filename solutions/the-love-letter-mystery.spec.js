// James found a love letter his friend Harry has written for his girlfriend. James is a prankster, so he decides to meddle with the letter. He changes all the words in the letter into palindromes.

// To do this, he follows two rules:

// He can reduce the value of a letter, e.g. he can change d to c, but he cannot change c to d.
// In order to form a palindrome, if he has to repeatedly reduce the value of a letter, he can do it until the letter becomes a. Once a letter has been changed to a, it can no longer be changed.
// Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations required to convert a given string into a palindrome.

// Input Format

// The first line contains an integer , i.e., the number of test cases.
// The next  lines will contain a string each. The strings do not contain any spaces.

// Constraints

//  length of string
// All characters are lower case English letters.

// Output Format

// A single line containing the number of minimum operations corresponding to each test case.
import { expect } from "chai";
(function () {
    describe("The Love Letter Mystery", () => {

        function getTestCases(userInput) {
            var inputArray = userInput.split("\n");
            inputArray.shift();

            return inputArray;
        }

        function getListOfOperations(testCases) {
            let listOfOperations = [];

            for (let testCase of testCases) {
                let numberOfOperations = determineOperations(testCase);
                listOfOperations.push(numberOfOperations);
            }
            return listOfOperations;
        }

        function calculateReductions(firstCharacter, secondCharacter) {
            let firstValue = firstCharacter.charCodeAt(0);
            let secondValue = secondCharacter.charCodeAt(0);

            return Math.abs(firstValue - secondValue);
        }

        function determineOperations(testCase) {
            let characters = testCase.split("");
            let numberOfOperations = 0;
            let lengthOfString = characters.length;

            for (let iterator = 0; iterator < lengthOfString / 2; iterator++) {
                numberOfOperations += calculateReductions(characters[iterator], characters[lengthOfString - 1 - iterator]);
            }
            return numberOfOperations;
        }

        function testExpectation(actual, expected) {
            for (let iterator = 0; iterator < actual.length; iterator++) {
                expect(actual[iterator]).to.equal(expected[iterator]);
            }
        }

        function consoleOutput(operations) {
            for (let operationCount of operations) {
                console.log(operationCount);
            }
        }

        it("First Test Case: 2, 0, 4, 2", () => {
            var input = "4\nabc\nabcba\nabcd\ncba";
            var expected = [2, 0, 4, 2];
            let testCases = getTestCases(input);
            let actual = getListOfOperations(testCases);

            testExpectation(actual, expected);
            // consoleOutput(actual);

        });
    });

})();