import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction, getAddItemAction } from "./store/actionCreators"

const TodoList = props => {
    const { inputValue, list, handleInputChange, handleBtnClick } = props

    return (
        <Fragment>
            <div>
                <input type="text"
                       value={inputValue}
                       onChange={handleInputChange}
                />
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: (e) => {
            const action = getInputChangeAction(e.target.value)
            dispatch(action)
        },
        handleBtnClick: () => {
            const action = getAddItemAction()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
