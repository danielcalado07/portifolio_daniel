import { ButtonProps } from "react-bootstrap";
import { StyleButtonSolid } from "./styles";
const ButtonSolid = (props: ButtonProps) => {
    return (
        <StyleButtonSolid {...props} className="button-leaked">
            {props.children}
        </StyleButtonSolid>
    );
}

export default ButtonSolid;