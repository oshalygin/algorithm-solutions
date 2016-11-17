/*
 Shashank likes strings in which consecutive characters are different.
 For example, he likes ABABA, while he doesn't like ABAA.
 Given a string containing characters  and  only, he wants to change it into a string he likes.
 To do this, he is allowed to delete the characters in the string.

 Your task is to find the minimum number of required deletions.

 Input Format

 The first line contains an integer , i.e. the number of test cases.
 The next  lines contain a string each.

 Output Format

 For each test case, print the minimum number of deletions required.

 Constraints


  length of string

 Sample Input

 5
 AAAA
 BBBBB
 ABABABAB
 BABABA
 AAABBB
 Sample Output

 3
 4
 0
 0
 4
 Explanation

 AAAA  A, 3 deletions
 BBBBB  B, 4 deletions
 ABABABAB  ABABABAB, 0 deletions
 BABABA  BABABA, 0 deletions
 AAABBB  AB, 4 deletions because to convert it to AB we need to delete 2 A's and 2 B's
*/
import { expect } from 'chai';
(function () {

    describe('Alternating Characters', () => {

        function testExpectation(actual, expected) {
            for (let iterator = 0; iterator < actual.length; iterator++) {
                expect(actual[iterator]).to.equal(expected[iterator]);
            }
        }

        function consoleOutput(listOfDeletions) { //eslint-disable-line no-unused-vars
            for (const countOfDeletions of listOfDeletions) {
                console.log(countOfDeletions); //eslint-disable-line no-console
            }
        }

        function calculateDeletions(entry) {
            let numberOfDeletions = 0;
            const charactersInEntry = entry.split('');
            let currentCharacter;

            for (const character of charactersInEntry) {
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

        function processEntries(entries) {
            const listOfDeletions = [];
            for (const stringEntry of entries) {
                const numberOfDeletions = calculateDeletions(stringEntry);
                listOfDeletions.push(numberOfDeletions);
            }
            return listOfDeletions;
        }

        it('Default Case:  3, 4, 0, 0, 4', () => {
            const input = '5\nAAAA\nBBBBB\nABABABAB\nBABABA\nAAABBB';
            const intputArray = input.split('\n');
            const expected = [3, 4, 0, 0, 4];
            intputArray.shift();

            const actual = processEntries(intputArray);
            testExpectation(actual, expected);
            // consoleOutput(actual);

        });

        it('Personal Case:  0, 6, 0, 0, 6', () => {
            const input = '5\nAB\nBBBBBBB\nABABABAB\nBABABA\nAAABBBBBAB';
            const intputArray = input.split('\n');
            const expected = [0, 6, 0, 0, 6];
            intputArray.shift();

            const actual = processEntries(intputArray);
            testExpectation(actual, expected);
            // consoleOutput(actual);

        });
    });
}());
