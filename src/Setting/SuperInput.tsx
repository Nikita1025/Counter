import React, {ChangeEvent} from 'react';
import s from './Setting.module.css'
type SuperInputType={
    title: string
    value: number
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
    className: string
}
export const SuperInput = (props: SuperInputType) => {
    return (
        <div>
            <span className={s.input}>{props.title}</span>
            <input
                value={props.value}
                onChange={props.onChange}
                type='number'
            />
        </div>
    );
};

