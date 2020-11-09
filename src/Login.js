import React from "react";

function Login() {
    return (
        <div className={"login"}>
            <p>Login</p>
            <div className={"email"}>
                <div className={"row"}>
                    <div className={"icon col"}>icon</div>
                    <div className={"idEmail col"}>
                        <p>email</p>
                        <input/>
                    </div>
                </div>

            </div>
            <div className={"passWord"}>
                <div className={"row"}>
                    <div className={"icon col"}>icon</div>
                    <div className={"pass col"}>
                        <p>pass word</p>
                        <input/>
                    </div>
                    <div className={"iconsX col"}>x</div>
                </div>

            </div>
            <button>Login</button>
        </div>
    );
}

export default Login;