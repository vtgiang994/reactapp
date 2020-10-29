import React from "react";

function Content() {
    return(
        <section>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col sidebarLeft"}>
                        <div>
                            <button>
                                Write Message
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li>Inbox</li>
                                <li>Starred</li>
                                <li>Send</li>
                                <li>Draft</li>
                                <li>Spam</li>
                                <li>Trash</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col messageList"}>

                    </div>
                    <div className={"col messageContent"}></div>
                    <div className={"col sidebarRight"}></div>
                </div>

            </div>
        </section>

    );
}
export default Content;