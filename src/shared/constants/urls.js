// const BASE_URL = "http://localhost:7000/";
const BASE_URL = "https://hadassamaya.onrender.com/";
const CLIENT_URL = BASE_URL + "client/";
const ADMIN_URL = BASE_URL + "admin/";

// client
const CREATE_CLIENT_URL = CLIENT_URL;

// admin
const ADMIN_LOGIN_URL = ADMIN_URL + "login/";
const ADMIN_LOGOUT_URL = ADMIN_URL + "logout/";
const GET_CURRENT_ADMIN_URL = ADMIN_URL + "get-current/";
const GET_CLIENTS_URL = ADMIN_URL + "get-clients/";
const ADMIN_EDIT_CLIENT_URL = ADMIN_URL + "edit-client/";
const ADMIN_DELETE_CLIENT_URL = ADMIN_URL + "delete-client/";

export {
    BASE_URL as default,
    // client
    CREATE_CLIENT_URL,
    // admin
    ADMIN_LOGIN_URL,
    ADMIN_LOGOUT_URL,
    GET_CURRENT_ADMIN_URL,
    GET_CLIENTS_URL,
    ADMIN_EDIT_CLIENT_URL,
    ADMIN_DELETE_CLIENT_URL
};