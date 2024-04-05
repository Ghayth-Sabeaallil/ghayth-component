import { useState } from "react"
import "./ToogleSwitch.scss"

const ToogleSwitch = () => {
    const [mode, setMode] = useState("Select Mode");
    const bg = document.getElementById('bg');

    const clickHandle: React.MouseEventHandler<HTMLInputElement> = (e) => {

        if (e.currentTarget.checked) {
            setMode("Dark Mode");
            bg?.classList.add("dark")
            bg?.classList?.remove("light")

        }
        else {
            setMode("Light Mode");
            bg?.classList?.remove("dark")
            bg?.classList.add("light")
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