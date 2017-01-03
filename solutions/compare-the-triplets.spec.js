/* eslint-disable max-len */

/*
  Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

  We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

  Your task is to find their comparison scores by comparing  with ,  with , and  with .

  If , then Alice is awarded  point.
  If , then Bob is awarded  point.
  If , then neither person receives a point.
  Given  and , can you compare the two challenges and print their respective comparison points?

  Input Format

  The first line contains  space-separated integers, , , and , describing the respective values in triplet . 
  The second line contains  space-separated integers, , , and , describing the respective values in triplet .

  Constraints

  Output Format

  Print two space-separated integers denoting the respective comparison scores earned by Alice and Bob.

  Sample Input

  5 6 7
  3 6 10
  Sample Output

  1 1 
  Explanation

  In this example:

  Now, let's compare each individual score:

  , so Alice receives  point.
  , so nobody receives a point.
  , so Bob receives  point.
  Alice's comparison score is , and Bob's comparison score is . Thus, we print 1 1 (Alice's comparison score followed by Bob's comparison score) on a single line.

*/

import { expect } from 'chai';

describe('Compare the triplets', () => {

  function getScore(firstSet, secondSet) {
    return firstSet.reduce((previous, current, index) => {
      if (current > secondSet[index]) {
        return previous + 1;
      }
      return previous;
    }, 0);
  }

  it('Simple Case: 1 1', () => {
    const expected = '1 1';
    const aliceInput = '5 6 7';
    const bobInput = '3 6 10';

    const aliceRanking = aliceInput.split(' ').map(Number);
    const bobRanking = bobInput.split(' ').map(Number);

    const alicePoints = getScore(aliceRanking, bobRanking);
    const bobPoints = getScore(bobRanking, aliceRanking);

    const actual = `${alicePoints} ${bobPoints}`;
    expect(actual).equals(expected);

  });

  it('Simple Case: 3 0', () => {
    const expected = '3 0';
    const aliceInput = '9 10 11';
    const bobInput = '3 6 10';

    const aliceRanking = aliceInput.split(' ').map(Number);
    const bobRanking = bobInput.split(' ').map(Number);

    const alicePoints = getScore(aliceRanking, bobRanking);
    const bobPoints = getScore(bobRanking, aliceRanking);

    const actual = `${alicePoints} ${bobPoints}`;
    expect(actual).equals(expected);

  });

  it('Simple Case: 0 3', () => {
    const expected = '0 3';
    const aliceInput = '1 5 9';
    const bobInput = '3 6 10';

    const aliceRanking = aliceInput.split(' ').map(Number);
    const bobRanking = bobInput.split(' ').map(Number);

    const alicePoints = getScore(aliceRanking, bobRanking);
    const bobPoints = getScore(bobRanking, aliceRanking);

    const actual = `${alicePoints} ${bobPoints}`;
    expect(actual).equals(expected);

  });

  it('Simple Case: 1 0', () => {
    const expected = '1 0';
    const aliceInput = '4 6 10';
    const bobInput = '3 6 10';

    const aliceRanking = aliceInput.split(' ').map(Number);
    const bobRanking = bobInput.split(' ').map(Number);

    const alicePoints = getScore(aliceRanking, bobRanking);
    const bobPoints = getScore(bobRanking, aliceRanking);

    const actual = `${alicePoints} ${bobPoints}`;
    expect(actual).equals(expected);

  });
});
