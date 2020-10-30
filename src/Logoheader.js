import React from "react";


const pStyle = {
        color:'#1C1C1C',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px'
};
function LogoHeader() {
    return(
        <div className={"col-2 logo"}>
            <i className="fa fa-bars"></i>
            <i className="fa fa-bars"></i>
            <strong style={pStyle}>Square</strong>
        </div>
    );
}
export default LogoHeader;