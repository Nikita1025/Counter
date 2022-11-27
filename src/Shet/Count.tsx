import React from 'react';
import s from './Count.module.css'
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Store/store";
import {InitialStateType, onClickIncAC, onClickRestAC} from "../Store/countReducer";


export const Count = () => {
    const {
        count,
        maxValue,
        minValue,
        error
    } = useSelector<AppRootStateType, InitialStateType>(state => state.count)
    const dispatch = useDispatch()
    const StyleError = count >= maxValue ? s.error : s.span
    const SpanCount = error ? error : count
    const disableInc = count >= maxValue
    const disableRest = count <= minValue
    const onClickInc = () => {
        dispatch(onClickIncAC(count + 1))
    }
    const onClickReset = () => {
        dispatch(onClickRestAC(minValue))
    }

    return (
        <div className={s.container}>
            <span className={StyleError}>{SpanCount}</span>
            <SuperButton
                name={'Inc'}
                callback={onClickInc}
                disable={disableInc}
                classNameButton={s.styl}
            />
            <SuperButton
                name={'Rest'}
                callback={onClickReset}
                disable={disableRest}
                classNameButton={s.styl}/>

        </div>
    );
};

