import { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import styled from "styled-components"
import {
    enable as enableDarkMode,
    disable as disableDarkMode,
} from 'darkreader';

const DarkIcon = styled(MdDarkMode)`
    position: absolute;
    right: 0;
    margin-right: 8rem;
    :hover {
        cursor: pointer
    }
`

const LightIcon = styled(MdLightMode)`
    position: absolute;
    right: 0;
    margin-right: 8rem;
    :hover {
        cursor: pointer
    }
`

const Colormode = () => {
    const [mode, setMode] = useState(localStorage.getItem("mode") ?? "light");

    const updateColor = () => {
        setMode(mode === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        if (mode === "dark") enableDarkMode({ brightness: 100, contrast: 100, sepia: 0, }); else disableDarkMode();
        localStorage.setItem("mode", mode);
    }, [mode])

    return <>{mode === "dark" ?
        <DarkIcon className="text-primary" onClick={updateColor} />
        : <LightIcon className="text-primary" onClick={updateColor} />}</>
}

export default Colormode;