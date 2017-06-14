/**
 * Created by Administrator on 2017/3/8.
 */
import {message} from 'antd';
import messageJson from './../common/message.json';
import {removeLoginStorage,fetchData} from './../common/common.js';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const ACTIVE_SUCCESS = 'ACTIVE_SUCCESS';
export const ACTIVE_FAIL = 'ACTIVE_FAIL';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAIL = 'SIGNOUT_FAIL';

export function checkLogin() {
    return dispatch => {
        const username = localStorage.getItem('username') || sessionStorage.getItem('username');
        const token = localStorage.getItem('usertoken') || sessionStorage.getItem('usertoken');
        if (username && token) {
            dispatch({
                type: LOGIN_SUCCESS,
                username: username,
                token:token
            });
            return true
        } else {
            return false
        }
    }
}
export function login(user) {
    return dispatch => {
        fetchData.post(`/login`,  {
            username:user.username,
            password:user.password
        })
            .then(function (response) {
                console.log(response);
                sessionStorage.setItem('username',user.username);
                sessionStorage.setItem('usertoken',response.data.token);
                sessionStorage.setItem('userPermissions',JSON.stringify(response.data.permissions.data));
                if(user.remember === true){
                    localStorage.setItem('username',user.username);
                    localStorage.setItem('usertoken',response.data.token);
                    localStorage.setItem('userPermissions',JSON.stringify(response.data.permissions.data));
                }
                message.success(messageJson['sign in success']);
                dispatch({
                    type: LOGIN_SUCCESS,
                    username: user.username,
                    token:response.data.token
                });
            })
            .catch(function (error) {
                if(error.toString()==='Error: Network Error'){
                    message.error(messageJson['network error'],3);
                    return false
                }
                if(error.response.status === 409){
                    message.error(messageJson['email no active']);
                    dispatch({
                        type: ACTIVE_FAIL,
                    });
                } else if(error.response.status === 403){
                    message.error(messageJson['sign in fail']);
                }else{
                    message.error(messageJson['unknown error']);
                }
            });
    }
}

export function signout() {
    console.log("执行退出");
    return dispatch => {
        fetchData({
            url: `/logout`,
            method: 'post',
        })
            .then(function (response) {
                removeLoginStorage();
                message.success(messageJson['sign out success']);
                dispatch({
                    type: SIGNOUT_SUCCESS,
                });
            })
            .catch(function (error) {
                removeLoginStorage();
                message.error(`${error.response.data.message},请重新登陆`);
                dispatch({
                    type: SIGNOUT_FAIL,
                });
            });
    }
}

