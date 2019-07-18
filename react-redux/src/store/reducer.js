import _ from 'lodash'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM} from "./actionTypes"

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {

    let newState = _.cloneDeep(state)

    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value
    }

    if (action.type === ADD_TODO_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
    }
    return newState
}
