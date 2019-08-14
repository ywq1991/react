import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import { GlobalStyle } from './style'
import { IconfontStyle } from './assets/iconfont/iconfont'
import Home from './pages/home'
import Login from './pages/login'
import Write from './pages/write'
import Detail from './pages/detail'

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Header/>
                <Router>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/write' exact component={Write}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                </Router>
                <GlobalStyle/>
                <IconfontStyle/>
            </Provider>
        )
    }
}

export default App
