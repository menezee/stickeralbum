import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import AlbumReducer from './AlbumReducer'

export default combineReducers({
    AlbumReducer,
    firebase: firebaseReducer
})
