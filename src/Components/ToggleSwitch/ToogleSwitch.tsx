import { useState } from "react"
import "./ToogleSwitch.scss"

const ToogleSwitch = () => {
    const [mode, setMode] = useState("Select Mode");
    const root = document.getElementById('root');

    const clickHandle: React.MouseEventHandler<HTMLInputElement> = (e) => {
        if (e.currentTarget.checked) {
            setMode("Dark Mode");
            if (root) {
                root.style.backgroundColor = "#4d4d4d"
                root.style.color = "#EEEEEE"
            }

        }
        else {
            setMode("Light Mode");
            if (root) {
                root.style.backgroundColor = "#EEEEEE"
                root.style.color = "#000000"
            }
        }
    };
    return (
        <>
            <h1>{mode}</h1>
            <label className="switch">
                <input onClick={clickHandle} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default ToogleSwitch