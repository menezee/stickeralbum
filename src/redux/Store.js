import { createStore, compose } from 'redux'
import RootReducer from './reducers'
import { reactReduxFirebase } from 'react-redux-firebase'
import * as firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyDp0aCRhFBH0ZDN3aemUGPqW3O0-s7stto',
    databaseURL: 'https://sticker-album-b07ad.firebaseio.com',
    authDomain: '199906210400-rgm23gik3odeh1efv52itiqpbf4khjdu.apps.googleusercontent.com'
}

const rrfConfig = { userProfile: 'users' }

firebase.initializeApp(config)

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore)

export default createStoreWithFirebase(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
