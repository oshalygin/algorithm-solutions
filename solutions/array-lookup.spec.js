import { expect } from 'chai';
/*
This is a simple challenge to get things started.Given a sorted array () and a number (),
can you print the index location of  in the array?

The next section describes the input format.You can often skip it, if you are using included methods.
*/
(() => {
    describe('Array Lookup', () => {

        function processInput(input) {
            const splitInput = input.split('\n');

            return {
                searchValue: parseInt(splitInput.shift(), 10),
                container: splitInput
                    .pop()
                    .split(' ')
                    .map(value => parseInt(value, 10))
            };
        }

        it('search: 4, size: 6 => [1, 4, 5, 7, 9, 12]', () => {
            const input = '4\n6\n1 4 5 7 9 12';
            const expected = 1;
            const { searchValue, container } = processInput(input);

            const actual = container.indexOf(searchValue);

            expect(actual).to.equal(expected);

        });

        it('search: 3, size: 6 => [1, 4, 5, 7, 9, 3]', () => {
            const input = '3\n6\n1 4 5 7 9 3';
            const expected = 5;
            const { searchValue, container } = processInput(input);

            const actual = container.indexOf(searchValue);

            expect(actual).to.equal(expected);

        });


    });


})();
