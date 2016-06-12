// Roy wanted to increase his typing speed for programming contests. So, his friend advised him to type the sentence "The quick brown fox jumps over the lazy dog" repeatedly, because it is a pangram. (Pangrams are sentences constructed by using every letter of the alphabet at least once.)

// After typing the sentence several times, Roy became bored with it. So he started to look for other pangrams.

// Given a sentence , tell Roy if it is a pangram or not.

// Input Format

// Input consists of a string .

// Constraints
// Length of  can be at most   and it may contain spaces, lower case and upper case letters. Lower-case and upper-case instances of a letter are considered the same.

// Output Format

// Output a line containing pangram if  is a pangram, otherwise output not pangram.

(() => {

    describe("Pangams", () => {


        function determineIfPangram(sentence) {
            let sanitizedString = sanitizeSentence(sentence);
            let alphabetArray = addUniqueCharacterLettersToCharacterArray(sanitizedString);

            return allAlphabetCharactersExist(alphabetArray);
        }

        function addUniqueCharacterLettersToCharacterArray(lettersString) {
            let alphabeticArray = [];
            for (let index = 0; index < lettersString.length; index++) {
                var characterCode = lettersString.charCodeAt(index);

                if (characterCode <= 122 && characterCode >= 97) {
                    if (!alphabeticArray.includes(characterCode)) {
                        alphabeticArray.push(characterCode);
                    }
                }
            }
            return alphabeticArray;
        }

        function sanitizeSentence(sentence) {
            return sentence.toLowerCase().split(" ").join("");
        }

        function allAlphabetCharactersExist(arrayOfCharacterCodes) {
            let numberOfLettersInTheAlphabet = 26;
            return arrayOfCharacterCodes.length === numberOfLettersInTheAlphabet
                ? true
                : false;
        }

        function consoleOutput(isPangram) {
            return isPangram
                ? console.log("pangram")
                : console.log("not pangram")
        }

        it("'The quick brown fox jumps over the lazy dog': is a pangram", () => {
            let sentence = "The quick brown fox jumps over the lazy dog";
            const isPangram = determineIfPangram(sentence);

            expect(isPangram).toBeTruthy();
        });

        it("'We promptly judged antique ivory buckles for the next prize': is a pangram", () => {
            let sentence = "We promptly judged antique ivory buckles for the next prize";
            const isPangram = determineIfPangram(sentence);

            expect(isPangram).toBeTruthy();
        });

        it("'Derp lord': not pangram", () => {
            let sentence = "Derp lord";
            const isNotPangram = determineIfPangram(sentence);

            expect(isNotPangram).toBeFalsy();
        });

        it("'We promptly judged antique ivory buckles for the prize': not pangram", () => {
            let sentence = "We promptly judged antique ivory buckles for the prize";
            const isNotPangram = determineIfPangram(sentence);

            expect(isNotPangram).toBeFalsy();
        });

    });

})();
