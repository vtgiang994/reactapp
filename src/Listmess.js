import React from "react";
import image from "./Capture.PNG";

const imgStyle = {
    borderRadius: '50%',
    border: 'none',
    width: '28px',
    height: '28px',
    position: 'absolute',
    left: '10px',
    top: '6px'
};
const iconsS = {
    paddingTop: '40px',
    textAlign: 'center',
    color: '#Bdbdbd'
}
function ListMess() {
    return (
        <div className={"listMess"}>
            <div className={"row testHover"} >
                <div className={"col-1"}>
                    <img src={image} alt={"img"} style={imgStyle}/>
                    <i className={"fa fa-link"} style={iconsS}></i>
                </div>
                <div className={"col textP"}>
                    <p>
                        Cho vật phẩm thêm điểm
                        <br/>
                        Cho vật phẩm thêm điểm
                    </p>
                </div>
            </div>
            <div className={"row testHover"}>
                <div className={"col-1"}>
                    <img src={image} alt={"img"} style={imgStyle}/>
                </div>
                <div className={"col textP"}>
                    <p>
                        Cho vật phẩm thêm điểm
                        <br/>
                        Cho vật phẩm thêm điểm
                    </p>
                </div>
            </div>
            <div className={"row testHover"}>
                <div className={"col-1"}>
                    <img src={image} alt={"img"} style={imgStyle}/>
                </div>
                <div className={"col textP"}>
                    <p>
                        Cho vật phẩm thêm điểm
                        <br/>
                        Cho vật phẩm thêm điểm
                    </p>
                </div>
            </div>
            <div className={"row testHover"}>
                <div className={"col-1"}>
                    <img src={image} alt={"img"} style={imgStyle}/>
                </div>
                <div className={"col textP"}>
                    <p>
                        Cho vật phẩm thêm điểm
                        <br/>
                        Cho vật phẩm thêm điểm
                    </p>
                </div>
            </div>
            <div className={"row testHover"}>
                <div className={"col-1"}>
                    <img src={image} alt={"img"} style={imgStyle}/>
                </div>
                <div className={"col textP"}>
                    <p>
                        Cho vật phẩm thêm điểm
                        <br/>
                        Cho vật phẩm thêm điểm
                    </p>
                </div>
            </div>
            <div className={"row testHover"}>
                <div className={"col-1"}>
                    <img src={image} alt={"img"} style={imgStyle}/>
                </div>
                <div className={"col textP"}>
                    <p>
                        Cho vật phẩm thêm điểm
                        <br/>
                        Cho vật phẩm thêm điểm
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ListMess;