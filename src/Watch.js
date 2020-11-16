import React from "react";

function Watch() {
    return (
        <div className={"Watch row"}>
            <div className={"textWatch col-xs-12 col-md-6"}>
                <h4>$ 345,678<span>+123</span></h4>
                <p>This month</p>
            </div>
            <div className="col-xs-12 col-md-6">
                <button>Watch</button>
            </div>

        </div>
    );
}

export default Watch;