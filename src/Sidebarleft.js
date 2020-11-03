import React from "react";
import Categories from "./Categories";
import ListSidebar from "./Listsidebar"
import WriteMessage from "./Writemessage";


const sidebarStyle = {
    background: '#FAFAFA'
};
const menuItems = [
    {
        icon: "fa fa-inbox",
        title: "Inbox",
        quantity: "102",
        isActive: false
    },
    {
        icon: "fa fa-star-o",
        title: "Starred",
        quantity: "10",
        isActive: true
    },
    {
        icon: "fa fa-inbox",
        title: "Send",
        quantity: "102",
        isActive: false
    },
    {
        icon: "fa fa-star-o",
        title: "Draft",
        quantity: "10",
        isActive: false
    },
    {
        icon: "fa fa-inbox",
        title: "Spam",
        quantity: "102",
        isActive: false
    },
    {
        icon: "fa fa-star-o",
        title: "Trash",
        quantity: "10",
        isActive: false
    },
];
function SidebarLeft() {
    return(
        <div className={"col-2 sidebarLeft px-0"} style={sidebarStyle}>
            {/*write message*/}
            <WriteMessage />
            {/*list sidebar left*/}
            <ListSidebar data={menuItems}/>
            {/*Categories*/}
            <Categories/>
        </div>
    );
}
export default SidebarLeft;