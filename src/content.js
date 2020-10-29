import {Col, Row} from "react-bootstrap";
import React from "react";

import {IconButton} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ReplayIcon from '@material-ui/icons/Replay';
import MessageListItem from "./MessageList";
import WriteMessage from "./Btnwritemess";
import MenuSidebarLeft from "./Menusidebar";
import ListSidebarItem from "./ListSidebar";
import DateTime from "./Datetime";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,

    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function ContentMessage() {
    // const classes = useStyles();
    // const [close, setOpen] = React.useState(true);

    // const handleClick = () => {
    //     setOpen(!close);
    // };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <Row>
            <Col>
                <WriteMessage/>
                <ListSidebarItem/>
                <MenuSidebarLeft/>

                <Chip
                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg"/>}
                    label="Deletable"
                    onDelete={handleDelete}
                    variant="outlined"
                />
            </Col>
            <Col>
                <div>
                    <Row>
                        <Col>
                            <MenuSidebarLeft/>
                        </Col>
                        <Col>
                            <IconButton>
                                <ReplayIcon/>
                            </IconButton>
                        </Col>
                    </Row>
                </div>
                <MessageListItem/>
            </Col>
            <Col xs={5}>
                <Row>
                    <Col>
                        <DateTime/>
                    </Col>
                    <Col>
                        icon
                    </Col>
                </Row>

            </Col>
            <Col xs={2}>12312321</Col>
        </Row>

    );
}
