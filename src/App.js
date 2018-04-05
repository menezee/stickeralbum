import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Store from './redux/Store'
import { Header } from './components'
import Album from './containers/Album'

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

class App extends Component {

    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Fragment>
                        <Header />
                        <div style={containerStyle}>
                            <Switch>
                                <Route exact path='/' component={Album} />
                            </Switch>
                        </div>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
