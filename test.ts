import { TestFixture, TestCase, Test, Expect } from "alsatian";

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

    @TestCase("AB")
    @TestCase("XY")
    @TestCase("CE")
    @TestCase("NY")
    @TestCase("OX")
    @TestCase("ZA")
    public shouldReturnTrueForValidPrefix(prefix: string) {
        const value = `${prefix}111111A`;
        const result = validNino(value);

        Expect(result).toBe(true);
    }

    @TestCase("E")
    @TestCase("X")
    @TestCase("5")
    @TestCase("L")
    @TestCase("0")
    @TestCase("J")
    public shouldReturnFalseForBadSuffix(suffix: string) {
        const value = `AB111111${suffix}`;
        const result = validNino(value);

        Expect(result).toBe(true);
    }

    @TestCase("A")
    @TestCase("B")
    @TestCase("C")
    @TestCase("D")
    public shouldReturnTrueForValidSuffix(suffix: string) {
        const value = `AB111111${suffix}`;
        const result = validNino(value);

        Expect(result).toBe(true);
    }

    @Test()
    public shouldReturnTrueForSuffixSpace() {
        const result = validNino(`AB111111 `);
        
        Expect(result).toBe(true);
    }

}