import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptLeft, setAttempts] = useState<string>("3");
    const [requestAttempts, setRequest] = useState<string>("0");
    const attemptsLeftNum = parseInt(attemptLeft) || 0;

    function updateNumAttemptsRequest(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setRequest(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <h5>Attempts left: {attemptLeft}</h5>
            <Form.Group controlId="attempt-request">
                <Form.Label>How many attempts would you like?</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={updateNumAttemptsRequest}
                />
            </Form.Group>
        </div>
    );
}
