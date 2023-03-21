import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGiven] = useState<string>("");

    function updateGiven(event: React.ChangeEvent<HTMLInputElement>) {
        setGiven(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="answer-guess">
                    <Form.Label>Take a guess:</Form.Label>
                    <Form.Control value={givenAnswer} onChange={updateGiven} />
                </Form.Group>
                <div>{expectedAnswer === givenAnswer ? "✔️" : "❌"}</div>
            </div>
        </div>
    );
}
