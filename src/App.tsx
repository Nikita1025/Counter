import React, {useEffect} from 'react'
import {Setting} from "./Setting/Setting";
import {Count} from "./Shet/Count";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Store/store";
import {errorAC, InitialStateType, onChangeHandlerMaxAC, onChangeHandlerMinAC} from "./Store/countReducer";


function App() {
    const count = useSelector<AppRootStateType,InitialStateType >(state => state.count)

    const dispatch= useDispatch()
    useEffect(() => {
        let valueAsString = localStorage.getItem('max')
        let valueAsStringTwo = localStorage.getItem('min')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(onChangeHandlerMaxAC(newValue))
        }
        if (valueAsStringTwo) {
            let newValueTwo = JSON.parse(valueAsStringTwo)
            dispatch(onChangeHandlerMinAC(newValueTwo))

        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('max', JSON.stringify(count.maxValue))
        localStorage.setItem('min', JSON.stringify(count.minValue))
    }, [count.maxValue, count.minValue])
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
