/* eslint-disable no-undef */
import { expect } from "chai";
(() => {
//Hacky on the spot solution -- to be refactored
    describe("Captions", () => {
        it("Most common word", () => {
            function mostCommonWord(arrayOfCaptions) {
                let arrayOfWords = [];
                for (let sentence of arrayOfCaptions) {
                    const wordsArray = sentence.split(" ");

                    for (let word of wordsArray) {
                        arrayOfWords.push(word.toLowerCase());
                    }


                }
                arrayOfWords.sort();
                let wordsCollection = {};
                for (let i = 0; i < arrayOfWords.length; i++) {
                    const word = arrayOfWords[i];

                    if (!wordsCollection[word]) {
                        wordsCollection[word] = {
                            word: word,
                            count: 1
                        }
                    }
                    else {
                        wordsCollection[word].count = wordsCollection[word].count + 1;
                    }
                }
                let result = { count: 0 };

                for (let word in wordsCollection) {
                    if (wordsCollection[word].count > result.count) {
                        result = wordsCollection[word];
                    }
                }

                return result;
            }

            const expected = "time";

            const captions = [
                "Hello World",
                "I love time square!",
                "city of light",
                "i'm in time square right now.",
                "#nyc", "Time Square is so huge",
                "i love this city",
                "this is great"
            ];

            const word = mostCommonWord(captions);
            const actual = word.word;
            expect(actual).to.equal(expected);
        });
    });

})();
