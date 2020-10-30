import React from "react";

function MessageList() {
    return (
        <div className={"col messageList"}>
            <div>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <select name="" id="">
                            <option value="volvo">Primary</option>
                            <option value="saab">Item</option>
                            <option value="opel">Item</option>
                            <option value="audi">Item</option>
                        </select>
                    </div>
                    <div className={"col"}>
                        icon reply
                    </div>
                </div>
                <div className={"messageList"}>
                    <div>
                        <img src={""}/>
                        <p>abcxyz</p>
                        <p>abcxyz</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MessageList;