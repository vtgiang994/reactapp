import React from "react";
import checkbox from "./Checkbox.svg";
import checkbox1 from "./Checkbox (1).svg";
import radio from "./Radio.svg";
import radio1 from "./Radio (1).svg";
import toggle from "./Toggle.svg";
import toggle1 from "./Toggle (1).svg";
import stepper from "./Increment-Stepper.svg";
import slider from "./Slider.svg";

function GroupCheckBox() {
    return (
        <div className="GroupCheckBox">
            <div className={"checkBoxRadio"}>
                <div className={"checkBox"}>
                    <img src={checkbox1}/>
                    <img src={checkbox}/>
                </div>
                <div className={"Radio"}>
                    <img src={radio1}/>
                    <img src={radio}/>
                </div>
            </div>
            <div className={"toggleStepper"}>
                <div className={"toggle"}>
                    <img src={toggle1}/>
                    <img src={toggle}/>
                </div>
                <img src={stepper}/>
            </div>
            <img src={slider}/>
        </div>
    );
}

export default GroupCheckBox;