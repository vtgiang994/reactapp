import React from "react";
import SidebarLeft from "./Sidebarleft";
import MessageList from "./Messagelist";
import MessageContent from "./Messagecontent";
import SidebarRight from "./Sidebarright";


function Content() {
    return (
        <section>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    {/*sidebar left*/}
                    <SidebarLeft/>
                    {/*message list*/}
                    <MessageList/>
                    {/*message content*/}
                    <MessageContent/>
                    {/*sidebar right*/}
                    <SidebarRight />
                </div>

            </div>
        </section>

    );
}

export default Content;