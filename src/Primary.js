import React from "react";

const primaryStyle = {
    marginTop: '15px',
    borderBottom: '1px #E6E6E6 solid',
    height: '40px'
};

const selectStyle  = {
    padding: '3px 6px',
    borderRadius: '8px',
    background: 'white',
    fontSize: '12px'
};

function Primary() {
    return(
        <div className={"row"} style={primaryStyle}>
            <div className={"col"}>
                <select name="" id="" style={selectStyle}>
                    <option value="volvo">Primary</option>
                    <option value="saab">Item</option>
                    <option value="opel">Item</option>
                    <option value="audi">Item</option>
                </select>
            </div>
            <div className={"col"}>
                icon reply
            </div>
        </div>
    );
}
export default Primary;