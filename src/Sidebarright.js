import React from "react";
import image from "./Capture.PNG";

const paddingImg = {
  paddingTop: '10px'
};
const paddingL = {
  paddingLeft: '10px'
};

function SidebarRight() {
    return(
        <div className={"col sidebarRight"}>
            <div className={"row dateTime"}>
                <div className={"col"}>
                    <i className={"fa fa-plus"}></i>photosList
                    <span>Add Widget</span>
                    <i className={"fa fa-plus"}></i>
                    <i className={"fa fa-plus"}></i>
                    <i className={"fa fa-plus"}></i>
                </div>
            </div>

            <div className={"photosList"}>
                <p className={"textP"}>Photos File</p>
                <div className={"row"}>
                    <div className={"col-6 px-0"}>
                        <img src={image} alt={"image"}/>
                    </div>
                    <div className={"col-6 px-0"}>
                        <img src={image} alt={"image"}/>
                    </div>
                    <div className={"col-6 px-0"}>
                        <img src={image} alt={"image"}/>
                    </div>
                    <div className={"col-6 px-0"}>
                        <img src={image} alt={"image"}/>
                    </div>
                    <div className={"col-6 px-0"}>
                        <img src={image} alt={"image"}/>
                    </div>
                    <div className={"col-6 px-0"}>
                        <img src={image} alt={"image"}/>
                    </div>
                </div>
                {/*<div className={"row"} style={paddingImg}>*/}
                {/*    <div className={"col-6"}>*/}
                {/*        <img src={image} alt={"image"}/>*/}
                {/*    </div>*/}
                {/*    <div className={"col-6"}>*/}
                {/*        <img src={image} alt={"image"}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={"row"} style={paddingImg}>*/}
                {/*    <div className={"col-6"}>*/}
                {/*        <img src={image} alt={"image"}/>*/}
                {/*    </div>*/}
                {/*    <div className={"col-6"}>*/}
                {/*        <img src={image} alt={"image"}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            <div>
                <h5 className={"textP"}>Another File</h5>
                <div className={"row"}>
                    <div className={"col-1"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col"}>
                        <p>Project</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-1"}>
                        <img src={""} alt={"image"}/>
                    </div>
                    <div className={"col"}>
                        <p>Project</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-1"}>
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