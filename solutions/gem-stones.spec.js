// John has discovered various rocks. Each rock is composed of various elements, and each element is represented by a lower-case Latin letter from 'a' to 'z'. An element can be present multiple times in a rock. An element is called a gem-element if it occurs at least once in each of the rocks.

// Given the list of  rocks with their compositions, display the number of gem-elements that exist in those rocks.

// Input Format

// The first line consists of an integer, , the number of rocks.
// Each of the next  lines contains a rock's composition. Each composition consists of lower-case letters of English alphabet.



// Constraints

// Each composition consists of only lower-case Latin letters ('a'-'z').
//  length of each composition

// Output Format

// // Print the number of gem-elements that are common in these rocks. If there are none, print 0.

// Sample Input

// 3
// abcdde
// baccd
// eeabg
// Sample Output

// 2
// Explanation

// Only "a" and "b" are the two kinds of gem-elements, since these are the only characters that occur in every rock's composition.

(() => {
    describe("Gem Stones", () => {

        function processArray(input) {
            let inputArray = input.split("\n");
            inputArray.shift();
            return inputArray;
        }

        function getInputString(inputArray) {
            return inputArray.join("");
        }

        function getUniqueCharacters(inputString) {
            let uniqueCharacters = [];
            let inputArray = inputString.split("");
            inputArray.sort();
            uniqueCharacters.push(inputArray[0]);

            if (inputArray.length !== 1) {
                const secondValue = 1;
                for (let iterator = secondValue; iterator < inputArray.length; iterator++) {
                    let currentLengthOfUniqueCharacterArray = uniqueCharacters.length;
                    if (inputArray[iterator] !== uniqueCharacters[currentLengthOfUniqueCharacterArray - 1]) {
                        uniqueCharacters.push(inputArray[iterator]);
                    }
                }
            }
            return uniqueCharacters;
        }

        function calculateNumberOfGemStones(uniqueCharacters, processedArray) {
            let numberOfGemStones = 0;

            for (let character of uniqueCharacters) {

                let characterExists = false;
                for (let stone of processedArray) {
                    characterExists = stone.includes(character);
                    if (!characterExists) {
                        break;
                    }
                }
                if (characterExists) {
                    numberOfGemStones++;
                }
            }

            return numberOfGemStones
        }

        function consoleOutput(numberOfGemStones) {
            console.log(numberOfGemStones);
        }

        function processGemStones(input) {
            let processedArray = processArray(input);
            let processedString = getInputString(processedArray);
            let uniqueCharacters = getUniqueCharacters(processedString);
            let numberOfGemStones = calculateNumberOfGemStones(uniqueCharacters, processedArray);
            return numberOfGemStones;
        }

        it("Test Case: 3 abcdde baccd eeabg: 2", () => {
            const input = "3\nabcdde\nbaccd\neeabg";
            const expected = 2;
            let actual = processGemStones(input);

            expect(actual).toBe(expected);

        });
    });
})();