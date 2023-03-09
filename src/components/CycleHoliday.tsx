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
const holidaysByDate: Record<Holiday, Holiday> = {
    Easter: "Memorial_Day",
    Memorial_Day: "Halloween",
    Halloween: "Christmas",
    Christmas: "New_Years_Eve",
    New_Years_Eve: "Easter"
};

export function CycleHoliday(): JSX.Element {
    const [currHoliday, setHoliday] = useState<Holiday>("Easter");

    return (
        <div>
            Cycle Holiday
            <br />
            Current Holiday: {currHoliday}
            <Button
                onClick={() => setHoliday(holidaysAlphabetically[currHoliday])}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => setHoliday(holidaysAlphabetically[currHoliday])}
            >
                Advance by Year
            </Button>
            Cycle Holiday
        </div>
    );
}
