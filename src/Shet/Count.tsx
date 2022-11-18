import React from 'react';
import s from './Count.module.css'
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Store/store";
import {InitialStateType, onClickIncAC, onClickRestAC} from "../Store/countReducer";


export const Count =() => {
    const state = useSelector<AppRootStateType,InitialStateType >(state => state.count)
    const dispatch= useDispatch()
    const StyleError = state.count>= state.maxValue ? s.error : s.span
    const SpanCount = state.error ? state.error : state.count
    const disableInc = state.count >= state.maxValue
    const disableRest = state.count <= state.minValue
    const onClickInc = () => {
        dispatch(onClickIncAC(state.count + 1))
    }
    const onClickReset = () => {
        dispatch(onClickRestAC(state.minValue))
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

