import axios from 'axios'

import {
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,

    MESSAGE_GET_SUCCESS,
    MESSAGE_CREATE_SUCCESS,


} from '../constants/messageConstants'

const base_url = "https://hackathon-mw.herokuapp.com/api/v1";

const authAxios = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: "application/json",
       "Content-Type": "application/json",
    }
})


export const listMessages = () => async (dispatch) => {
    try {
        const { data } = await authAxios.get(base_url+`/messages`)
        dispatch({
            type: MESSAGE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getMessageByChannelId = (id) => async (dispatch) => {
    try {
        dispatch({ type: MESSAGE_LIST_REQUEST })

        const { data } = await authAxios.get(base_url+`/messages/channel/${id}`)
        dispatch({
            type: MESSAGE_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const sendMessage = (value) => async (dispatch) => {
    try {

        const { data } = await authAxios.post(base_url+`/messages`, value)
        console.log(data);
        dispatch({
            type: MESSAGE_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

