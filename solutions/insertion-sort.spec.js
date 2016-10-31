(() => {

    describe("Insertion Sort - Part 1", () => {

        function parseUnsortedNumbers(input) {
            return input.split("\n")
                .pop()
                .split(" ")
                .map(number => parseInt(number, 10));
        }

        function sortAroundIndex(numbers, index) {
            const indexValue = numbers[index];
            const previousIndexValue = numbers[index - 1];
            let preSortedNumbers = [...numbers];

            if (previousIndexValue > indexValue) {
                preSortedNumbers.splice(index - 1, 1, previousIndexValue);
            } else {

                preSortedNumbers.splice(index, 1, previousIndexValue);
            }
            return preSortedNumbers;
        }


        function sortNumbersByIndex(numbers, index) {

            let sortedNumbers = [];
            if (index === numbers.length - 1) {
                sortedNumbers = [...numbers.slice(0, -1), numbers[index - 1]];
            } else {
                sortedNumbers = sortAroundIndex(numbers, index);
            }

            return sortedNumbers;
        }

        it("2 4 6 8 3", () => {
            const input = "5\n2 4 6 8 3";
            const expected = [
                [2, 4, 6, 8, 8], [2, 4, 6, 6, 8], [2, 4, 4, 6, 8], [2, 3, 4, 6, 8]
            ];

            const unsortedNumbers = parseUnsortedNumbers(input);
            let history = [];
            let currentHistory = unsortedNumbers;

            for (let i = unsortedNumbers.length - 1; i > 0; i--) {
                currentHistory = sortNumbersByIndex(currentHistory, i);
                history = [...history, currentHistory];
            }

            console.log(history);

        });

    });

})();