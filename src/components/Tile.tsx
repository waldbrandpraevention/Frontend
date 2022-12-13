import { Card } from "react-bootstrap";

/* visible attribute & children optional */
type PanelProps = {
    children?: React.ReactNode,
    style?: React.CSSProperties
}

/* Kacheln */
const Tile = (props: PanelProps) => {
    /* Kacheln sollen aktiviert/deaktivert werden können */
    return <Card style={props.style} className="my-1 py-3 shadow-sm border-0" >
        {props.children}
    </Card>
}

export default Tile