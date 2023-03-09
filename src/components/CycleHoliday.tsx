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

    function setHolidayEmoji(holiday: Holiday): string {
        let emoji = "";
        if (holiday === "Christmas") {
            emoji = "🎄";
        } else if (holiday === "Easter") {
            emoji = "🐣";
        } else if (holiday === "Halloween") {
            emoji = "🎃";
        } else if (holiday === "Memorial_Day") {
            emoji = "🇺🇸";
        } else {
            emoji = "🎆";
        }
        return emoji;
    }

    return (
        <div>
            Cycle Holiday
            <br />
            {currHoliday + ": " + setHolidayEmoji(currHoliday)}
            <br />
            <Button
                onClick={() => setHoliday(holidaysAlphabetically[currHoliday])}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(holidaysByDate[currHoliday])}>
                Advance by Year
            </Button>
        </div>
    );
}
