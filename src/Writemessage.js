import React from "react";


const writeStyle = {
    marginTop: '15px',

};
const buttonStyle = {
    borderRadius: '7px',
    background: 'white',
    position: 'relative',
    padding: '5px 19px'
};
const iconStyle = {
  position: 'absolute',
    left: '10px',
};
function WriteMessage() {
    return (
        <div style={writeStyle}>

            <button style={buttonStyle}>
                <i className={"fa fa-pencil-square-o"}></i>
               Write Message
            </button>
        </div>
    );
}

export default WriteMessage;