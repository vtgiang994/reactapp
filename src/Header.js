import React from "react";
import LogoHeader from "./Logoheader";
import InputSearch from "./Inputsearch";
import IconsHeader from "./Iconsheader";


const sectionStyle = {
    borderBottom: '1px #E6E6E6 solid',
    height: '50px'
};
function Header() {
    return (
        <section style={sectionStyle}>
            <div className={"container-fluid"} >
                <div className={"row"}>
                    <LogoHeader/>
                    <InputSearch/>
                    <IconsHeader />
                </div>
            </div>
        </section>
    );
}

export default Header;