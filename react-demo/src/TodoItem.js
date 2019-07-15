import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const  { item } = this.props
        return (
            <div onClick={this.handleItem}>
                {item}
            </div>
        )
    }

    handleItem = () => {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    item: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

TodoItem.defaultProps = {
    index: 0
}

export default TodoItem
