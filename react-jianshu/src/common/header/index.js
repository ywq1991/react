import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'

class Header extends Component {

    getListArea() {
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            handleChangePage(page, totalPage, this.spinIcon)
                        }}>
                            {/* ref */}
                            <i ref={icon => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
        return (
            <HeaderWrapper>
                <Router>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </Router>

                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ?
                            <NavItem onClick={logout} className='right'>退出</NavItem> :
                            <Router>
                                <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                            </Router>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {
                                    handleInputFocus(list)
                                }}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: (list) => {
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())

        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter: () => {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave: () => {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage: (page, totalPage, spin) => {
            // replace 只保留数字
            let originAngle = Number(spin.style.transform.replace(/[^0-9]/ig, ''))
            originAngle = originAngle ? originAngle : 0
            spin.style.transform = `rotate(${originAngle + 360}deg)`
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
