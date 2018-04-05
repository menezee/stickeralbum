import { ADD_TO_ALBUM } from '../types'

export const INITIAL_STATE = {
    stickers: ['Batman', 'Robin', 'Riddler', 'Batman', 'Robin']
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_ALBUM:
            return {
                stickers: [
                    ...state.stickers,
                    action.payload
                ]
            }
        default:
            return state
    }
}
