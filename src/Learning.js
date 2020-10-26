import React from 'react';
import {Row,Col,Button} from 'react-bootstrap'


function Header(props) {

    return(
        <div>
            //App Bar with a primary search field
            <Row>
                <Col xs={2}>
                    <img src={} />
                    <div>
                        <img src={}/>
                    </div>
                </Col>
                <Col xs={3}>
                    <InputGroup>
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />

                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col md={7}>
                    <img src={}/> //icon notice
                    <img src={}/> //img account
                </Col>
            </Row>
        </div>
    );
}

function Content() {
    return (
        <div>
            <Row>
                <Col xs={2} className={"sidebar-left"}>
                    <Button /> //write message
                    //Nested List
                    //chip
                </Col>
                <Col xs={3} className={"message-list"}>
                    <div>
                        dropdown
                        icon replay
                    </div>
                    <div>
                        //Align list items

                    </div>
                </Col>
                <Col xs={5} className={"message-content"}>
                    <div>
                        //date,time left
                        //4 icon link right
                    </div>
                    <div>
                        //img+name
                        //text
                        //file dinh kem
                    </div>
                    <div>
                        //icon send
                        //name+email
                        //2 icon
                    </div>
                    <div>
                        //form
                        //button send message
                        //icon
                    </div>
                </Col>

                <Col xs={2} className={"sidebar-right"}>
                    <div>
                        //simple tooltip
                        //icon right
                    </div>
                    <div>
                        //photo file
                        //img x6
                        //another file
                        //folder list
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
export default Content;