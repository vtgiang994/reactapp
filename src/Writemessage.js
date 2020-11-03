import React from "react";


const writeStyle = {
    marginTop: '15px',
    padding: '0 10px 10px'
};
const buttonStyle = {
    borderRadius: '7px',
    background: 'white',
    position: 'relative',
    padding: '5px 5px',
    width: '100%'
};
const iconStyle = {
    paddingRight: '10px'
}
function WriteMessage() {
    return (
        <div style={writeStyle}>
            <button style={buttonStyle}>
                <i className={"fa fa-pencil-square-o"} style={iconStyle}></i>
               Write Message
            </button>
        </div>
    );
}

export default WriteMessage;