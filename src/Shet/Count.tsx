import React  from 'react';
import s from './Button.module.css'
type CountType ={
    count: number
    maxNum: number
}

export const Count=(props:CountType)=>{
    return(
        <div className={s.con}>
            <span className={s.count}>{props.count}</span>
        </div>


    )

}