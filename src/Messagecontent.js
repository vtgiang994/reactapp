import React from "react";
import image from "./Capture.PNG";

const textStyle = {
    textAlign: 'left'
};
const imgStyle1 = {
    borderRadius: '50%',
    border: '1px white solid',
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '10px',
    top: '6px'
};
const imgStyle2 = {
    borderRadius: '5px',
    border: '1px white solid',
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '10px',
    top: '6px'
}
const iconStyle = {
    textAlign: 'right',
};
const buttonStyle = {
  borderRadius: '7px',
  background: '#2E64FE',
  color: 'white',
    border: 'none',
    padding: '5px 5px'
};
function MessageContent() {
    return (
        <div className={"col-5"}>
            <div>
                <div className={"row dateTime"}>
                    <div className={"col"}>
                        <p className={"textP"}>Today,08:26AM</p>
                    </div>
                    <div className={"col"} style={iconStyle}>
                        <i className={"fa fa-address-card"}></i>
                        <i className={"fa fa-address-card"}></i>
                        <i className={"fa fa-address-card"}></i>
                        <i className={"fa fa-address-card"}></i>
                    </div>
                </div>
                <div className={"avatar"}>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <img src={image} alt={"img"} style={imgStyle1}/>
                        </div>
                        <div className={"col"} style={textStyle}>
                            <p>
                                Cho vật phẩm thêm điểm
                                <br/>
                                Cho vật phẩm thêm điểm
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <h3 className={"styleH3"}>Quickly design and customize responsive </h3>
                    <p className={"styleH3"}>Install Bootstrap’s source Sass and JavaScript files via npm, Composer, or
                        Meteor.</p>
                    <p className={"styleH3"}>Package managed installs don’t include documentation or our full build
                        scripts. You can also use
                        our npm template repo to quickly generate a Bootstrap project via npm.</p>
                    <p className={"styleH3"}>When you
                        <br/>
                        only need</p>
                </div>
                <div>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <img src={image} alt={"img"} style={imgStyle2}/>
                        </div>
                        <div className={"col textP"}>
                            <p>
                                Cho vật phẩm
                            </p>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <img src={image} alt={"img"} style={imgStyle2}/>
                        </div>
                        <div className={"col textP"}>
                            <p>
                                Cho vật phẩm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-1"}>
                    <i className={"fa fa-reply"}></i>
                </div>
                <div className={"col-10 textP"}>
                    <p>
                        phần tử
                        <br/>
                        bên dưới
                    </p>
                </div>
                <div className={"col-1"}>
                    <i className={"fa fa-trash-o"}></i>
                </div>
            </div>
            <p className={"textP"}>Package managed installs don’t include documentation or our full build scripts.</p>
            <div className={"textP"}>
                <button style={buttonStyle}>Send Message</button>
            </div>
        </div>
    );
}

export default MessageContent;