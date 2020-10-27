import React from "react";
import {Row,Col} from 'react-bootstrap';
import DisableElevation from './content';

function Content1() {
    return (
        <div>
            <Row>
                <Col>
                    <DisableElevation />
                </Col>
            </Row>
        </div>
    );
}