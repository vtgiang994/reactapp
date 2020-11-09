import React from 'react';
import Li from './Test2';
import image from "./Capture.PNG";
import Div from './Test2'

function Test() {

    let t0ext1 = ["icon","icon2"];
    let iconSet = {
        "icon1": ["item1", "item2", "item3"],
        "icon2": ["icon2"]
    }
    let icon0001 = ["item4", "item5", "item6"];
    let text1 = ["text", "coffee", "milk"]
    return (
        <ul>
            <Li icon={iconSet.icon1}
                text={"text"}
                number={"102"}
            />
            <Li icon={iconSet.icon1}
                text={"text2"}
                number={"100"}/>
            <Li icon={["icon3"]}
                text={"text3"}
                number={"1000"}/>
        </ul>
    );
}

export default Test;