import React from "react";
import Categories from "./Categories";
import ListSidebar from "./Listsidebar"
import WriteMessage from "./Writemessage";


const sidebarStyle = {
    background: '#FAFAFA'
};
function SidebarLeft() {
    return(
        <div className={"col-2 sidebarLeft"} style={sidebarStyle}>
            {/*write message*/}
            <WriteMessage />
            {/*list sidebar left*/}
            <ListSidebar/>
            {/*Categories*/}
            <Categories/>
        </div>
    );
}
export default SidebarLeft;