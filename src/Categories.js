import React from "react";
import image from "./Capture.PNG";


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
    backgroundColor: '#cecece',
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
};
const divPosition = {
    position: 'relative',
}
const selectS = {
  width: '100%',
  height: '40px'
};
const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'c'
}
const obj3 = {...obj1}
function Categories() {
    return (
        <div>
            <select name="" id="" style={selectS}>
                <option value="volvo">Categories</option>
                <option value="saab">Item</option>
                <option value="opel">Item</option>
                <option value="audi">Item</option>
            </select>
            <div style={divPosition}>
                    <img src={image} alt={"i"} style={testPosition}/>
                    <p style={{...pPosition, ...alignLeft}}>Tương tự như Rest Params, Spread Operator cũng sử dụng toán tử …</p>
            </div>
            <div style={divPosition}>
                {/*<img src={image} alt={"i"} style={testPosition}/>*/}
                <p style={{...pPosition, ...alignRight}}>jennieTương tự như Rest Params, Spread Operator cũng sử dụng toán tử …</p>
            </div>
            <div style={divPosition}>
                <img src={image} alt={"i"} style={testPosition}/>
                <p style={pPosition}>jennie</p>
            </div>
        </div>
    );
}

export default Categories;