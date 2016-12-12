/* eslint-disable max-len */
/*

Consider two sets of positive integers,  and . We say that a positive integer, , is between sets  and  if the following conditions are satisfied:

All elements in  are factors of .
 is a factor of all elements in .
Given  and , find and print the number of integers (i.e., possible 's) that are between the two sets.

Input Format

The first line contains two space-separated integers describing the respective values of  (the number of elements in set ) and  (the number of elements in set ).
The second line contains  distinct space-separated integers describing .
The third line contains  distinct space-separated integers describing .

Constraints

Output Format

Print the number of integers that are considered to be between  and .

Sample Input

2 3
2 4
16 32 96
Sample Output

3
Explanation

The integers that are between  and  are , , and .

*/

import { expect } from 'chai';

describe('Between Two Sets', () => {

  function gcd(firstValue, secondValue) {
    return (secondValue === 0)
      ? firstValue
      : gcd(secondValue, firstValue % secondValue);
  }

  function highestCommonFactor(set) {
    return set.reduce((previous, next) => {
      return gcd(previous, next);
    }, 0);
  }

  function getMultiples(number, set) {
    const values = Array(number)
      .fill()
      .map((value, index) => index + 1);

    return values.filter(value => set.every(setValue => !(value % setValue)));
  }

  function numberOfFactors(underlyingSet, multiples) {
    return multiples
      .filter(value => underlyingSet.every(setValue => !(setValue % value)))
      .length;
  }

  it('Simple case:  {2,4} & {16,32,96}', () => {
    const expected = 3;
    const input = '2 3\n2 4\n16 32 96';
    const setA = input.split('\n')[1].split(' ').map(Number);
    const setB = input.split('\n')[2].split(' ').map(Number);

    const hcf = highestCommonFactor(setB);
    const multiples = getMultiples(hcf, setA);
    const actual = numberOfFactors(setB, multiples);

    expect(actual).equals(expected);

  });
});
