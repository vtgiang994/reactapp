import React from "react";
import imgSearch from "./Search.svg"
import imgEye from "./eye.png"
import imgClose from "./Close.svg"

function Login() {
    return (
        <div className={"login"}>
            <h1 className={"p1"}>Login</h1>
            <div className={"email"}>
                {/*<div className={"row"}>*/}
                    <div className={"iconEmail col pr-0"}>
                        <img src={imgSearch}/>
                    </div>
                    <div className={"idEmail col"}>
                        <p>Email</p>
                        <input type={"text"} name={"email"}/>
                    </div>
                <div className={"col"}></div>
                {/*</div>*/}

            </div>
            <div className={"passWord"}>
                {/*<div className={"row"}>*/}
                    <div className={"iconPass col pr-0"}>
                        <img src={imgEye}/>
                    </div>
                    <div className={"pass col"}>
                        <p>Pass Word</p>
                        <input type={"password"} name={"psw"}/>
                    </div>
                    <div className={"iconsX col pl-0"}>
                        <img src={imgClose}/>
                    </div>
                {/*</div>*/}

            </div>
            <button>Login</button>
        </div>
    );
}

export default Login;