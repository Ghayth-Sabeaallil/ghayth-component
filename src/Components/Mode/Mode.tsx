import { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"
import "./Mode.scss"

const Mode = () => {
    const [mode, setMode] = useState("Select Mode");

    const clickHandle: React.MouseEventHandler<HTMLInputElement> = (e) => {
        const mode = document.getElementById('mode');
        if (e.currentTarget.checked) {
            setMode("Dark Mode");
            mode?.classList.add("dark-mode")
            mode?.classList?.remove("light-mode")

        }
        else {
            setMode("Light Mode");
            mode?.classList?.remove("dark-mode")
            mode?.classList.add("light-mode")
        }
    };

    return (
        <div id="mode" className="mode">
            <h1>{mode}</h1>
            <ToggleSwitch handleClick={clickHandle} />
        </div >
    )
}

export default Mode