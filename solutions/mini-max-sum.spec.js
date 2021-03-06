import { expect } from 'chai';
(() => {

  describe('Mini-min max sum', () => {

    function sum(integers, excluded) {
      let oneExclusionPerformed = false;
      return integers.reduce((previous, current) => {
        if (current === excluded && !oneExclusionPerformed) {
          oneExclusionPerformed = true;
          return previous;
        }
        return previous + current;
      }, 0);
    }

    function calculateMinMax(integers) {
      const minIntegerValue = Math.min(...integers);
      const maxIntegerValue = Math.max(...integers);

      const max = sum(integers, minIntegerValue);
      const min = sum(integers, maxIntegerValue);
      return [max, min];
    }

    it('1 2 3 4 5 => 10 14', () => {
      const input = '1 2 3 4 5';
      const expectedMin = 10;
      const expectedMax = 14;

      const integers = input
        .split(' ')
        .map(Number); //eslint-disable-line max-nested-callbacks


      const miniMax = calculateMinMax(integers);

      const actualMax = miniMax[0];
      const actualMin = miniMax[1];

      expect(actualMin).to.equal(expectedMin);
      expect(actualMax).to.equal(expectedMax);

    });

    it('5 8 9 3 2 => 18 25', () => {
      const input = '5 8 9 3 2';
      const expectedMin = 18;
      const expectedMax = 25;

      const integers = input
        .split(' ')
        .map(integer => parseInt(integer, 10)); //eslint-disable-line max-nested-callbacks


      const miniMax = calculateMinMax(integers);

      const actualMax = miniMax[0];
      const actualMin = miniMax[1];

      expect(actualMin).to.equal(expectedMin);
      expect(actualMax).to.equal(expectedMax);

    });

    it('1 1 1 1 1 => 4 4', () => {
      const input = '1 1 1 1 1';
      const expectedMin = 4;
      const expectedMax = 4;

      const integers = input
        .split(' ')
        .map(integer => parseInt(integer, 10)); //eslint-disable-line max-nested-callbacks


      const miniMax = calculateMinMax(integers);

      const actualMax = miniMax[0];
      const actualMin = miniMax[1];

      expect(actualMin).to.equal(expectedMin);
      expect(actualMax).to.equal(expectedMax);

    });


  });

})();
