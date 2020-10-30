import React from "react";



const inputStyle = {
    background: '#FAFAFA',
    marginTop: '10px',
    padding: '5px 40px',
    fontSize: '12px',
    position:'relative'
};

function InputSearch() {
    return (
        <div className={"col-3 search"}>

            <form>
                <i className="fas fa-search"></i>
                <input style={inputStyle} type={"text"} value={""} placeholder={"Search Message"}/>
                <i className="fa fa-search"></i>
            </form>
        </div>
    );
}

export default InputSearch;