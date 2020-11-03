import React from "react";



const spanStyle = {
    padding: '10px'
};
const ulStyle = {
    margin: '0',
    padding: '0'
};
const liStyle = {
    textAlign: 'left'
}

function ListSidebar() {
    return (
        <div>
            <ul style={ulStyle} className={"list-group list-sidebar"}>
                <li style={liStyle} className={"list-group-item active"}>
                    <i class={"fa fa-inbox"}></i>
                    <span style={spanStyle}>Inbox</span>
                    <span className="badge badge-danger">102</span>
                </li>
                <li style={liStyle} className={"list-group-item"}>
                    <i className={"fa fa-star-o"}></i>
                    <span style={spanStyle}>Starred</span>
                    {/*<span>102</span>*/}
                </li>
                <li style={liStyle} className={"list-group-item"}>
                    <i className={"fa fa-paper-plane-o"}></i>
                    <span style={spanStyle}>Send</span>
                    {/*<span>102</span>*/}
                </li>
                <li style={liStyle} className={"list-group-item"}>
                    <i className={"fa fa-file-o"}></i>
                    <span style={spanStyle}>Draft</span>
                    {/*<span>102</span>*/}
                </li>
                <li style={liStyle} className={"list-group-item"}>
                    <i className={"fa fa-exclamation-circle"}></i>
                    <span style={spanStyle}>Spam</span>
                    {/*<span>102</span>*/}
                </li>
                <li style={liStyle} className={"list-group-item"}>
                    <i className={"fa fa-trash"}></i>
                    <span style={spanStyle}>Trash</span>
                    {/*<span>102</span>*/}
                </li>
            </ul>
        </div>

    );
}

export default ListSidebar;