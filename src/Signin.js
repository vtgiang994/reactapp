import React from "react";

function SignIn() {
    return (
        <div className={"SignIn"}>
            <div className={"col-sm-12 col-md-6"}>
                <button className="btnSignIn">
                    Sign In
                </button>
            </div>
            <div className={"col-sm-12 col-md-6"}>
                <button className="btnLogIn">
                    Log In
                </button>
            </div>

            {/*<input type="range" min="1" max="100" defaultValue={"50"}/>*/}
        </div>
    );
}

export default SignIn;