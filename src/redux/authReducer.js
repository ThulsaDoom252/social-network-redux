import {login, loginApi} from "../Api/api";
import {setAvatarTC} from "./profileReducer";

//---------------------------------------------------------------------------ACTIONS
const FALSY_DATA = 'FALSY_DATA'
const WRONG_DATA = 'WRONG_DATA'
const GET_CAPTCHA = 'GET_CAPTCHA'
const LOGIN_FETCH = 'LOGIN_FETCH'
const SET_MY_DATA = 'SET_MY_DATA'
const LOG_STATUS = 'LOG_STATUS'
const FAKE = 'FAKE'
const DELETE = 'DELETE'

//---------------------------------------------------------------------------ACTION CREATORS

export const AuthAC = (id, email, login, api) => ({type: 'SET_MY_DATA', data: {id, email, login}})
export const loggerAC = (isLogged) => ({type: 'LOG_STATUS', isLogged})
export const falsyAC = (action) => ({type: FALSY_DATA, action})
export const captchaAc = (get) => ({type: GET_CAPTCHA, get})
export const loginFetchAC = (isFetch) => ({type: LOGIN_FETCH, isFetch})


//----------------------------------------------------------------------------STATE


const inittialState = {
    id: null,
    email: null,
    login: null,
    isLogged: false,
    error: false,
    captcha: null,
    fetching: false,
}

//---------------------------------------------------------------------------REDUCER

const authReducer = (state = inittialState, action) => {
    switch (action.type) {
        case SET_MY_DATA:
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,

            }
        default:
            return state

        case LOG_STATUS :
            return {
                ...state, isLogged: action.isLogged
            }

        case LOGIN_FETCH :
            return {
                ...state,
                fetching: action.isFetch
            }

        case GET_CAPTCHA :
            return {
                ...state,
                captcha: action.get
            }
        case  FAKE :
            return {
                ...state,
                isLogged: true,
                id: 23631,
                email: 'xenolm252@gmail.com',
                name: 'ThulsaDoom252',
            }

        case DELETE :
            return {
                ...state,
                isLogged: false,
                id: null,
                email: null,
                name: null
            }

        case FALSY_DATA :
            return {
                ...state,
                error: action.action
            }

    }
}




//---------------------------------------------------------------------------THUNKS

export const loginTC = () => (dispatch) => {
    return login.auth().then(data => {
        const {id, email, login} = data.data
        if (data.resultCode === 0) {
            dispatch(AuthAC(id, email, login))
            dispatch(loggerAC(true))
            dispatch(falsyAC(false))
            dispatch(setAvatarTC(id))
        } else {
            dispatch(loggerAC(false))

        }
    })
}


export const getCaptchaTC = () => {
    return async (dispatch) => {
        const response = await loginApi.getCaptcha()
        debugger
        dispatch(captchaAc(response.data.url))
    }
}

export const mainLoginTC = (email, password, rememberMe, antiBotSymbols, key) => {
    return async (dispatch) => {
        const data = await loginApi.login(email, password, rememberMe, antiBotSymbols)
        if (data.resultCode === 0) {
            dispatch(loginTC())
            dispatch(loginFetchAC(false))
            localStorage.setItem("apiKey", key)
        } else if (data.resultCode === 1) {
            dispatch(falsyAC(true))
            dispatch(loginFetchAC(false))
        } else if (data.resultCode === 10) {
            dispatch(getCaptchaTC())
            dispatch(loginFetchAC(false))
        }
    }
}


export const logOutTC = () => {
    return async (dispatch) => {
        const data = await loginApi.logout()
        if (data.resultCode === 0) {
            dispatch(loginTC())
        }
    }
}

export default authReducer