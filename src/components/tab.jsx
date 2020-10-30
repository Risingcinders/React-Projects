import React, { useState } from "react";
import "./styles.modules.css";

const Tab = (props) => {
    const [selectedContent, setSelectedContent] = useState(
        "Click a tab to update"
    );

    const initialState = [
        ["Tab 1", "Tab 1 Content is a bunch of words"],
        ["Tab 2", "Tab 2 Content is totally different words"],
        [
            "Tab 3",
            "Tab 3 Content is basically the same words in a different order",
        ],
    ];

    const [varObj, setVarObj] = useState(initialState);
    const handler = (e, value) => {
        setSelectedContent(value.peanut)
    }

    return (
        <div>
            <div id="tablist"> 
            { varObj.map( (item, index) => {
                return <h5
                onClick={ (e) => { handler(e, {peanut : varObj[index][1]}) } }
                className="tabby">
                {varObj[index][0]}
            </h5>
            } )}</div>
            <div id="contents"> {selectedContent} </div>
        </div>
    );
};

export default Tab;
