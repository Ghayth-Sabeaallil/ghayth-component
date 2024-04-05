import { useState } from "react"
import "./ToogleSwitch.scss"

const ToogleSwitch = () => {
    const [mode, setMode] = useState("Select Mode");
    const bg = document.getElementById('bg');

    const clickHandle: React.MouseEventHandler<HTMLInputElement> = (e) => {
        if (e.currentTarget.checked) {
            setMode("Dark Mode");
            if (bg) {
                bg.style.backgroundColor = "#4d4d4d"
                bg.style.color = "#EEEEEE"
            }

        }
        else {
            setMode("Light Mode");
            if (bg) {
                bg.style.backgroundColor = "#EEEEEE"
                bg.style.color = "#000000"
            }
        }
    };
    return (
        <>
            <div className="halv" id="bg"><h1>{mode}</h1>
                <label className="switch">
                    <input onClick={clickHandle} type="checkbox" />
                    <span className="slider round"></span>
                </label></div>

        </>
    )
}

export default ToogleSwitch