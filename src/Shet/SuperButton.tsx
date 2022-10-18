
import React from 'react';
import Button from '@mui/material/Button';
import s from './Button.module.css'

type ButtonType ={
    onClickHandlerInc: ()=>void
    onClickHandlerReset: ()=>void

}

export const ButtonOne = (props:ButtonType) => {


    return (
        <div className={s.butt}>
            <Button variant={'contained'} onClick={props.onClickHandlerInc}>inc</Button>
            <Button  variant={'contained'}  onClick={props.onClickHandlerReset}>reset</Button>

        </div>
    )
}