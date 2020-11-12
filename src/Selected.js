import React from "react";
import vector from "./Group 216.svg";
import forward from "./Forward.svg";
import forward1 from "./Forward (1).svg";
import ellipse from "./Ellipse 27.svg";
import polygon from "./Polygon 4.svg"

function Selected() {
    return (
        <div className={"Selected"}>
            <div className={"textSelected"}>
                <div className={"Select"}>
                    <p>Selected</p>
                    <img src={ellipse}/>
                </div>
                <div className={"Unselected"}>
                    <p>Unselected</p>
                </div>

            </div>
            <div className={"ShareAReply"}>
                <textarea placeholder={"Share a reply"}></textarea>
            </div>
            <div className={"vegetables"}>
                <p>Vegetables</p>
                <img src={forward1}/>
            </div>
            <div className={"vegetables1"}>
                <p>Vegetables</p>
                <img src={forward}/>
            </div>
            <div className={"vegetable1Item"}>
                <img src={polygon}/>
                <p>Turnips</p>
                <p>Squash</p>
                <p>Broccoli</p>
                <p>Spinach</p>
            </div>

        </div>
    );
}

export default Selected;