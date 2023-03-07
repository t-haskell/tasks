import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [currType, changeType] = useState<QuestionType>(
        "short_answer_question"
    );

    return (
        <div>
            <Button
                onClick={() =>
                    currType === "multiple_choice_question"
                        ? changeType("short_answer_question")
                        : changeType("multiple_choice_question")
                }
            >
                Change Type
            </Button>
            {currType}
        </div>
    );
}
