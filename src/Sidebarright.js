import React from "react";



function SidebarRight() {
    return(
        <div className={"col sidebarRight"}>
            <div className={"row dateTime"}>
                <div className={"col"}>
                    <i className={"fa fa-plus"}></i>
                    <p>Add Widget</p>
                </div>
                <div className={"col"}>
                    <i className={"fa fa-plus"}></i>
                    <i className={"fa fa-plus"}></i>
                    <i className={"fa fa-plus"}></i>
                </div>
            </div>

            <div>
                <h5 className={"textP"}>Photos File</h5>
                <div className={"row"}>
                    <div className={"col borderImg"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col borderImg"}>
                        <img src={""} alt={"image"}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col borderImg"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col borderImg"}>
                        <img src={""} alt={"image"}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col borderImg"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col borderImg"}>
                        <img src={""} alt={"image"}/>
                    </div>
                </div>

            </div>
            <div>
                <h5 className={"textP"}>Another File</h5>
                <div className={"row"}>
                    <div className={"col"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col"}>
                        <p>Project</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col"}>
                        <p>Project</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col"}>
                        <p>Project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SidebarRight;