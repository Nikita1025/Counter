import React, {ChangeEvent} from 'react';
import {SuperInput} from "./SuperInput";
import {SuperButton} from "../Shet/SuperButton";
import s from './Setting.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Store/store";
import {
    callbackAC,
    InitialStateType,
    onChangeHandlerMaxAC,
    onChangeHandlerMinAC,
    onClickIncAC
} from "../Store/countReducer";

export const Setting = () => {
    const{minValue, maxValue, error} = useSelector<AppRootStateType,InitialStateType >(state => state.count)

    const dispatch= useDispatch()
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeHandlerMaxAC(+e.currentTarget.value))
    }
    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeHandlerMinAC(+e.currentTarget.value))
    }
    const callback = () => {
        dispatch(callbackAC(minValue))
        dispatch(onClickIncAC(minValue))
    }

    const disableSet = minValue < 0 || maxValue <= 0
    return (<div className={s.container2}>
            <div >
                <SuperInput
                    title={"Max Value: "}
                    value={maxValue}
                    onChange={onChangeHandlerMax}
                    className={error ? s.error : s.input}
                />
            </div>
                <div>
                <SuperInput
                    title={"Min Value: "}
                    value={minValue}
                    onChange={onChangeHandlerMin}
                    className={error ? s.error : s.input}
                />
            </div>
            <div>
                <SuperButton
                    classNameButton={s.set}
                    name={"Set"}
                    callback={callback}
                    disable={disableSet}
                />
            </div>
        </div>
    )
}