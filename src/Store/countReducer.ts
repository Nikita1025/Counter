import {Dispatch} from "redux";

let initialState: InitialStateType = {
    count: 0,
    maxValue: 0,
    minValue: 0,
    error: ''
}
export type InitialStateType = {
    count: number
    maxValue: number
    minValue: number
    error: string
}
export const countReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ON-CLICK-INC":
            return {...state, count: action.count}
        case 'ON-CLICK-RECT':
            return {...state, count: action.minValue}
        case "ON-CHANGE-MAX":
            return {...state, maxValue: action.maxValue}
        case "ON-CHANGE-MIN":
            return {...state, minValue: action.minValue}
        case "CALLBACK":
            return {...state, minValue: action.minValue}
        case "ERROR":
            return {...state, error: action.setError}

        default:
            return state
    }

}
type ActionType = ReturnType<typeof onClickIncAC> | ReturnType<typeof onClickRestAC>
    | ReturnType<typeof onChangeHandlerMaxAC> | ReturnType<typeof onChangeHandlerMinAC> |
    ReturnType<typeof callbackAC> | ReturnType<typeof errorAC>

export const onClickIncAC = (count: number) => {

    return {
        type: 'ON-CLICK-INC',
        count
    } as const
}
export const onClickRestAC = (minValue: number) => {
    return {
        type: 'ON-CLICK-RECT',
        minValue
    } as const
}
export const onChangeHandlerMaxAC = (maxValue: number) => {
    return {
        type: 'ON-CHANGE-MAX',
        maxValue
    } as const
}
export const onChangeHandlerMinAC = (minValue: number) => {
    return {
        type: 'ON-CHANGE-MIN',
        minValue
    } as const
}
export const callbackAC = (minValue: number) => {
    return {
        type: 'CALLBACK',
        minValue
    } as const
}
export const errorAC = (setError: string) => {
    return {
        type: 'ERROR',
        setError
    } as const
}