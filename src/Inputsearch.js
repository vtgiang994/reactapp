import React from "react";


const inputDivStyle = {
    marginTop: '10px',
    position: 'relative',
    width: '250px'
};
const inputStyle = {
    background: '#FAFAFA',
    fontSize: '12px',
    padding: '5px 40px',
    border: 'none'
};
const iconStyle = {
  position: 'absolute',
    top: '7px',
    left: '15px',
    color: 'gray'
};
const iconStyle2 = {
    position: 'absolute',
    top: '7px',
    right:'10px',
    border: 'none',
    color: 'gray'
}
function InputSearch() {
    return (
        <div className={"col-7 search"}>

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