import {IconButton} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import React from "react";

function WriteMessage() {

    return (
        <Button variant="contained" disableElevation>
            <IconButton>

                <CreateIcon/>
            </IconButton>
            Write Message
        </Button>
    );
}
export default WriteMessage;