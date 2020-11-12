import React from "react";
import imgMail from "./Mail.svg"
import imgEye from "./eye.png"
import imgClose from "./Close.svg"

function Login() {
    return (
        <div className={"login"}>
            <h1 className={"p1"}>Login</h1>
            <div className={"email"}>
                    <div className={"iconEmail"}>
                        <img src={imgMail}/>
                    </div>
                    <div className={"idEmail"}>
                        <p>Email</p>
                        <input type={"text"} name={"email"}/>
                    </div>
            </div>
            <div className={"passWord"}>
                    <div className={"iconPass"}>
                        <img src={imgEye}/>
                    </div>
                    <div className={"pass"}>
                        <p>Pass Word</p>
                        <input type={"password"} name={"psw"}/>
                    </div>
                    <div className={"iconsX"}>
                        <img src={imgClose}/>
                    </div>

            </div>
            <button>Login</button>
        </div>
    );
}

export default Login;