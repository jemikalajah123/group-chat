import axios from 'axios'

import {
    CHANNEL_LIST_REQUEST,
    CHANNEL_LIST_SUCCESS,
    CHANNEL_LIST_FAIL,
    CHANNEL_ACTIVE,
    CHANNEL_SEARCH_LIST,

    CHANNEL_GET_SUCCESS,
    CHANNEL_CREATE_SUCCESS


} from '../constants/channelConstants'

const base_url = "https://hackathon-mw.herokuapp.com/api/v1";

const authAxios = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})


export const listChannels = () => async (dispatch) => {
    try {

        const { data } = await authAxios.get(base_url+`/channels`)
        dispatch({
            type: CHANNEL_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHANNEL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getChannelBYId = (id) => async (dispatch) => {
    try {

        const { data } = await authAxios.get(base_url+`/channels/${id}`)
        dispatch({
            type: CHANNEL_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHANNEL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const selectChannel = (data) => async (dispatch) => {
    try {

        dispatch({
            type: CHANNEL_ACTIVE,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHANNEL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createChannel = (value) => async (dispatch) => {
    try {

        const { data } = await authAxios.post(base_url+`/channels`, value)
        dispatch({
            type: CHANNEL_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHANNEL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const searchChannel = (string) => async (dispatch) => {
    try {

        const { data } = await authAxios.get(base_url+`/channel/search?string=${string}`)
        dispatch({
            type: CHANNEL_SEARCH_LIST,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHANNEL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
