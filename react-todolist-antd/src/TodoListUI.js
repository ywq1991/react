import React, { Fragment } from 'react'
import { Button, Input, List } from  'antd'
import 'antd/dist/antd.css'

const TodoListUI = props => {
    return (
        <Fragment>
            <div style={{margin: 10}}>
                <Input
                    value={props.inputValue}
                    placeholder='todo info'
                    style={{width: 300, marginRight: 10}}
                    onChange={props.handleInputChange}
                />
                <Button
                    type="primary"
                    onClick={props.handleBtnClick}
                >
                    提交
                </Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>}
                style={{marginTop: 10}}
            />
        </Fragment>
    )
}

// class TodoListUI extends Component{
//     render() {
//         return (
//             <Fragment>
//                 <div style={{margin: 10}}>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder='todo info'
//                         style={{width: 300, marginRight: 10}}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button
//                         type="primary"
//                         onClick={this.props.handleBtnClick}
//                     >
//                         提交
//                     </Button>
//                 </div>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => <List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>}
//                     style={{marginTop: 10}}
//                 />
//             </Fragment>
//         )
//     }
// }

export default TodoListUI
