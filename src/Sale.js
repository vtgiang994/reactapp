import React from "react";
import image from "./Photos.SVG"


function Sale() {
    return(
        <div className={"sale card"}>
            <div className={"row"}>
                <div className={"col"}>
                    <p className={"p1"}>Summer Sale</p>
                    <p className={"p2"}>25% Off Now through sunday for all in-store purchases.</p>
                    <button>Shop Now</button>
                </div>
                <div className={"col"}>
                    <img src={image}/>
                </div>
            </div>
        </div>
    );
}
export default Sale;