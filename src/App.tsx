import React, {useEffect} from 'react'
import {Setting} from "./Setting/Setting";
import {Count} from "./Shet/Count";
import {AppRootStateType} from "./Store/store";
import {errorAC, InitialStateType, onChangeHandlerMaxAC, onChangeHandlerMinAC} from "./Store/countReducer";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const count = useSelector<AppRootStateType, InitialStateType >(state => state.count)
    const dispatch= useDispatch()
    useEffect(()=>{
        if ( count.minValue < 0 ||  count.maxValue <= 0 || count.minValue === count.maxValue){
            dispatch(errorAC('The value is not correct'))
        }else{
            dispatch(errorAC(''))
        }
    }, [count.minValue, count.maxValue])


    return (
       <div>
            <Setting/>
           <Count/>
       </div>

    );
}

export default App;
