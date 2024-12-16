import React, { useState } from "react";
import "./calculator.css";

const calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const CInput = () => {
        setInput("");
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "="].map((btn) => (
                    <button
                        key={btn}
                        onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
                    >
                        {btn}
                    </button>
                ))}
                <button onClick={CInput}>C</button>
            </div>
        </div>
    );
};

export default calculator;
