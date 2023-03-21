import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptLeft, setAttempts] = useState<string>("3");
    const [requestAttempts, setRequest] = useState<string>("0");

    function updateNumAttemptsRequest(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        if (event.target.value !== "") {
            setRequest(event.target.value);
        }
        // if (requestAttempts !== "") {
        //     //Doesnt allow for the number of attempts to be changed if input is an invalid integer
        //     setRequest(requestAttempts);
        // }
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
            <Button
                onClick={() =>
                    setAttempts((parseInt(attemptLeft) - 1).toString())
                }
                disabled={parseInt(attemptLeft) <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    if (parseInt(requestAttempts) !== -1) {
                        setAttempts(
                            (
                                parseInt(requestAttempts) +
                                parseInt(attemptLeft)
                            ).toString()
                        );
                    }
                }}
            >
                Gain
            </Button>
        </div>
    );
}

//parseInt(requestAttempts) !== -1 ? setAttempts((parseInt(requestAttempts) +parseInt(attemptLeft)).toString()) : setAttempts(attemptLeft)
