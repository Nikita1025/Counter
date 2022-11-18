import React, {ChangeEvent} from 'react';
import s from './SuperInput.module.css'


type SuperInputType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}
export const SuperInput = (props: SuperInputType) => {
    return (
        <div className={s.box}>
            <span className={s.input}>{props.title}</span>
            <input onChange={props.onChange}
                   className={props.className}
                   value={props.value}
                   type="number"/>
        </div>
    );
};

