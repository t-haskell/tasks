import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, rollDie1] = useState<number>(1);
    const [die2, rollDie2] = useState<number>(5);

    function endMessage(die1: number, die2: number): string {
        let message = "";
        if (die1 === 1 && die2 === 1) {
            message = "Lose";
        } else if (die1 === die2) {
            message = "Win";
        }
        return message;
    }
    return (
        <div>
            Two Dice
            <br />
            Left Die: <span data-testid="left-die">{die1}</span>
            <br />
            Right Die: <span data-testid="right-die">{die2}</span>
            <br />
            <Button onClick={() => rollDie1(d6)}>Roll Left</Button>
            <Button onClick={() => rollDie2(d6)}>Roll Right</Button>
            {endMessage(die1, die2)}
        </div>
    );
}
