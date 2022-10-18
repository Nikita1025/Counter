import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {SuperInput} from "./SuperInput";
import {SuperButton} from "../Shet/SuperButton";
import s from './Setting.module.css'

type SettingType = {
    maxValue: number
    minValue: number
    setCount: Dispatch<SetStateAction<number>>
    setMaxvalue: Dispatch<SetStateAction<number>>
    setMinvalue: Dispatch<SetStateAction<number>>
error: string
}

export const Setting = (props: SettingType) => {
    const onChangeHanlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxvalue(+e.currentTarget.value)
    }
    const onChangeHanlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinvalue(+e.currentTarget.value)
    }
    const callback = () => {
        props.setCount(props.minValue)
    }
const disableSet = props.minValue  < 0 || props.maxValue <= 0
    return (<div className={s.container2}>
            <div className={s.input}>
                <SuperInput
                    title={"Max Value:"}
                    value={props.maxValue}
                    onChange={onChangeHanlerMax}
                    className = {props.error ? s.error : s.input}
                />
                <SuperInput
                    title={"Min Value:"}
                    value={props.minValue}
                    onChange={onChangeHanlerMin}
                    className = {props.error ? s.error :''}
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