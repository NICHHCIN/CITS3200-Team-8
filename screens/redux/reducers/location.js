import {ChangeLocation, ChangeAnnouncements} from "../constants"

const init = {
    currentLocation: null,
    announcements: []
}

export const location = (state = initialState, action) => {
    switch (action.type) {
        case ChangeLocation:
            return {
                ...state,
                currentLocation: action.currentLocation
            }
        case ChangeAnnouncements:
            return {
                ...state,
                announcements: action.announcements
            }
        default:
            return state;
    }
}