/* eslint-disable max-len */

/*

There are two kangaroos on an x-axis ready to jump in the positive direction (i.e, toward positive infinity). The first kangaroo starts at location  and moves at a rate of  meters per jump. The second kangaroo starts at location  and moves at a rate of  meters per jump. Given the starting locations and movement rates for each kangaroo, can you determine if they'll ever land at the same location at the same time?

Input Format

A single line of four space-separated integers denoting the respective values of , , , and .

Constraints

Output Format

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.

Sample Input 0

0 3 4 2
Sample Output 0

YES
Explanation 0

The two kangaroos jump through the following sequence of locations:

Thus, the kangaroos meet after  jumps and we print YES.

Sample Input 1

0 2 5 3
Sample Output 1

NO
Explanation 1

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

*/

import { expect } from 'chai';

(() => {
    describe('Kangaroo', () => {
        const yes = 'YES';
        const no = 'NO';

        function identicalLanding(firstKangarooLocation, firstKangarooVelocity, secondKangarooLocation, secondKangarooVelocity) {

            const maximumNumberOfIterations = 10000;
            let currentFirstKangarooLocation = 0;
            let currentSecondKangarooLocation = 0;

            if (firstKangarooVelocity < secondKangarooVelocity) {
                return no;
            }

            for (let iteration = 0; iteration < maximumNumberOfIterations; iteration++) {

                currentFirstKangarooLocation = firstKangarooLocation + firstKangarooVelocity * iteration;
                currentSecondKangarooLocation = secondKangarooLocation + secondKangarooVelocity * iteration;

                if (currentFirstKangarooLocation > currentSecondKangarooLocation) {
                    break;
                }

                if (currentFirstKangarooLocation === currentSecondKangarooLocation) {
                    return yes;
                }
            }

            return no;
        }

        it('0 1 4 2 => NO', () => {
            const input = '0 1 4 2';
            const expected = no;
            const parsedInput = input.split(' ').map(Number);

            const firstKangarooLocation = parsedInput[0];
            const firstKangarooVelocity = parsedInput[1];

            const secondKangarooLocation = parsedInput[2];
            const secondKangarooVelocity = parsedInput[3];

            const actual = identicalLanding(
                firstKangarooLocation,
                firstKangarooVelocity,
                secondKangarooLocation,
                secondKangarooVelocity);

            expect(actual).to.equal(expected);

        });

        it('0 3 4 2 => NO', () => {
            const input = '0 3 4 2';
            const expected = yes;
            const parsedInput = input.split(' ').map(Number);

            const firstKangarooLocation = parsedInput[0];
            const firstKangarooVelocity = parsedInput[1];

            const secondKangarooLocation = parsedInput[2];
            const secondKangarooVelocity = parsedInput[3];

            const actual = identicalLanding(
                firstKangarooLocation,
                firstKangarooVelocity,
                secondKangarooLocation,
                secondKangarooVelocity);

            expect(actual).to.equal(expected);

        });
    });
})();
