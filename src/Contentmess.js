import React from "react";
import SidebarLeft from "./Sidebarleft";
import MessageList from "./Messagelist";
import MessageContent from "./Messagecontent";
import SidebarRight from "./Sidebarright";

const contentStyle = {
  marginTop: '0'
};
function Content() {
    return (
        <section style={contentStyle}>
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