import React from "react";
import Categories from "./Categories";
import ListSidebar from "./Listsidebar"
import WriteMessage from "./Writemessage";

function SidebarLeft() {
    return(
        <div className={"col-2 sidebarLeft"}>
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