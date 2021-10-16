import {
    CHANNEL_LIST_REQUEST,
    CHANNEL_LIST_SUCCESS,
    CHANNEL_LIST_FAIL,
    CHANNEL_ACTIVE,
    CHANNEL_SEARCH_LIST,

    CHANNEL_GET_SUCCESS,
    CHANNEL_CREATE_SUCCESS,
} from '../constants/channelConstants'


export const channelListReducer = (state = { channel: [], activeChannel: [], filterChannel: [], channelID: [] }, action) => {
    switch (action.type) {
        case CHANNEL_LIST_REQUEST:
            return { loading: true, channel: [] }

        case CHANNEL_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                channel: action.payload.data,
                page: action.payload,
                pages: action.payload
            }

        case CHANNEL_ACTIVE:    
        return {
            ...state,
            loading: false,
            activeChannel: action.payload,
        }

        case CHANNEL_SEARCH_LIST:    
        return {
            ...state,
            loading: false,
            filterChannel: action.payload.data,
        }

        case CHANNEL_GET_SUCCESS:   
            return {
                ...state,
                loading: false,
                channelID: action.payload.data,
            }

        case CHANNEL_CREATE_SUCCESS:    
            return {
                ...state,
                loading: false,
                channelID: action.payload.data,
                channel: [action.payload.data, ...state.channel]
            }

        case CHANNEL_LIST_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.payload }

        default:
            return state
    }
}
