import React from "react";

const textStyle = {
    textAlign: 'left'
};

function MessageContent() {
    return (
        <div className={"col-5"}>
            <div>
                <div className={"row dateTime"}>
                    <div className={"col"}>
                        <p className={"textP"}>Today,08:26AM</p>
                    </div>
                    <div className={"col"}>
                        <i className={"fa fa-address-card"}></i>
                        <i className={"fa fa-address-card"}></i>
                        <i className={"fa fa-address-card"}></i>
                        <i className={"fa fa-address-card"}></i>
                    </div>
                </div>
                <div className={"avatar"}>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <img src={""} alt={"img"}/>
                        </div>
                        <div className={"col"} style={textStyle}>
                            <p>
                                Cho vật phẩm thêm điểm
                            </p>
                            <p>
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
                        <br />
                            only need</p>
                </div>
                <div>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <img src={""} alt={"img"}/>
                        </div>
                        <div className={"col textP"}>
                            <p>
                                Cho vật phẩm thêm điểm
                            </p>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <img src={""} alt={"img"}/>
                        </div>
                        <div className={"col textP"}>
                            <p>
                                Cho vật phẩm thêm điểm
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
);
}

export default MessageContent;