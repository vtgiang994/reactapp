import React from "react";
import image from "./Capture.PNG";

const imgStyle = {
    borderRadius: '50%',
    border: '1px white solid',
    width: '30px',
    height: '30px',
    position: 'absolute',
    left: '10px',
    top: '6px'
};
function ListMess() {
    return (
        <div className={"listMess"}>
            <div className={"row testHover"} >
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