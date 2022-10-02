import React from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Logo from "../Common/Logo.png"
import {FaLock} from "@react-icons/all-files/fa/FaLock";
import {FaUser} from "@react-icons/all-files/fa/FaUser";
import {connect} from "react-redux";
import {getCaptchaTC, loginFetchAC, mainLoginTC} from "../../redux/authReducer";
import {Link, Navigate} from "react-router-dom";
import About from "../Common/About";
import {FaKey} from "react-icons/fa";
import {specialChars} from "@testing-library/user-event";

const LoginPage = (props) => {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            login: 'xenolm252@gmail.com',
            password: 'devastator252',
            rememberMe: false,
            fetch: false,
            antiBotSymbols: '',
            key: 'ecd08681-6048-43b3-9ce2-877a7dbc2176',
            loginFetch: props.loginFetch
        },
        validationSchema: Yup.object({
            login: Yup.string().max(50, 'login must be shorter than 10 characters').required(),
            password: Yup.string().min(6, 'password must contain at least 6 characters').required(),
            key: Yup.string().min(36, "key must be at least 36 characters, including letters, numbers & special characters").matches(["a-z"] & [0 - 9] & specialChars, "It's not looking like an api-key!").required(),

        }),
        onSubmit: ({login, password, rememberMe, antiBotSymbols, key}) => {
            // props.changeState(login, password, rememberMe, antiBotSymbols)
            props.mainLoginTC(login, password, rememberMe, antiBotSymbols, key)
            console.log(key)
            // props.send()
            props.loginFetchAC(true)
        }
    })

    if (props.auth) return <Navigate to={`/profile/${props.currentUser}`}/>

    return (
        <form onSubmit={handleSubmit}>
            <div className={"login-page-block"}>
                <div>
                    <img className={"login-page-logo"} src={Logo}></img>
                    <h4 className={"login-page-title"}>
                        React devs community
                    </h4>
                    <h4 className={"login-page-animation"}>Never Surrender</h4>
                    <div className="login-page-inputs-block">
                        <div>
                            <label><FaUser/></label>
                            <input className={"login-page-login-input login-page-input-fields"} id={'login'}
                                   placeholder={'login'}
                                   value={values.login}
                                   onChange={handleChange('login')} onBlur={handleBlur}/>
                        </div>
                        {touched.login && errors.login ? (
                            <div className={"login-page-errors"}>{errors.login}</div>) : null}
                        <div>
                            <label><FaLock/> </label>
                            <input className={"login-page-password-input login-page-input-fields"} id={'password'}
                                   placeholder={'password'}
                                   type={"password"}
                                   value={values.password}
                                   onChange={handleChange('password')} onBlur={handleBlur}/>
                        </div>
                        {touched.password && errors.password ? (
                            <div className={"login-page-errors"}>{errors.password}</div>) : null}
                        <div>
                            <label><FaKey/> </label>
                            <input className={"login-page-key-input login-page-input-fields"} id={'key'}
                                   placeholder={"key"}
                                   type={"key"}
                                   value={values.key}
                                   onChange={handleChange('key')} onBlur={handleBlur}/>
                        </div>
                        {touched.key && errors.key ? (
                            <div className="login-page-key-error-container">
                                <div className="login-page-errors"
                                >{errors.key}</div>
                            </div>) : null}
                    </div>
                    <div className={"login-page-remember-checkBox"}>
                        <input id={'rememberMe'} onChange={handleChange} value={values.rememberMe}
                               type={"checkbox"}/>
                        <label>Remember me</label>
                    </div>
                    {props.captcha &&
                        <div className={"login-page-captcha-block"}><img className={"login-page-captcha-image"}
                                                                         src={props.captcha}/>
                            <div>
                                <input className={"login-page-captcha-input"} placeholder={'enter symbols'}
                                       value={values.antiBotSymbols} onChange={handleChange} id={'antiBotSymbols'}/>
                                value={values.antiBotSymbols} onChange={handleChange} id={'antiBotSymbols'}/>
                            </div>
                        </div>}
                    <div>
                        <button className={"login-page-login-button"} disabled={values.loginFetch === true}
                                type={"submit"}>Login
                        </button>
                    </div>
                    {props.error && <div className={"login-page-auth-error"}>Wrong Email or password</div>}
                    <div>Not a member? <div><Link className={"login-page-signUp-button"}
                                                  to="//social-network.samuraijs.com/signUp"
                                                  target="_blank">Sign up</Link></div>
                    </div>
                    <About/>
                </div>
            </div>
        </form>
    )
}

let mapStateToProps = (state) => {
    return {
        currentUser: state.auth.id,
        auth: state.auth.isLogged,
        error: state.auth.error,
        apiKey: state.auth.apiKey,
        captcha: state.auth.captcha,
        loginFetch: state.auth.fetching
    }
}

export default connect(mapStateToProps, {mainLoginTC, getCaptchaTC, loginFetchAC})(LoginPage)



