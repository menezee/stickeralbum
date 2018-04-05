import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components'
import Album from './containers/Album'

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

class App extends Component {

    render() {
        const stickerList = ['Batman', 'Robin', 'Riddler', 'Batman', 'Batman']

        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <div style={containerStyle}>
                        <Switch>
                            <Route exact path='/gettingStarted' render={props => <Album stickers={stickerList} {...props} />} />
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
