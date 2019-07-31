import React, { Component, Fragment } from 'react'
import Header from './common/header'
import { GlobalStyle } from './style'
import { IconfontStyle } from './assets/iconfont/iconfont'

class App extends Component {

    render() {
        return (
            <Fragment>
                <div>
                    <Header/>
                </div>
                <GlobalStyle/>
                <IconfontStyle/>
            </Fragment>
        )
    }
}

export default App
