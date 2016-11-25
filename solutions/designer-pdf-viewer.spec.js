/* eslint-disable max-len */

/*

hen you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In a new kind of PDF viewer, the selection of each word is independent of the other words; this means that each rectangular selection area forms independently around each highlighted word. For example:

PDF-highighting.png

In this type of PDF viewer, the width of the rectangular selection area is equal to the number of letters in the word times the width of a letter, and the height is the maximum height of any letter in the word.

Consider a word consisting of lowercase English alphabetic letters, where each letter is  wide. Given the height of each letter in millimeters (), find the total area that will be highlighted by blue rectangle in when the given word is selected in our new PDF viewer.

Input Format

The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter (i.e., ).
The second line contains a single word, consisting of lowercase English alphabetic letters.

Constraints

, where  is an English lowercase letter.
Word contains no more than  letters.
Output Format

Print a single integer denoting the area of highlighted rectangle when the given word is selected. The unit of measurement for this is square millimeters (), but you must only print the integer.

Sample Input

1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
abc
Sample Output

9
Explanation

We are highlighting the word abc:

The tallest letter in abc is b, and . The selection area for this word is .
Note: Recall that the width of each character is .
*/

import { expect } from 'chai';
(() => {

    describe('Designer PDF Viewer', () => {

        function calculateTextArea(text, height) {
            const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

            const maxHeight = text.reduce((previous, next) => {
                const currentHeight = height[letters.indexOf(next)];
                return currentHeight > previous ? currentHeight : previous;
            }, 1);

            return text.length * maxHeight;
        }

        it('simple abc => 9', () => {
            const expected = 9;
            const input = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5\nabc';

            const valuesAndText = input
                .split('\n');

            const letterHeight = valuesAndText[0]
                .split(' ')
                .map(integer => parseInt(integer, 10)); //eslint-disable-line max-nested-callbacks

            const text = valuesAndText[1].split('');

            const actual = calculateTextArea(text, letterHeight);

            expect(actual).equals(expected);

        });

        it('zzz => 15', () => {
            const expected = 15;
            const input = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5\nzzz';

            const valuesAndText = input
                .split('\n');

            const letterHeight = valuesAndText[0]
                .split(' ')
                .map(integer => parseInt(integer, 10)); //eslint-disable-line max-nested-callbacks

            const text = valuesAndText[1].split('');

            const actual = calculateTextArea(text, letterHeight);

            expect(actual).equals(expected);

        });
    });


})();
