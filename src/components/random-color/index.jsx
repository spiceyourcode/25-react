import styles from  "./styles.module.css";
import { useState } from "react";

function RandomColor() {
    const [randomColor, setRandomColor] = useState("");

    function generateHexColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
        setRandomColor("#" + randomColor);
    }
    function generateRgbColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setRandomColor(`rgb(${r},${g},${b})`);
    }

    return (
        <>
            <div className="container" style={{ backgroundColor: randomColor }}>
                <div className="controls">
                    <button onClick={generateHexColor}>Create HEX Color</button>
                    <button onClick={generateRgbColor}>Create RGB Color</button>
                    <button onClick={() => generateHexColor() || generateRgbColor()}>
                        Generate Random Color
                    </button>
                </div>
                <div className="display">
                    <p>Current Color: {randomColor}</p>
                </div>
            </div>
        </>
    );
}

export default RandomColor;
