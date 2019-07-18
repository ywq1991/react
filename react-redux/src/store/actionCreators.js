import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM } from "./actionTypes"

const getInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})

const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})


export {
    getInputChangeAction,
    getAddItemAction
}
