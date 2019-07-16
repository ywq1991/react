import React, { Component } from 'react'
import axios from "axios"
import store from './store'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    initListAction
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
        axios.get('/list.json')
            .then(res => {
                const action = initListAction(res.data)
                store.dispatch(action)
            })
            .catch(err => {
                console.log(err)
            })

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
