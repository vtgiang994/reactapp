import React from "react";
import avatar from "./Avatar.svg"
import avatar1 from "./Avatar (1).svg"
import avatar2 from "./Avatar (2).svg"
import avatar3 from "./Avatar Square.svg"

function BoxImage() {
    return (
        <div className={"BoxImage"}>
            <img src={avatar3}/>
            <img src={avatar}/>
            <img src={avatar1}/>
            <img src={avatar2}/>
        </div>
    );
}

export default BoxImage;