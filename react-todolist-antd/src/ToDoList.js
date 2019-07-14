import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import 'antd/dist/antd.css'

class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStateChange)
    }

    render() {
        return (
            <Fragment>
                <div style={{margin: 10}}>
                    <Input
                        value={this.state.inputValue}
                        placeholder='todo info'
                        style={{width: 300, marginRight: 10}}
                        onChange={this.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleBtnClick}
                    >
                        提交
                    </Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item
                        onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
                    style={{marginTop: 10}}
                />
            </Fragment>
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }

    handleStateChange() {
        this.setState(store.getState())
    }
}

export default ToDoList
