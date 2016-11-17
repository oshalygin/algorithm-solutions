/* eslint-disable no-undef */
import { expect } from 'chai';
(() => {

    describe('Nested Array Display', () => {

        function nestedLayerRepresentation(nestedCount) {
            const displayKey = '-';
            return displayKey.repeat(nestedCount);
        }

        function processArray(indexValue) {
            return [...indexValue];
        }

        function isArray(input) {
            return Array.isArray(input);
        }

        function persistNested(originalArray, newArray, nesting) {
            return [...originalArray, ...parseArray(newArray, nesting)]; //eslint-disable-line no-use-before-define
        }

        function persistUnnested(originalArray, newArray, nesting) {
            const deconstructedArray = newArray.map((arrayValue => {
                            return (nestedLayerRepresentation(nesting) + arrayValue.toString());
            }));

            return [...originalArray, ...deconstructedArray];
        }

        function persistValue(originalArray, newValue, nesting) {
            return [...originalArray, (nestedLayerRepresentation(nesting) + newValue.toString())];
        }

        function containsNesting(inputArray) {
             return !!inputArray.filter(isArray).length;
        }

        function parseArray(inputArray, nestedCount = 0) {
            let processedArray = [];

            for (let index = 0; index < inputArray.length; index = index + 1) {
                if (isArray(inputArray[index])) {
                    if (containsNesting(processArray(inputArray[index]))) {
                        processedArray = persistNested(processedArray, inputArray[index], (nestedCount + 1));
                    } else {
                        processedArray = persistUnnested(processedArray, inputArray[index], (nestedCount + 1));
                    }
                } else {
                    processedArray = persistValue(processedArray, inputArray[index], (nestedCount));
                }
            }
            return processedArray;
        }
        function arraysAreEqual(actualArray, expectedArray) {
            if (!Array.isArray(actualArray) || !Array.isArray(actualArray)) {
                return false;
            }

            if (actualArray.length !== expectedArray.length) {
                return false;
            }

            for (let iterator = 0; iterator < actualArray.length; iterator = iterator + 1) {
                if (actualArray[iterator] !== expectedArray[iterator]) {
                    return false;
                }
            }

            return true;
        }

        it('nested display representation properly displays "--" when the counter value is 2', () => {
            const actual = nestedLayerRepresentation(2);
            const expected = '--';
            expect(actual).to.equal(expected);
        });

        it('nested display representation properly displays an empty string when the counter value is 0', () => {
            const actual = nestedLayerRepresentation(0);
            const expected = '';
            expect(actual).to.equal(expected);
        });

        it('nested array returns false for containsNesting', () => {
            const actual = containsNesting([1, 3, 5]);
            expect(actual).to.be.false; //eslint-disable-line no-unused-expressions
        });


        it('nested array returns true for containsNesting', () => {
            const actual = containsNesting([1, 3, [5, 6]]);
            expect(actual).to.be.true; //eslint-disable-line no-unused-expressions
        });

        it('nested array returns true for containsNesting', () => {
            const actual = containsNesting([1, 3, [5, 6, [7]]]);
            expect(actual).to.be.true; //eslint-disable-line no-unused-expressions
        });

        it('assertion array properly asserts equivalence', () => {
            const actual = ['-1', '2', '3', '4', '5', '--6'];
            const expected = ['-1', '2', '3', '4', '5', '--6'];

            const assertion = arraysAreEqual(actual, expected);
            expect(assertion).to.be.true; //eslint-disable-line no-unused-expressions
        });

        it('if not passing an array to arraysAreEqual, returns false', () => {
            const actual = '1';
            const expected = ['-1', '2', '3', '4', '5', '--6'];

            const assertion = arraysAreEqual(actual, expected);
            expect(assertion).to.be.false; //eslint-disable-line no-unused-expressions
        });

        it('if the arrays are different length, arraysAreEqual returns false', () => {
            const actual = ['-1', '2', '3', '4', '5', '--6', '7'];
            const expected = ['-1', '2', '3', '4', '5', '--6'];

            const assertion = arraysAreEqual(actual, expected);
            expect(assertion).to.be.false; //eslint-disable-line no-unused-expressions
        });

        it('simplified scenario', () => {
            const data = [1, [2, 3, 4], [5, 6, 7, [8, 9, [10]]], 11, [12, 13], [[[[14]]]], 15];

            const expected = [
                '1',
                '-2',
                '-3',
                '-4',
                '-5',
                '-6',
                '-7',
                '--8',
                '--9',
                '---10',
                '11',
                '-12',
                '-13',
                '----14',
                '15'
            ];

            const actual = parseArray(data);
            const assertion = arraysAreEqual(actual, expected);
            expect(assertion).to.be.true; //eslint-disable-line no-unused-expressions
        });

    });

})();
