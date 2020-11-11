import React from "react";
import Search from "./Search.svg"
import Configure from "./Configure.svg"

function SearchEmail() {
    return (
        <div className={"SearchEmail"}>
            <div className={"Search"}>
                <img src={Search}/>
                <input type={"text"} name={"Search"} placeholder={"Ca"}/>
                <img src={Configure}/>
            </div>
        </div>
    );
}

export default SearchEmail;