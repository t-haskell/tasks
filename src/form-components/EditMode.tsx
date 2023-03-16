import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //State
    const [editMode, changeMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    //Control
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        changeMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <h5>
                {username + (student ? " is a student" : " is not a student")}{" "}
            </h5>
            <Form.Group controlId="usernameInput">
                <div>
                    <Form.Switch
                        type="switch"
                        id="edit-toggle"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={updateEditMode}
                    />
                </div>
                {editMode && (
                    <div>
                        <Form.Control
                            value={username}
                            onChange={updateName}
                            disabled={!editMode}
                        />
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="User is a Student?"
                            checked={student}
                            onChange={updateStudent}
                            disabled={!editMode}
                        />
                    </div>
                )}
            </Form.Group>
        </div>
    );
}
