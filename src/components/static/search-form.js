import React from "react";
import MyToggleButtons from "./my-toggle-buttons";

function SearchForm(props) {
    return (
        <div style={{paddingTop: "1%"}}>
            <input type='date'/>
            <MyToggleButtons/>
        </div>
    );
}

export default SearchForm;