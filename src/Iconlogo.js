import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles({
    root: {
        border: 0,
        color: 'blue',
        padding: '0,20px',
        fontSize: 16,
    },
});

function IconLogo() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <MenuIcon/>
            <InstagramIcon/>
            Square
        </div>

    );
}

export default IconLogo;
