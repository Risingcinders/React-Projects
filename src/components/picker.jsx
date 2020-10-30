import React, { useState, useRef } from "react";
import "./styles.modules.css";

const Picker = (props) => {
    const [color, setColor] = useState("peachpuff");
    const textInput = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.whenSubmitted( color )
        textInput.current.value = ""
        
    };

    return (
        <div className="picker">
            <form onSubmit={ handleSubmit } >
                <label htmlFor="">
                    New Box Color:   
                    <input ref={textInput} type="text" onChange={ (e) => setColor(e.target.value) } />
                </label>
                <button type="submit">
                    Create Box
                </button>
            </form>
        </div>
    );
};

export default Picker;
