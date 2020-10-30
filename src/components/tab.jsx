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
    const [actualObj, setActualObj] = useState([
        { tabnumber: "tab 1", tabcontent: "the same words in a different o" },
        { tabnumber: "tab 2", tabcontent: "the same words in a different o" },
        { tabnumber: "tab 3", tabcontent: "the same words in a different o" },
    ]);

    const [varObj, setVarObj] = useState(initialState);

    const handler = (e, value) => {
        setSelectedContent(value);
    };

    const getContent = () => {
        var content = [];
        for (var i = 0; i < varObj.length; i++) {
            content.push(
                <h3
                    onClick={ (e) => {
                        console.log(e);
                        handler(e, varObj[i][1]);
                        
                    }}
                >
                    {varObj[i][0]}
                </h3>
            );
        }
        console.log(content);
        return content;
    };

    const getContent2 = () => {
        var content = [];
        for (var i = 0; i < varObj.length; i++) {
            content.push(
                <h3
                    onClick={(e) => {
                        handler(e, actualObj[i].tabcontent);
                    }}
                >
                    {actualObj[i].tabnumber}
                </h3>
            );
        }
        return content;
    };

    return (
        <div>
            <div>{getContent()}</div>
            <div>{getContent2()}</div>
            <div id="tablist">
                {varObj.map((item, index) => {
                    return (
                        <h5
                            onClick={(e) => {
                                handler(e, varObj[index][1]);
                            }}
                            className="tabby"
                        >
                            {varObj[index][0]}
                        </h5>
                    );
                })}
            </div>
            <div id="contents"> {selectedContent} </div>
        </div>
    );
};

export default Tab;
