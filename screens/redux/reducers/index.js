import {combineReducers} from 'redux'
import {announcements} from './announcements'

const Reducers = combineReducers({
    announcementsState: announcements
})

export default Reducers