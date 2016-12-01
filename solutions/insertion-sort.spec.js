(() => {

  describe('Insertion Sort - Part 1', () => {

    function parseUnsortedNumbers(input) {
      return input.split('\n')
        .pop()
        .split(' ')
        .map(number => parseInt(number, 10));
    }

    function sortAroundIndex(numbers, index) {
      const indexValue = numbers[index];
      const previousIndexValue = numbers[index - 1];
      const preSortedNumbers = [...numbers];

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

    it('2 4 6 8 3', () => {
      const input = '5\n2 4 6 8 3';
      const expected = [ //eslint-disable-line no-unused-vars
        [2, 4, 6, 8, 8], [2, 4, 6, 6, 8], [2, 4, 4, 6, 8], [2, 3, 4, 6, 8]
      ];

      const unsortedNumbers = parseUnsortedNumbers(input);
      let history = [];
      let currentHistory = unsortedNumbers;

      for (let iterator = unsortedNumbers.length - 1; iterator > 0; iterator--) {
        currentHistory = sortNumbersByIndex(currentHistory, iterator);
        history = [...history, currentHistory];
      }

      console.log(history); //eslint-disable-line no-console

    });

  });

})();
