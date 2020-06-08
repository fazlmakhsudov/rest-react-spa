import React, {useState} from "react";
import {ButtonGroup, ToggleButton} from "react-bootstrap";

function MyToggleButtons() {
    const [checked, setChecked] = useState(false);
    const setStatus = (el) => {
        el.status = !el.status;
    }
    const checkboxes = [
        {name: 'Line 1', value: '1', status: false},
        {name: 'Line 2', value: '2', status: false},
        {name: 'Line 3', value: '3', status: false},
    ];

    return (
        <>
            <ButtonGroup toggle>
                {checkboxes.map((checkbox, idx) => (
                    <ToggleButton
                        key={idx}
                        type="checkbox"
                        variant="secondary"
                        name={checkbox.name}
                        value={checkbox.value}
                        checked={checkbox.status}
                        onChange={(e) =>{
                            setStatus(checkbox);
                            // setChecked(e.currentTarget.
                            console.log(checkbox);
                        }}
                    >
                        {checkbox.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}

export default MyToggleButtons;