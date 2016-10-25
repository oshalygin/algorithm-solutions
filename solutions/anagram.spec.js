import { expect } from "chai";
(() => {

    // describe("Anagram", () => {
    Array.prototype.unique = function () {
        var returnArray = [];

        for (let element of this) {
            if (!returnArray.includes(element)) {
                returnArray.push(element);
            }
        }
        return returnArray;
    }

    function parseString(input) {
        var arrayOfStrings = input.split("\n");
        arrayOfStrings.shift();
        return arrayOfStrings;
    }

    function splitIntoTwoStrings(stringInput) {
        let pairOfStrings = [];
        let lengthOfString = stringInput.length;
        let firstString = stringInput.slice(0, lengthOfString / 2);
        let secondString = stringInput.slice(lengthOfString / 2, lengthOfString);
        pairOfStrings.push(firstString, secondString);

        return pairOfStrings;
    }

    function calculateStringCharacterValue(stringInput) {
        let total = 0;
        for (let character in stringInput) {
            total += character.charCodeAt(0);
        }

        return total;
    }

    function differenceBetweenTwoStrings(firstString, secondString) {
        let firstStringValue = calculateStringCharacterValue(firstString);
        let secondStringValue = calculateStringCharacterValue(secondString);
        return Math.abs(firstStringValue - secondStringValue);
    }

    // function lowestStringValue(firstString, secondString) {
    //     let firstStringValue = calculateStringCharacterValue(firstString);
    //     let secondStringValue = calculateStringCharacterValue(secondString);

    //     return (firstStringValue > secondStringValue)
    //         ? firstStringValue
    //         : secondStringValue;
    // }

    function getArrayOfCharacterCodeValuesFromString(stringInput) {
        let characterArray = stringInput.split("").map(x => x.charCodeAt(0)).unique();

        return characterArray;
    }

    function getNumberOfCharacterSwitches(valueDifference, characters) {
        const alreadyAnAnagram = -1;
        if (valueDifference === 0) {
            return alreadyAnAnagram;
        }

    }

    function calculateAnagram(testCase){
        let pairOfStrings = splitIntoTwoStrings(testCase);
        let characterValueDifference = differenceBetweenTwoStrings(pairOfStrings[0], pairOfStrings[1]);
        // let lowestStringValue = lowestStringValue(pairOfStrings[0], pairOfStrings[1]);
    }


    function calculateAnagramForTestCases(input) {
        let arrayOfTestCases = parseString(input);
        for (let testCase of arrayOfTestCases) {

        }
    }

    //     it("Test Case: 6 aaabbb ab abc mnop xyyx xaxbbbxx", () => {
    const input = "6\n\aaabbb\n\nab\nabc\nmnop\nxyyx\nxaxbbbxx";
    let actual = calculateAnagram(input);


    //     });
    // });

})();