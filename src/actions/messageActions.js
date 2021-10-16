import axios from 'axios'

import {
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,

    MESSAGE_GET_SUCCESS,
    MESSAGE_CREATE_SUCCESS,


} from '../constants/messageConstants'

const base_url = "https://hackathon-mw.herokuapp.com/api/v1";



export const listMessages = () => async (dispatch, getState) => {
    try {
        const {userLogin : {userInfo}, } = getState();
        const authAxios = axios.create({
            headers: {
                authorization: `Bearer ${userInfo.token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
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

export const getMessageByChannelId = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: MESSAGE_LIST_REQUEST })
        const {userLogin : {userInfo}, } = getState();
        const authAxios = axios.create({
            headers: {
                authorization: `Bearer ${userInfo.token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })

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

export const sendMessage = (value) => async (dispatch, getState) => {
    try {

        const {userLogin : {userInfo}, } = getState();
        const authAxios = axios.create({
            headers: {
                authorization: `Bearer ${userInfo.token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })

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

