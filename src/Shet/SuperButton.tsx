import React from 'react';
import {Button} from "@mui/material";

type SuperButtonType = {
    name: string
    callback: () => void
    disable: boolean
    classNameButton: string

}

export const SuperButton = (props: SuperButtonType) => {
    return (
        <div>

            <Button style={{width: "5px", background:"#20B2AA"}} variant="contained" onClick={props.callback} disabled={props.disable}>
                {props.name}
            </Button></div>
    )
}