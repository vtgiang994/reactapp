import React from "react";


const writeStyle = {
    marginTop: '15px',

};
const buttonStyle = {
    borderRadius: '7px',
    background: 'white',
    padding: '5px 19px'
};
function WriteMessage() {
    return (
        <div style={writeStyle}>

            <button style={buttonStyle}>
                Write Message
            </button>
        </div>
    );
}

export default WriteMessage;