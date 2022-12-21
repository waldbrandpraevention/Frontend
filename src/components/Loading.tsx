import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import styled from "styled-components";
import Logo from "../assets/img/Logo";
import config from "../config/config";
import ErrorAlert from "./alerts/ErrorAlert";
import WarnAlert from "./alerts/WarnAlert";

const Main = styled.div`
    background: var(--bs-gray-200);
    height: 100vh;
    width: 100%;
    align-items: center;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
`

const StyledLogo = styled(Logo)`
    height: 64px;
    width: 64px;
    margin-bottom: 2em;
`

const StyledSpinner = styled(ImSpinner2)`
    height: 32px;
    width: 32px;
    rotate: 0deg;
    animation: spinnerspin 1s infinite linear;

    @keyframes spinnerspin {
        from {transform:rotate(0deg);}
        to {transform:rotate(359deg);}
    }
`;

const Loading = () => {
    const [state, setState] = useState(0);

    useEffect(() => {
        let ctr = 0;
        const interval = setInterval(() => {
            ctr++;
            if (ctr > 2) { setState(1); }
            if (ctr > 8) { setState(2); return }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <Main>
        <StyledLogo />
        {state !== 2 && <StyledSpinner />}
        {state === 1 && <div className="mt-4"><WarnAlert>Verbindung zum Server dauert ungewöhnlich lange.</WarnAlert></div>}
        {state === 2 && <div className="mt-4"><ErrorAlert>Verbindung zum Server fehlgeschlagen.</ErrorAlert></div>}
        <span style={{ position: "fixed", bottom: "2em", fontSize: "12px" }}>Verbinde mit {config.apiRoot?.includes("http") ? config.apiRoot : (window.location.host + config.apiRoot)}</span>
    </Main>
}
export default Loading;