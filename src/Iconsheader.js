import React from "react";


const iconStyle = {
    textAlign: 'right'
};
function IconsHeader() {
    return(
        <div className={"col-3"} style={iconStyle}>
            <i className={"fa fa-bell-o"}></i>
            <i className={"fa fa-bell-o"}></i>
        </div>
    );
}
export default IconsHeader;