import React from "react";
import Group218 from "./Group 218.svg";
import Tag from "./Tag.svg"
import stepper from "./Increment-Stepper.svg";

function WaffleCone() {
    return (
        <div>
            <div className={"WaffleCone"}>
                <div className={"imgCream"}>
                    <img src={Group218}/>
                </div>
                <div className="textBox">
                    <h1>Waffle Cone</h1>
                    <p>12-Pack Box</p>
                </div>
            </div>
            <div className={"stepperTag"}>
                <div>
                    <img src={stepper}/>
                </div>

                <div className={"tag"}>
                    <img src={Tag}/>
                    <p>Dessert</p>
                </div>
            </div>
        </div>

    );
}

export default WaffleCone;