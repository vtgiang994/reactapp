import React from "react";


function MessageContent() {
    return (
        <div className={"col-5"}>
            <div className={"content1Message"}>
                <div className={"row dateTime"}>
                    <div className={"col"}>
                        Time
                    </div>
                    <div className={"col"}>
                        <span>icon1</span>
                        <span>icon2</span>
                        <span>icon3</span>
                        <span>icon4</span>
                    </div>
                </div>
                <div className={"avatar"}>
                    <span>
                        <img src={""}/>
                    </span>
                        <span>
                        <p>Name</p>
                        <p>e-mail</p>
                    </span>

                </div>
                <div>
                    <h2>Text</h2>
                    <p>doan text 1</p>
                    <p>doan text 2</p>
                    <p>doan text 3</p>
                </div>
                <div>
                    2 file
                </div>
            </div>

        </div>
    );
}

export default MessageContent;