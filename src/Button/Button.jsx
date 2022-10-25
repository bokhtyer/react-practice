import React from "react";
import './Button.scss'

const Button = (props) => {
    return(
        <div className="button-1">
            <a href="#">
            {props.btnText}
            </a>
        </div>
    )
}
export default Button;