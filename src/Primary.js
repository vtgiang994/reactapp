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
const leftStyle = {
  textAlign: 'left'
};
function Primary() {
    return(
        <div className={"row"} style={primaryStyle}>
            <div className={"col-10"} style={leftStyle}>
                <select name="" id="" style={selectStyle}>
                    <option value="volvo">Primary</option>
                    <option value="saab">Item</option>
                    <option value="opel">Item</option>
                    <option value="audi">Item</option>
                </select>
            </div>
            <div className={"col"}>
                <i className={"fa fa-repeat"}></i>
            </div>
        </div>
    );
}
export default Primary;