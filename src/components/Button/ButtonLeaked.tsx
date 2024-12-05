import { ButtonProps } from "react-bootstrap";
import { StyleButtonLeaked } from "./styles";
const ButtonLeaked = (props: ButtonProps) => {
    return (
        <StyleButtonLeaked {...props} className="button-leaked">
            {props.children}
        </StyleButtonLeaked>
    );
}

export default ButtonLeaked;