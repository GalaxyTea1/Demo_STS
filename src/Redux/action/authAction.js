import { postDataAPI } from '../../api/postApi';
import { GLOBALTYPES } from '../type/globalType';

export const login = (data) => async (dispatch) => {
    try {
        const res = await postDataAPI('login', data);
        console.log(res);
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user,
            },
        });
        localStorage.setItem('login-first', true);
    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: error.response.data.msg });
        console.log(error.response.data.msg);
    }
};

export const refreshToken = () => async (dispatch) => {
    const loginFirst = localStorage.getItem('login-first');
    if (loginFirst) {
        try {
            const res = await postDataAPI('refresh_token');
            dispatch({
                type: GLOBALTYPES.AUTH,
                payload: {
                    token: res.data.access_token,
                    user: res.data.user,
                },
            });
        } catch (error) {
            console.log(error.response.data.msg);
        }
    }
};

export const register = (data) => async (dispatch) => {
    try {
        const res = await postDataAPI('register', data);
        console.log(res);
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user,
            },
        });

        localStorage.setItem('login-first', true);
    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: error.response.data.msg });
        console.log(error.response.data.msg);
    }
};

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('login-first');
        await postDataAPI('/logout');
        window.location.href = '/';
    } catch (error) {
        console.log(error.response.data.msg);
    }
};
