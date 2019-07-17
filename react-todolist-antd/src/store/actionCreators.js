import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'

const getInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})

const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

const getDeleteItemAction = index => ({
    type: DELETE_TODO_ITEM,
    index
})

const initListAction = data => ({
    type: INIT_LIST_ACTION,
    data
})

const getInitList = () => ({
    type: GET_INIT_LIST
})

export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    initListAction,
    getInitList
}
