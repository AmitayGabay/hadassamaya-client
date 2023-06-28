import axios from "axios";
import { ADMIN_LOGIN_URL } from "../constants/urls";

const login = async (url, adminname, password) => {
    try {
        const res = await axios.post(
            `${url}`,
            { adminname, password },
            {
                withCredentials: true,
            }
        );
        localStorage.setItem("token", res.headers.authorization);
        return res.data;
    } catch (err) {
        throw err;
    }
};

const apiGet = async (url, sendToken) => {
    try {
        let { data } = await axios({
            method: "GET",
            url,
            params: sendToken ? { Authorization: localStorage.getItem("Authorization") } : undefined
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

const apiPost = async (url, body, sendToken) => {
    try {
        let { data } = await axios({
            method: "POST",
            url,
            data: body,
            params: sendToken ? { Authorization: localStorage.getItem("Authorization") } : undefined
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

const apiPut = async (url, body, sendToken) => {
    try {
        let { data } = await axios({
            method: "PUT",
            url,
            data: body,
            params: sendToken ? { Authorization: localStorage.getItem("Authorization") } : undefined
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

const apiDelete = async (url, body = {}, sendToken) => {
    try {
        let { data } = await axios({
            method: "DELETE",
            url,
            data: body,
            params: sendToken ? { Authorization: localStorage.getItem("Authorization") } : undefined
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

export {
    login,
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
}