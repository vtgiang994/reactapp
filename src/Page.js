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
            <div className={"loginSale"}>
                <Login/>
                <Sale/>
            </div>
            <div className={"joinInCheckBox"}>
                <JoinIn/>
                <GroupCheckBox/>
            </div>
            <div className={"bottomPage"}>
                <Selected/>
                <div className={"bottomLeftPage"}>
                    <div className="inputSearch">
                        <SearchEmail/>
                    </div>
                    <div className={"boxAndImg"}>
                        <div className={"BoxBox"}>
                            <Watch/>
                            <SignIn/>
                            <BoxImage/>
                        </div>
                        <WaffleCone/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;