import React from "react";
import Primary from "./Primary";
import ListMess from "./Listmess";

const listStyle = {
    borderRight: '1px #E6E6E6 solid'
};
function MessageList() {
    return (
        <div className={"col-3"} style={listStyle}>
            <div >
                <Primary />
                <ListMess />
            </div>
        </div>
    );
}

export default MessageList;