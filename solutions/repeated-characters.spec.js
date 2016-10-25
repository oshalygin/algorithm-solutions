// write a script that returns the number of occurrences
// of any given letter within the "Join the 42..." paragraph
// example: the letter "j" occurs twice within the paragraph
import { expect } from "chai";
(() => {

    describe("Repeated Letters", () => {

        function letterOccurencInSentence(sentence, letter) {
            return sentence
                .toLowerCase()
                .split("")
                .reduce((total, currentLetter) => {
                    if (letter === currentLetter) {
                        return total + 1;
                    }
                    return total;
                }, 0);

        }

        it("The letter j is repeated twice", () => {
            const input = "j";
            const sentence = "Join the 42 other donors who have already supported this project.  Every dollar helps."
            const expected = 2;
            const actual = letterOccurencInSentence(sentence, input);

            expect(actual).to.equal(expected);
        });

        it("The letter o is repeated eight times", () => {
            const input = "o";
            const sentence = "Join the 42 other donors who have already supported this project.  Every dollar helps."
            const expected = 8;
            const actual = letterOccurencInSentence(sentence, input);

            expect(actual).to.equal(expected);
        });

    });

})();
