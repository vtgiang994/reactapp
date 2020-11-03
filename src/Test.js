import React from 'react';

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
};

const pStyle = {
    fontSize: '15px',
    textAlign: 'center',
    color: 'pink'
};

function Test() {
    return(
        <div style={divStyle}>
            <p style={pStyle}>Get started with inline style</p>
        </div>
    );
}
export default Test;