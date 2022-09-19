import {combineReducers} from 'redux'
import {location} from './location'

const Reducers = combineReducers({
    locationState: location
})

export default Reducers