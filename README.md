# valid-nino

Validate a UK National Insurance number. Unit tested with [alsatian](https://github.com/alsatian-test/alsatian).

## Installation

    npm install valid-nino

## Usage

    import validNino from "valid-nino";

    validNino("AB123456C"); // true
    
    validNino("TN50X"); // false

## Logic

> The prefix can be any two letters, except that the first letter cannot be D, F, I, Q, U or V; and the second letter cannot be D, F, I, O, Q, U or V. In addition, there are seven two-letter combinations that are specifically disallowed, these being BG, GB, KN, NK, NT, TN and ZZ.
>
> The second part of the NI number is a straightforward string of exactly six digits, that is, a number between 000000 and 999999. It never contains leading spaces or other extraneous symbols.
>
> The suffix is either a single letter, in the range A to D, or a space. Although it's always present (if it's a space, the NI number is not trimmed), it is not required for uniqueness. So, if AB123456C is a valid number, then no other number will begin with AB123456.

Source: http://www.hexcentral.com/articles/validate_ni.htm

## License

[Licensed under the MIT Licence](LICENSE)