import React from "react";
import image from "./Capture.PNG";

const divStyle = {
    position: 'relative',
    width: '100%'
}
const inputStyle = {
    background: '#FAFAFA',
    fontSize: '12px',
    width: '100%'
}
const iconInputS = {
    position: 'absolute',
    right: '10px',
    top: '4px'
}
const testPosition = {
    borderRadius: '50%',
    border: '1px black solid',
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '10px',
    top: '6px'
};
const pPosition = {
    borderRadius: '5px',
    border: '1px black solid',
    backgroundColor: '#FAFAFA',
    marginLeft: '20px',
    paddingBottom: '8px',
    paddingTop: '2px',
    paddingLeft: '15px',
    paddingRight: '15px'
}
const alignLeft = {
    textAlign: 'left',

};
const alignRight = {
    textAlign: 'right',
    backgroundColor: '#2E64FE',
    color: 'white',
    border: 'none'
};
const divPosition = {
    position: 'relative',
}
const selectS = {
    width: '100%',
    height: '40px',
    border: 'none',
    background: 'rgb(250, 250, 250)'
};

function Categories() {
    return (
        <div>
            <select name="" id="" style={selectS}>
                <option value="volvo">Categories</option>
                <option value="saab">Item</option>
                <option value="opel">Item</option>
                <option value="audi">Item</option>
            </select>
            <div className={"backgroundC"}>
                <div style={divPosition}>
                    <img src={image} alt={"i"} style={testPosition}/>
                    <p style={{...pPosition, ...alignLeft}}>Tương tự như Rest Params</p>
                </div>
                <div style={divPosition}>

                    <p style={{...pPosition, ...alignRight}}>jennie Tương tự như Rest Params</p>
                </div>
                <div style={divPosition}>
                    <img src={image} alt={"i"} style={testPosition}/>
                    <p style={{...pPosition, ...alignLeft}}>jennie</p>
                </div>
            </div>

            <div className={"inputMess backgroundC"}>
                <form>
                    <div style={divStyle}>
                        <input type={"text"} value={""} placeholder={"Type Message"} style={inputStyle}/>
                        <i className={"fa fa-chevron-down"} style={iconInputS}></i>
                        <i className={"fa fa-chevron-down"} style={iconInputS}></i>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Categories;