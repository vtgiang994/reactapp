import {Col, Row} from "react-bootstrap";
import React from "react";
import Button from '@material-ui/core/Button';
import {IconButton} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'react-bootstrap';

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

export default function DisableElevation() {
    const classes = useStyles();
    const [close, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!close);
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <Row>
            <Col xs={2}>
                <Button variant="contained"  disableElevation>
                    <IconButton>

                        <CreateIcon/>
                    </IconButton>
                    Write Message
                </Button>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    // subheader={
                    //     <ListSubheader component="div" id="nested-list-subheader">
                    //         Nested List Items
                    //     </ListSubheader>
                    // }
                    className={classes.root}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Sent mail"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItem>
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                        {close ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={close} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText primary="Starred"/>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Chip
                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                    label="Deletable"
                    onDelete={handleDelete}
                    variant="outlined"
                />
            </Col>
            <Col xs={3}>

            </Col>
        </Row>

    );
}

function Content() {
    return (
        <div>
            <Row>
                <Col xs={2} className={"sidebar-left"}>
                    <Button/> //write message
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

// export default Content;