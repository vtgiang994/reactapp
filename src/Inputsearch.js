import React from "react";


function InputSearch() {
    return(
        <div className={"col-3 search"}>
            <form>
                <i className="fa fa-search"></i>
                <input type={"text"} value={""} placeholder={"Search Message"}/>
            </form>
        </div>
    );
}

export default InputSearch;