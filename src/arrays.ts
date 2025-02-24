/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const tempList: number[] = [...numbers];
    if (tempList.length == 0) {
        return tempList;
    } else if (tempList.length == 1) {
        tempList.splice(1, 0, tempList[0]);
        return tempList;
    } else {
        const bookEnds: number[] = [tempList[0], tempList[tempList.length - 1]];
        return bookEnds;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numTriple = numbers.map((num: number) => num * 3);
    return numTriple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNums = numbers.map((num: string): string =>
        isNaN(parseInt(num)) ? "0" : num
    );
    return newNums.map(Number);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const tempList = amounts.map((cash: string): string =>
        cash[0] === "$" ? cash.slice(1, cash.length) : cash
    );
    const newNums = tempList.map((num: string): string =>
        isNaN(parseInt(num)) ? "0" : num
    );
    return newNums.map(Number);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestionMarks = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    );
    const makingUpper = noQuestionMarks.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );

    return makingUpper;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const final = words.filter((word: string): boolean => word.length < 4);
    return final.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const nonRGB = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );
    if (nonRGB.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const equation = addends.toString();
    const total = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0
    );
    const insertingPlus = equation.replaceAll(",", "+");
    return total + "=" + insertingPlus;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const copy = [...values];
    let index = values.findIndex((val: number): boolean => val < 0);
    if (index === -1) {
        index = values.length;
    }
    const firstHalf = values.slice(0, index);
    const firstHalfSum = firstHalf.reduce(
        (currTotal: number, value: number) => currTotal + value,
        0
    );
    copy.splice(index + 1, 0, firstHalfSum);

    return copy;
}
