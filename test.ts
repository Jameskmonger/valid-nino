import { TestFixture, TestCase, Expect } from "alsatian";

import validNino from "./index";

@TestFixture()
export class ValidNinoTests {

    @TestCase("BG")
    @TestCase("GB")
    @TestCase("KN")
    @TestCase("NK")
    @TestCase("NT")
    @TestCase("TN")
    @TestCase("ZZ")
    public shouldReturnFalseForFullBadPrefix(prefix: string) {
        const value = `${prefix}111111A`;
        const result = validNino(value);

        Expect(result).toBe(false);
    }

    @TestCase("D")
    @TestCase("F")
    @TestCase("I")
    @TestCase("Q")
    @TestCase("U")
    @TestCase("V")
    public shouldReturnFalseForFirstPartBadPrefix(prefixFirstPart: string) {
        const value = `${prefixFirstPart}A111111A`;
        const result = validNino(value);

        Expect(result).toBe(false);
    }

    @TestCase("D")
    @TestCase("F")
    @TestCase("I")
    @TestCase("Q")
    @TestCase("U")
    @TestCase("V")
    @TestCase("O")
    public shouldReturnFalseForSecondPartBadPrefix(prefixSecondPart: string) {
        const value = `A${prefixSecondPart}111111A`;
        const result = validNino(value);

        Expect(result).toBe(false);
    }

}