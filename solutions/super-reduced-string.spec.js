/* eslint-disable max-len */

/*

Steve has a string, , consisting of  lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after operation.

Steve wants to reduce  as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing 's non-reducible form!

Note: If the final string is empty, print Empty String .

Input Format

A single string, .

Constraints

Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

*/

import { expect } from 'chai';

describe('Super Reduced String', () => {

  function getTruncatedResult(input) {
    if (!input.length) {
      return input;
    }
    const workingArray = input.split('');

    for (let iterator = 0; iterator < workingArray.length; iterator++) {
      if (workingArray[iterator] === workingArray[iterator + 1]) {
        workingArray.splice(iterator, 2).join('');
        return getTruncatedResult(workingArray.join(''));
      }
    }
    return workingArray.join('');
  }

  function reducedString(input) {
    const currentString = getTruncatedResult(input);
    return currentString.length
      ? currentString
      : 'Empty String';
  }

  it('Simple case: aaabccddd => abd', () => {
    const input = 'aaabccddd';
    const expected = 'abd';
    const actual = reducedString(input);

    expect(actual).equals(expected);

  });

  it('Simple case: aabb => "Empty String"', () => {
    const input = 'aabb';
    const expected = 'Empty String';
    const actual = reducedString(input);

    expect(actual).equals(expected);

  });

  it('Simple case: aabbc => c', () => {
    const input = 'aabbc';
    const expected = 'c';
    const actual = reducedString(input);

    expect(actual).equals(expected);
  });

  it('Simple case: Empty String => Empty String', () => {
    const input = '';
    const expected = 'Empty String';
    const actual = reducedString(input);

    expect(actual).equals(expected);

  });

  it('Simple case: a => a', () => {
    const input = 'a';
    const expected = 'a';
    const actual = reducedString(input);

    expect(actual).equals(expected);

  });

  it('Simple case: ab => ab', () => {
    const input = 'ab';
    const expected = 'ab';
    const actual = reducedString(input);

    expect(actual).equals(expected);

  });

  it('Complex case: ggppppuurrjjooddwwyyllmmvvffddmmppxxaabbddddooppxxgghhhhvvnneeqqyyttbbffvvjjiiaammmmddddhhyywwqqiijj => Empty String', () => {
    const input = 'ggppppuurrjjooddwwyyllmmvvffddmmppxxaabbddddooppxxgghhhhvvnneeqqyyttbbffvvjjiiaammmmddddhhyywwqqiijj';
    const expected = 'Empty String';
    const actual = reducedString(input);

    expect(actual).equals(expected);

  });
});
