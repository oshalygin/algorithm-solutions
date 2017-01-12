/* eslint-disable max-len */

/*
  John's clothing store has a pile of  loose socks where each sock  is labeled with an integer, , denoting its color. He wants to sell as many socks as possible, but his customers will only buy them in matching pairs. Two socks, and , are a single matching pair if .

Given  and the color of each sock, how many pairs of socks can John sell?
*/

import { expect } from 'chai';
(() => {
  describe('Sock Merchant', () => {

    function getPairs(pairCount, workingSet) {

      if (workingSet.length === 0) {
        return pairCount;
      }

      const pairValue = workingSet.shift();
      const matchingPairIndex = workingSet.indexOf(pairValue);
      if (matchingPairIndex !== -1) {
        workingSet.splice(matchingPairIndex, 1);
        return getPairs(pairCount + 1, workingSet);
      }
      return getPairs(pairCount, workingSet);
    }

    it('Simple case: 10 20 20 10 10 30 50 10 20 => 3', () => {
      const input = '10 20 20 10 10 30 50 10 20';
      const expected = 3;
      const socks = input.split(' ').map(Number);

      const initialPairCount = 0;
      const actual = getPairs(initialPairCount, [...socks]);

      expect(actual).equals(expected);

    });

    it('Simple case: 10 20 20 10 10 30 50 10 50 => 4', () => {
      const input = '10 20 20 10 10 30 50 10 50';
      const expected = 4;
      const socks = input.split(' ').map(Number);

      const initialPairCount = 0;
      const actual = getPairs(initialPairCount, [...socks]);

      expect(actual).equals(expected);

    });

    it('Simple case: 30 30 30 30 30 30 30 30 30 30 30 30 => 6', () => {
      const input = '30 30 30 30 30 30 30 30 30 30 30 30';
      const expected = 6;
      const socks = input.split(' ').map(Number);

      const initialPairCount = 0;
      const actual = getPairs(initialPairCount, [...socks]);

      expect(actual).equals(expected);

    });
  });
})();
