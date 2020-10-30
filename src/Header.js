import React from "react";
import LogoHeader from "./Logoheader";
import InputSearch from "./Inputsearch";
import IconsHeader from "./Iconsheader";


function Header() {
    return (
        <section>
            <div className={"container-fluid"}>
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