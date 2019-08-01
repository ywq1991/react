import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from "immutable"

const changeList = (data) => {
    return {
        type: actionTypes.CHANGE_LIST,
        data: fromJS(data)
    }
}

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            let data = res.data
            dispatch(changeList(data.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

