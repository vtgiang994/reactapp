import React from "react";

function SignIn() {
    return (
        <div className={"SignIn"}>
            <button className={"btnSignIn"}>
                Sign In
            </button>
            <button className={"btnLogIn"}>
                Log In
            </button>
            {/*<input type="range" min="1" max="100" defaultValue={"50"}/>*/}
        </div>
    );
}

export default SignIn;