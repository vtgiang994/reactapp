import React from "react";
import Login from "./Login";
import Sale from "./Sale";
import JoinIn from "./Joinin";
import GroupCheckBox from "./Groupcheckbox";
import Selected from "./Selected";
import SearchEmail from "./Searchemail";
import Watch from "./Watch";
import SignIn from "./Signin";
import BoxImage from "./Boximage";
import WaffleCone from "./Wafflecone";

function Page() {
    return (
        <div className="Page">
            <div className={"title"}>
                <p>INTRODUCTION</p>
                <h1>
                    Example
                    <br/>
                    Widgets
                </h1>
            </div>
            <div className={"loginSale row"}>
                <div className="col-xs-12 col-md-6">
                    <Login/>
                </div>
                <div className="col-xs-12 col-md-6">
                    <Sale/>
                </div>
            </div>
            <div className={"joinInCheckBox row"}>
                <div className="col-xs-12 col-md-6">
                    <JoinIn/>
                </div>
                <div className="col-xs-12 col-md-6">
                    <GroupCheckBox/>
                </div>
            </div>
            <div className={"bottomPage row"}>
                <div className="col-xs-12 col-md-4">
                    <Selected/>
                </div>
                <div className={"bottomLeftPage col-xs-12 col-md-8"}>
                    <div className="inputSearch col-xs-12 col-md-12">
                        <SearchEmail/>
                    </div>
                    <div className={"boxAndImg row"}>
                        <div className={"BoxBox col-xs-12 col-md-6"}>
                            <div>
                                <Watch/>
                            </div>
                            <div>
                                <SignIn/>
                            </div>
                            <div>
                                <BoxImage/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <WaffleCone/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;