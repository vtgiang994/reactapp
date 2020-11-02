import React from "react";


const inputDivStyle = {

    marginTop: '10px',


    position: 'relative'
};
const inputStyle = {
    background: '#FAFAFA',
    fontSize: '12px',
    padding: '5px 40px'
};
const iconStyle = {
  position: 'absolute',
    top: '8px',
    left: '10px'
};
const iconStyle2 = {
    position: 'absolute',
    top: '8px',
    right:'10px',
    border: 'none'
}
function InputSearch() {
    return (
        <div className={"col-3 search"}>

            <form>
                <div style={inputDivStyle}>
                    <i className={"fa fa-search"} style={iconStyle}></i>
                    <input style={inputStyle} type={"text"} value={""} placeholder={"Search Message"}/>
                    <i className={"fa fa-chevron-down"} style={iconStyle2}></i>
                </div>

            </form>
        </div>
    );
}

export default InputSearch;