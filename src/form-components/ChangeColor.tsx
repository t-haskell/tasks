import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

//Adding my custom colors
export const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "cyan",
    "magenta",
    "purple"
];

export function ChangeColor(): JSX.Element {
    //State
    const [currColor, setColor] = useState<string>(COLORS[0]);

    //Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    //View
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Group controlId="colored-buttons" as={Row}>
                    <Form.Label column sm={2}></Form.Label>
                    {COLORS.map((color: string) => (
                        <Col key={color}>
                            <Form.Check
                                inline
                                type="radio"
                                onChange={updateColor}
                                id={color + " Button"}
                                label={color}
                                style={{ backgroundColor: color }}
                                value={color}
                                checked={currColor === color}
                            />
                        </Col>
                    ))}
                    <Form.Text
                        data-testid="colored-box"
                        style={{ backgroundColor: currColor }}
                    >
                        You have chosen {currColor}
                    </Form.Text>
                </Form.Group>
            </div>
        </div>
    );
}
