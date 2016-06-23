(() => {

    // describe("Anagram", () => {

    function parseString(input) {
        var arrayOfStrings = input.split("\n");
        arrayOfStrings.shift();
        return arrayOfStrings;
    }

    function splitIntoTwoStrings(stringInput) {
        let pairOfStrings = []
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

    function largestStringValue(firstString, secondString) {
        let firstStringValue = calculateStringCharacterValue(firstString);
        let secondStringValue = calculateStringCharacterValue(secondString);

        return (firstStringValue > secondStringValue)
            ? firstStringValue
            : secondStringValue;
    }

    //     it("Test Case: 6 aaabbb ab abc mnop xyyx xaxbbbxx", () => {
    const input = "6\n\aaabbb\n\nab\nabc\nmnop\nxyyx\nxaxbbbxx";
    calculateStringCharacterValue("aabb");
    console.log("derp");

    //     });
    // });

})();