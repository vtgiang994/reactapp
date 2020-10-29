import React from "react";
import {Button, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles({
    root: {
        border: 0,
        fontSize: 10,

    },
});

function ButtonSearch() {
    const classes = useStyle();
    return (
        <input className={classes.root}>

                <SearchIcon/>
                Search from Message
                <ExpandMoreIcon/>

        </input>
    );
}

export default ButtonSearch;