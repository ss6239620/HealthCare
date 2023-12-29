import { userServices } from "../../services/userAuth";
import {
    AUTH_ERR_LOG_IN,
    AUTH_ERR_LOG_OUT,
    AUTH_ERR_SIGN_UP,
    AUTH_LOGGED_IN,
    AUTH_LOGGING_IN,
    AUTH_LOGGING_OUT,
    AUTH_LOG_OUT,
    AUTH_SIGNED_UP,
    Auth_SIGNING_UP

} from "../constant/auth";


export const loggingIn = (loggingIn) => ({
    type: AUTH_LOGGING_IN,
    payload: loggingIn,
})

export const loggedIn = (data) => ({
    type: AUTH_LOGGED_IN,
    payload: data
})

export const errorLogIn = (errorMessage) => ({
    type: AUTH_ERR_LOG_IN,
    payload: errorMessage,
})

export const login = (username, password) => (dispatch) => {
    dispatch(loggingIn(true));
    userServices.Login(username, password).then(async (res) => {
        await dispatch(loggedIn(res.data));
    }).catch((err) => {
        dispatch(errorLogIn('Wrong username or password'))
    }).finally(() => {
        dispatch(loggingIn(false));
    })
}

export const loggingOut = (loggingOut) => ({
    type: AUTH_LOGGING_OUT,
    payload: loggingOut,
})

export const loggedOut = () => ({
    type: AUTH_LOG_OUT,
});

export const errorLogOut = (errorMessage) => ({
    type: AUTH_ERR_LOG_OUT,
    payload: errorMessage,
});

export const logout = () => async (dispatch, getState) => {
    dispatch(loggingOut(true))
    await userServices.Logout(getState).then((res) => {
        dispatch(loggedOut())
    }).catch((err) => {
        dispatch(errorLogOut('Error logging out'));
    }).finally(() => {
        dispatch(loggingOut(false))
    });
};

export const signingUp = (signingUp) => ({
    type: Auth_SIGNING_UP,
    payload: signingUp
})

export const signedUp = (data) => ({
    type: AUTH_SIGNED_UP,
    payload: data
})

export const errorSignUp = (errormessage) =>({
    type: AUTH_ERR_SIGN_UP,
    payload: errormessage
})

export const Signup = (username, email, password) => (dispatch) => {
    dispatch(signingUp(true))
    userServices.Signup(username, email, password).then(async (res) => {
        await dispatch(signedUp(res.data));
    }).catch((err) => {
        console.log(err.data);
        dispatch(errorSignUp('Something went wrong'))
    }).finally(() => {
        dispatch(loggingIn(false));
    })
}