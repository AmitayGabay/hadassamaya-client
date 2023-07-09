import axios from "axios";

const login = async (url, adminname, password) => {
    try {
        const res = await axios.post(
            `${url}`,
            { adminname, password },
            {
                withCredentials: true,
            }
        );
        return res.data;
    } catch (err) {
        throw err;
    }
};

const logout = async (url) => {
    try {
        const res = await axios.delete(
            `${url}`,
            {
                withCredentials: true,
            }
        );
        return res.data;
    } catch (err) {
        throw err;
    }
};

const apiGet = async (url) => {
    try {
        let { data } = await axios({
            method: "GET",
            url,
            withCredentials: true
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

const apiPost = async (url, body) => {
    try {
        let { data } = await axios({
            method: "POST",
            url,
            withCredentials: true,
            data: body
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

const apiPut = async (url, body) => {
    try {
        let { data } = await axios({
            method: "PUT",
            url,
            withCredentials: true,
            data: body
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

const apiDelete = async (url, body = {}) => {
    try {
        let { data } = await axios({
            method: "DELETE",
            url,
            withCredentials: true,
            data: body
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

export {
    login,
    logout,
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
}