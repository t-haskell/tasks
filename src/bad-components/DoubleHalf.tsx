import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

interface doubleHalfProp {
    setDhValue: (newValue: number) => void;
}

function Doubler({ setDhValue }: doubleHalfProp): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue }: doubleHalfProp): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue}></Doubler>
            <Halver setDhValue={setDhValue}></Halver>
        </div>
    );
}
