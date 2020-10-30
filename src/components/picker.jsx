import React, { useState } from "react";
import "./styles.modules.css";

const Picker = (props) => {
    const [color, setColor] = useState("peachpuff");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.whenSubmitted( color )
    };

    return (
        <div className="picker">
            <form onSubmit={ handleSubmit }>
                <label htmlFor="">
                    New Box Color:   
                    <input type="text" onChange={ (e) => setColor(e.target.value) } />
                </label>
                <button type="submit">
                    Create Box
                </button>
            </form>
        </div>
    );
};

export default Picker;
