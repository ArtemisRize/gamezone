import {createStore, combineReducers} from 'redux'
import gameReducer from '../reducers/gameReducer'
import modalReducer from '../reducers/modalReducer'

export default () => createStore(combineReducers({
    reviews: gameReducer,
    modal: modalReducer
}))