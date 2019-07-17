import React, { Component } from 'react'
import store from './store'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getInitList
} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStateChange)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
    }

    handleInputChange = e => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick = () => {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete = index => {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }

    handleStateChange = () => {
        this.setState(store.getState())
    }
}

export default TodoList
