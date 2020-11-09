import React from "react";
import image from "./Capture.PNG";


const iconStyle = {
    textAlign: 'right',
    top: '10px'
};
const testPosition = {
    borderRadius: '50%',
    border: 'none',
    width: '20px',
    height: '20px',
};
const iStyle = {
    paddingRight : '10px',
    fontSize: '18px',
    paddingTop: '5px'
}
function IconsHeader() {
    return(
        <div className={"col-3"} style={iconStyle}>
            <i className={"fa fa-bell-o"} style={iStyle}></i>
            <span>
                <img src={image} alt={"i"} style={testPosition}/>
            </span>
        </div>
    );
}
export default IconsHeader;