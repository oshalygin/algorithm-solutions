(() => {

    describe("Insertion Sort Last Item - Part 1", () => {

        function parseUnsortedNumbers(input) {
            return input.split("\n")
                .pop()
                .split(" ")
                .map(number => parseInt(number, 10));
        }

        function getShiftedNumbers(numbers, unsortedNumber, indexToShift) {
            let shiftedNumbers = [...numbers];

            const currentNumber = numbers[indexToShift];
            let valueToSplice = currentNumber > unsortedNumber
                ? currentNumber
                : unsortedNumber;

            shiftedNumbers.splice(indexToShift + 1, 1, valueToSplice);
            return shiftedNumbers;
        }
        function logOutArrayByLine(inputArray){

        }

        it("2 4 6 8 3", () => {
            const input = "5\n2 4 6 8 3";
            const expected = [
                [2, 4, 6, 8, 8], [2, 4, 6, 6, 8], [2, 4, 4, 6, 8], [2, 3, 4, 6, 8]
            ];

            let numbers = parseUnsortedNumbers(input);
            const unsortedNumber = numbers[numbers.length - 1];

            let history = [];
            let currentRow = numbers;

            for (let index = numbers.length - 2; index >= 0; index--) {
                currentRow = getShiftedNumbers(currentRow, unsortedNumber, index);
                history.push(currentRow);
            }


            console.log(history);

        });

    });

})();