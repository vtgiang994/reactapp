import React from "react";




function LogoHeader() {
    return (
        <div className={"col-2"} >
            <div className={"logo"}>
                <i className={"fa fa-bars iconLogo"}></i>
                <i className={"fa fa-address-book-o iconLogo colorLogo"}></i>
                <strong className={"iconLogo"}>Square</strong>
            </div>

        </div>
    );
}

export default LogoHeader;