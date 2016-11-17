import { expect } from 'chai';

(() => {
    describe('Solve Me First', () => {

        const sumCalculator = (firstValue, secondValue) => firstValue + secondValue;

        it('Test Case: 123 + 11 = 134', () => {
            const firstInput = '123';
            const secondInput = '11';
            const expected = 134;
            const firstInteger = parseInt(firstInput, 10);
            const secondInteger = parseInt(secondInput, 10);

            const actual = sumCalculator(firstInteger, secondInteger);

            expect(actual).to.equal(expected);
        });
    });
})();
