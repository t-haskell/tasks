import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Christmas"
    | "Easter"
    | "New_Years_Eve"
    | "Memorial_Day"
    | "Halloween";

const holidaysAlphabetically: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "Memorial_Day",
    Memorial_Day: "New_Years_Eve",
    New_Years_Eve: "Christmas"
};
export function CycleHoliday(): JSX.Element {
    const [currHoliday, setHoliday] = useState<Holiday>("Easter");

    return <div>Cycle Holiday</div>;
}
