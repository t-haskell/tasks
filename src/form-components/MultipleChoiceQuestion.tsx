import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    //State
    const [currChoice, setChoice] = useState<string>(options[0]);

    //Control
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        //View
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="dropdown-question">
                    <Form.Label>
                        {currChoice === expectedAnswer ? "✔️" : "❌"}
                    </Form.Label>
                    <Form.Select value={currChoice} onChange={updateChoice}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}
