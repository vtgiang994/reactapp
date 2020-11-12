import React from "react";
import image from "./Photos.SVG"


function Sale() {
    return (
        <div className={"sale"}>
            {/*<div className={"row"}>*/}
            <div className={"textSale"}>
                <h1 className={"p2"}>
                    Summer
                    <br/>
                    Sale
                </h1>
                <p className={"p3"}>25% Off Now through sunday for all in-store purchases.</p>
                <button>Shop Now</button>
            </div>
            <img src={image}/>
        </div>
    );
}

export default Sale;