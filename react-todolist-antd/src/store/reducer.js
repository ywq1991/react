import _ from 'lodash'
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {

    const newState = _.cloneDeep(state)

    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value
    }
    
    if (action.type === ADD_TODO_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
    }

    if (action.type === DELETE_TODO_ITEM) {
        newState.list.splice(action.index, 1)
        return newState
    }

    if (action.type === INIT_LIST_ACTION) {
        newState.list = action.data
    }

    return newState

}
