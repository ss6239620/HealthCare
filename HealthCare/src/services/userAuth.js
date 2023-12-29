import axios from "axios"
import { API_URL } from "../constant"
import { resetAuthAsyncStorage, setAuthAsyncStorage } from "./getAuthAsyncStorage"


function Login(username, password) {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/user/login`, {
            username: username,
            password: password,
        }).then(async (response) => {
            try {
                await setAuthAsyncStorage(response)
                resolve(response)
            } catch (e) { reject(e) }
        }).catch((err) => {
            reject(err)
        })
    })
}

async function Logout(getState) {
    return new Promise((resolve, reject) => {
        const currestState = getState();
        const { token } = currestState.auth;
        axios.get(`${API_URL}/user/logout`, {
            headers: {
                'auth-token': { token },
            },
        }).then(async (res) => {
            resolve(res);
            await resetAuthAsyncStorage();
        }).catch((err) => reject(err));
    })
}

async function Signup(username, email, password) {
    // console.log(username);
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/user/register`, {
            username: username,
            email: email,
            password: password,
            fullname: "tester thakur"
        }).then(async (res) => {
            try {
                console.log(res);
                resolve(res)
            } catch (error) {
                reject(error)
            }
        }).catch((err) => {
            reject(err)
            // console.log(err);
        })
    })
}

export const userServices = {
    Logout, Login, Signup
}