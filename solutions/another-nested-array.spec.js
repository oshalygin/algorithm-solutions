/* eslint-disable */
//This is a solution by Michael, used for recordkeeping reference.
import { expect } from "chai";
(() => {
    describe("Another Nested Array", () => {
        function pp(a, level = 0) {
            for (var i = 0; i < a.length; i++) {
                if (Object.prototype.toString.call(a[i]) === '[object Array]') {
                    pp(a[i], level + 1)
                } else {
                    console.log((level ? Array(level + 1).join('-') : '') + a[i]);
                }
            }
        }

        function pp2(a, level = 0) {
            const b = []

            a.forEach(item => {
                if (Array.isArray(item)) {
                    b.push(...pp2(item, level + 1));
                } else {
                    b.push((level ? Array(level + 1).join('-') : '') + item);
                }
            });
            return b;
        }

        it("simplified scenario with alternate solution", () => {
            const a = [21, [1, 2, 3, [4, 5, 6],
                    [7, 8, [16, 17], 18, [19, 20]]
                ],
                [9, 10, [11, 12, [13, 14], 15]]
            ];

            var b = pp2(a);

        });

    });
})();