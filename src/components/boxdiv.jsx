import React from "react";
import "./styles.modules.css";

const Boxdiv = (props) => {
    const boxStyle = {
        padding: "50px",
        background: props.incomingColor,
        height: "50px",
        width: "50px",
    };

    return <div style={boxStyle}></div>;
};

export default Boxdiv;
