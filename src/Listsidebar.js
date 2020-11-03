import React from "react";

const spanStyle = {
    padding: "10px",
};
const ulStyle = {
    margin: "0",
    padding: "0",
};
const liStyle = {
    textAlign: "left",
};

const menuItem1 = {
    icon: "fa fa-inbox",
    title: "Inbox",
    quantity: "102",
};
const menuItem2 = {
    icon: "fa fa-star-o",
    title: "Starred",
    quantity: "10",
};

function ListSidebar(props) {
    let menuItems2 = props.data;
    console.log("props of ListSideBar==> ",props);
    return (
        <div>
            <ul style={ulStyle} className={"list-group list-sidebar"}>
                {menuItems2.map((menuItem, index) => {
                    return (
                        // <MenuItem propIcon={menuItem.icon} propTitle={menuItem.title} propQuantity={menuItem.quantity} />
                        <MenuItem data={menuItem} />
                    );
                })}
            </ul>
        </div>
    );
}

function MenuItem(props) {
    console.log("menu item props =>>>>",props);
    let liClass = "list-group-item";
    if (props.data.isActive) {
        liClass = "list-group-item active";
    }
    return (
        <li
                            style={liStyle}
                            className={liClass}
                        >
                            <i className={props.data.icon}></i>
                            <span style={spanStyle}>{props.data.title}</span>
                            <span className="badge badge-danger">
                                {props.data.quantity}
                            </span>
                        </li>
    )
}

export default ListSidebar;
