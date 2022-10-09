import {ChangeAnnouncements} from "../constants"

const init = {
    announcements: []
}

export const announcements = (state = init, action) => {
    switch (action.type) {
        case ChangeAnnouncements:
            return {
                ...state,
                announcements: action.announcements
            }
        default:
            return state;
    }
}