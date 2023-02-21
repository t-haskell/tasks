/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    // eslint-disable-next-line prefer-const
    let finalVal = temperature - 32;
    finalVal = finalVal * (5 / 9);
    return finalVal;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let finalVal: int = 0;
    if (first > 0) {
        finalVal += first;
    }
    if (second > 0) {
        finalVal += second;
    }
    if (third > 0) {
        finalVal += third;
    }

    return finalVal;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    message.toUpperCase();
    message.concat("?");
    return message;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message[message.length - 1] == "?" ? true : false;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    return true;
}
