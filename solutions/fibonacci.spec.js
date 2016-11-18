
import { expect } from 'chai';
// 1, 1, 2, 3, 5, 8, 13, 21 => 8
describe('Fibonacci sequence', () => {

    function getNaiveFibonacci(input) {
        if (input < 3) {
            return 1;
        }
        return getNaiveFibonacci(input - 2) + getNaiveFibonacci(input - 1);
    }

    function optimizedFibonacci(input, firstSequence = 1, secondSequence = 0) {
        if (input === 1) {
            return firstSequence;
        }
        return optimizedFibonacci(input - 1, firstSequence + secondSequence, firstSequence);
    }

    const alterativeOptimizedFibonacci =
        (input, firstSequence = 1, secondSequence = 0) => (input === 1)
            ? firstSequence : alterativeOptimizedFibonacci(input - 1, firstSequence + secondSequence, firstSequence);

    it('Naive recursive solution: 2', () => {

        const input = 2;
        const expected = 1;

        const actual = getNaiveFibonacci(input);

        expect(actual).to.equal(expected);

    });

    it('Naive recursive solution: 5', () => {

        const input = 5;
        const expected = 5;

        const actual = getNaiveFibonacci(input);

        expect(actual).to.equal(expected);

    });

    it('Naive recursive solution: 5', () => {

        const input = 6;
        const expected = 8;

        const actual = getNaiveFibonacci(input);

        expect(actual).to.equal(expected);

    });

    it('Tail Call optimized : 8', () => {

        const input = 8;
        const expected = 21;

        const actual = optimizedFibonacci(input);

        expect(actual).to.equal(expected);

    });

    it('Tail Call optimized : 2', () => {

        const input = 2;
        const expected = 1;

        const actual = optimizedFibonacci(input);

        expect(actual).to.equal(expected);

    });

    it('Tail Call optimized : 1', () => {

        const input = 1;
        const expected = 1;

        const actual = optimizedFibonacci(input);

        expect(actual).to.equal(expected);

    });

    it('Another optimization: 8', () => {

        const input = 8;
        const expected = 21;

        const actual = alterativeOptimizedFibonacci(input);

        expect(actual).to.equal(expected);

    });

});
