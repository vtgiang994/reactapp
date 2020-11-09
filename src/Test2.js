import React from "react";

function Li(props) {
    return (
        <li>
            {props.icon[0]}----
            {props.text}---
            {props.number}
        </li>
        // <div className={"col-1"}>
        //     {props.img}
        //     {props.icons}
        // </div>
    );
}
export default Li;