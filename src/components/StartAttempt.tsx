import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setProgress(true);
                    setAttempts(numAttempts - 1);
                }}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <br />
            <Button
                onClick={() => {
                    setAttempts(numAttempts + 1);
                }}
                disabled={inProgress}
            >
                Attempts Left: {numAttempts}
                <br />
                Mulligan?
            </Button>
        </div>
    );
}
