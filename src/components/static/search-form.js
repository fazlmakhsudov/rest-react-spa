import React from "react";
import MyToggleButtons from "./my-toggle-buttons";

function SearchForm(props) {
    return (
        <div style={{paddingTop: "1%", width: "45%"}}>
            <input type='date'/>
            <MyToggleButtons style={{width: "300px"}}/>
        </div>
    );
}

export default SearchForm;