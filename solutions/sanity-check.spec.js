import { expect } from 'chai';

(() => {
    describe('sanity check tests', () => {
        it('simple math', () => {
            const expected = 3;
            const firstValue = 1;
            const secondValue = 2;
            const actual = firstValue + secondValue;

            expect(actual).to.equal(expected);
        });
    });
})();
