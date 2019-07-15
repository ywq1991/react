import React, { Component, Fragment } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputValue}/>
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoList()}
                </ul>
            </Fragment>
        )
    }

    componentDidMount() {
        axios.get('/api/list')
             .then(res => {
                 const list = res.data
                 this.setState(() => ({
                     list
                 }))
             })
             .catch(err => {
                 console.log(err)
             })
    }

    getTodoList() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    item={item}
                    index={index}
                    key={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputValue = e => {
        const inputValue = e.target.value
        this.setState(() => ({
            inputValue
        }))
    }

    handleBtnClick = () => {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete = index => {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {
                list
            }
        })
    }
}
export default TodoList
