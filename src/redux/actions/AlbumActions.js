import { ADD_TO_ALBUM } from '../types'

export const addToAlbum = sticker => ({
    type: ADD_TO_ALBUM,
    payload: sticker
})
