import { expect } from 'chai';
(() => {

    describe('Insertion Sort Last Item - Part 1', () => {

        function parseUnsortedNumbers(input) {
            return input.split('\n')
                .pop()
                .split(' ')
                .map(number => parseInt(number, 10));
        }

        function getShiftedNumbers(numbers, unsortedNumber, indexToShift) {
            const shiftedNumbers = [...numbers];

            const currentNumber = numbers[indexToShift];
            const valueToSplice = currentNumber > unsortedNumber
                ? currentNumber
                : unsortedNumber;

            shiftedNumbers.splice(indexToShift + 1, 1, valueToSplice);
            return shiftedNumbers;
        }

        function arraysAreEqual(actualArray, expectedArray) {
            if (!Array.isArray(actualArray) || !Array.isArray(actualArray)) {
                return false;
            }

            if (actualArray.length !== expectedArray.length) {
                return false;
            }

            for (let iterator = 0; iterator < actualArray.length; iterator = iterator + 1) {
                for (let innerIterator = 0; innerIterator < actualArray[iterator]; innerIterator++) {
                    if (actualArray[iterator][innerIterator] !== expectedArray[iterator][innerIterator]) {
                        return false;
                    }
                }
            }

            return true;
        }

        function logOutArrayByLine(inputArray) {
            for (let iterator = 0; iterator < inputArray.length; iterator++) {
                console.log(inputArray[iterator].join(' ')); //eslint-disable-line no-console
            }
        }

        it('2 4 6 8 3', () => {
            const input = '5\n2 4 6 8 3';
            const expected = [
                [2, 4, 6, 8, 8], [2, 4, 6, 6, 8], [2, 4, 4, 6, 8], [2, 3, 4, 6, 8]
            ];

            const numbers = parseUnsortedNumbers(input);
            const unsortedNumber = numbers[numbers.length - 1];

            const history = [];
            let currentRow = numbers;

            for (let index = numbers.length - 2; index >= 0; index--) {
                currentRow = getShiftedNumbers(currentRow, unsortedNumber, index);
                history.push(currentRow);
            }

            logOutArrayByLine(history);

            const assertion = arraysAreEqual(history, expected);
            expect(assertion).to.be.true; //eslint-disable-line no-unused-expressions

        });

    });

})();
