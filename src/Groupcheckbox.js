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
                    <div className="checkBox1">
                        <img src={checkbox1}/>
                    </div>
                    <div>
                        <img src={checkbox}/>
                    </div>
                </div>
                <div className={"Radio"}>
                    <div className={"Radio1"}>
                        <img src={radio1}/>
                    </div>
                    <div className={"Radio2"}>
                        <img src={radio}/>
                    </div>
                </div>
            </div>
            <div className={"toggleStepper"}>
                <div className={"toggle"}>
                    <div>
                        <img src={toggle1}/>
                    </div>
                    <div className={"toggle2"}>
                        <img src={toggle}/>
                    </div>
                </div>
                <div>
                    <img src={stepper}/>
                </div>
            </div>
            <div className="imgCheckbox">
                <img src={slider}/>
            </div>

        </div>
    );
}

export default GroupCheckBox;