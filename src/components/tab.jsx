import React, { useState } from "react";
import "./styles.modules.css";

const Tab = (props) => {
    const [selectedContent, setSelectedContent] = useState("Click a tab to update")

    const initialState = [
        ["Tab 1", "Tab 1 Content is a bunch of words"],
        ["Tab 2", "Tab 2 Content is totally different words"],
        [
            "Tab 3",
            "Tab 3 Content is basically the same words in a different order"
        ]
    ]

    const [varObj, setVarObj] = useState();

    const refreshContent = (b) => {
        setSelectedContent(varObj[b])
    }

    const genTabs = (arr) => {
        for (var i = 0; i < 3; i++) {
            <h5 className="tabby" onClick={refreshContent(i)} > {arr[i]} </h5>;
        }
    };

    return (
        <div>
            {/* <div> { genTabs(varObj) } </div> */}
            <div id="contents"> { selectedContent }  </div>
        </div>
    );
};

export default Tab;
