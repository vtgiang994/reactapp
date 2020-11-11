import React from "react";
import Close from "./Close.svg"
import Arrow from "./Forward Arrow.png"
import imgMail from "./Mail.svg";

function JoinIn() {
    return (
        <div className={"joinIn"}>
            <h1>
                Join our mailing list.
            </h1>
            <div className={"iconRight"}>
                <img src={Close}/>
            </div>
            <p>Recieve 15% off your order at checkout and save today!</p>
            <div className={"inputButton"}>
                <div className={"inputEmail"}>
                    <img src={imgMail}/>
                    <input type={"text"} name={"email"} placeholder={"Email Address"}/>
                </div>
                <button>
                    <img src={Arrow}/>
                </button>
            </div>

        </div>
    );
}

export default JoinIn;