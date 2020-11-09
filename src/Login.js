import React from "react";

const buttonStyle = {
    width: '274.39px',
    height: '61.38px',
    borderRadius: '16px',
    border: 'none',
    backgroundColor: 'EFF0F6',
}
const buttonStyle1 = {
    width: '274.39px',
    height: '61.38px',
    borderRadius: '16px',
    border: '2px #5F2EEA solid',
    backgroundColor: '#FCFCFC',
}
const buttonStyle2 = {
    width: '269.32px',
    height: '61.38px',
    borderRadius: '16px',
    border: '2px #5F2EEA solid',
    backgroundColor: '#5f2eea',
}

function Login() {
    return(
        <div className={"login"}>
            <title>Login</title>
            <input style={buttonStyle}>
                <span>1</span>
                <span>2</span>
            </input>
            <input style={buttonStyle1}>
                <span>1</span>
                <span>2</span>
            </input>
            <button style={buttonStyle2}>
                <p>Login</p>
            </button>
        </div>
    );
}
export default Login;