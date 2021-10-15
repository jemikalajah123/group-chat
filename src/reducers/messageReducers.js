import {
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,

    MESSAGE_GET_SUCCESS,
    MESSAGE_CREATE_SUCCESS,
} from '../constants/messageConstants'


export const messageReducer = (state = { message: [], channelMessage: [] }, action) => {
    switch (action.type) {
        case MESSAGE_LIST_REQUEST:
            return { ...state,loading: true, message: [] }

        case MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.data,
                page: action.payload,
                pages: action.payload
            }

            case MESSAGE_GET_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    channelMessage: action.payload.data,
                }

            case MESSAGE_CREATE_SUCCESS:    
                return {
                    ...state,
                    loading: false,
                    channelMessage: action.payload.data,
                }

        case MESSAGE_LIST_FAIL:
            return { ...state,loading: false, error: action.payload }

        default:
            return state
    }
}
