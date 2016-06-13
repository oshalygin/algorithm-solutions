// Shashank likes strings in which consecutive characters are different. For example, he likes ABABA, while he doesn't like ABAA. Given a string containing characters  and  only, he wants to change it into a string he likes. To do this, he is allowed to delete the characters in the string.

// Your task is to find the minimum number of required deletions.

// Input Format

// The first line contains an integer , i.e. the number of test cases.
// The next  lines contain a string each.

// Output Format

// For each test case, print the minimum number of deletions required.

// Constraints


//  length of string

// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4
// Explanation

// AAAA  A, 3 deletions
// BBBBB  B, 4 deletions
// ABABABAB  ABABABAB, 0 deletions
// BABABA  BABABA, 0 deletions
// AAABBB  AB, 4 deletions because to convert it to AB we need to delete 2 A's and 2 B's


(function () {

    describe("Alternating Characters", () => {

        function testExpectation(actual, expected) {
            for (let iterator = 0; iterator < actual.length; iterator++) {
                expect(actual[iterator]).toEqual(expected[iterator]);
            }
        }

        function consoleOutput(listOfDeletions) {
            for (let countOfDeletions of listOfDeletions) {
                console.log(countOfDeletions);
            }
        }

        function processEntries(entries) {
            let listOfDeletions = [];
            for (let stringEntry of entries) {
                let numberOfDeletions = calculateDeletions(stringEntry);
                listOfDeletions.push(numberOfDeletions);
            }
            return listOfDeletions;
        }

        function calculateDeletions(entry) {
            let numberOfDeletions = 0;
            let charactersInEntry = entry.split("");
            let currentCharacter;

            for (let character of charactersInEntry) {
                if (character === currentCharacter) {
                    numberOfDeletions += 1;

                }
                if (!currentCharacter) {
                    currentCharacter = character[0];
                }

                currentCharacter = character;
            }
            return numberOfDeletions;
        }

        it("Default Case:  3, 4, 0, 0, 4", () => {
            let input = [5, "AAAA", "BBBBB", "ABABABAB", "BABABA", "AAABBB"];
            const expected = [3, 4, 0, 0, 4];
            input.shift();

            let actual = processEntries(input);
            testExpectation(actual, expected);
            // consoleOutput(actual);

        });

         it("Personal Case:  0, 6, 0, 0, 6", () => {
            let input = [5, "AB", "BBBBBBB", "ABABABAB", "BABABA", "AAABBBBBAB"];
            const expected = [0, 6, 0, 0, 6];
            input.shift();

            let actual = processEntries(input);
            testExpectation(actual, expected);
            // consoleOutput(actual);

        });
    });
})();