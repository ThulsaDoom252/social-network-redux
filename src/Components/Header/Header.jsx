import React, {useEffect, useState} from "react";
import anonymous from "../Common/Anonymous.jpg"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {loginTC, logOutTC} from "../../redux/authReducer";
import {avatarAC, currentUserDataTC, setAvatarTC} from "../../redux/profileReducer";
import {CgEnter, CgLogOut} from "react-icons/cg";
import {GiHamburgerMenu} from "react-icons/gi";

const Header = (props) => {
    useEffect(() => {
        props.setAvatarTC(`${props.id}`)
    }, [])

    const [mobileNavBar, showMobileNavBar] = useState(false)

    const showNavBar = () => {
        showMobileNavBar(true)
    }

    const hideNavBar = () => {
        showMobileNavBar(false)
    }

    const logOut = () => {
        props.logOutTC()
        setTimeout(() => {
            props.avatarAC(null)
        }, 2000)
    }

    const current = props.currentUser
    return (
        <div
            style={{
                "background-color": props.nightMode && `${props.nightModeColors["sidebar/header-background"]}`,
                "border-color": props.nightMode && props.nightModeColors["nightMode-border-color"]
            }}
            className={!props.logger ? "header-container-logout-state" : "header-container-login-state"}>
            <div hidden={!props.logger} className={"header-burger-sidebar"}>
                <button className={"header-burger-sidebar-button"}
                        style={{
                            "background-color": "transparent",
                            "color": props.nightMode ? props.nightModeColors["header-burger-button-color"] : "yellow",
                            "border": "none"
                        }}
                        onClick={!mobileNavBar ? showNavBar : hideNavBar}>
                    <GiHamburgerMenu/></button>
                <div style={{"background-color": props.nightMode && props.nightModeColors["header-burger-menu"]}}
                     hidden={!mobileNavBar} className={"header-burger-sidebar-block"}>
                    <div className="header-burger-sidebar-menu"></div>
                    <NavLink to={`/profile/${current}`}
                             onClick={hideNavBar}
                             style={{"color": props.nightMode && props.nightModeColors["header-burger-button-color"]}}
                             className={navData => navData.isActive ? "burger-item-active" : "burger-item"}>Profile</NavLink>
                    <NavLink to="/dialogs"
                             onClick={hideNavBar}
                             style={{"color": props.nightMode && props.nightModeColors["header-burger-button-color"]}}
                             className={navData => navData.isActive ? "burger-item-active" : "burger-item"}> Messages </NavLink>
                    <NavLink to="/users"
                             style={{"color": props.nightMode && props.nightModeColors["header-burger-button-color"]}}
                             onClick={hideNavBar}
                             className={navData => navData.isActive ? "burger-item-active" : "burger-item"}> Users </NavLink>
                    <NavLink to="/News"
                             style={{"color": props.nightMode && props.nightModeColors["header-burger-button-color"]}}
                             onClick={hideNavBar}
                             className={navData => navData.isActive ? "burger-item-active" : "burger-item"}> News </NavLink>
                    <NavLink to="/music"
                             style={{"color": props.nightMode && props.nightModeColors["header-burger-button-color"]}}
                             onClick={hideNavBar}
                             className={navData => navData.isActive ? "burger-item-active" : "burger-item"}> Music </NavLink>
                    <NavLink to="/settings"
                             style={{"color": props.nightMode && props.nightModeColors["header-burger-button-color"]}}
                             onClick={hideNavBar}
                             className={navData => navData.isActive ? "burger-item-active" : "burger-item"}> Settings </NavLink>
                </div>
            </div>
            <div className={props.logger ? "header-slogan-block" : "header-slogan-block-logout"}>
                <div style={{"color": props.nightMode && props.nightModeColors["header-slogan-title/welcome-label"]}}
                     className={"header-slogan-title"}>R.S.S.N
                </div>
                <div style={{"color": props.nightMode && props.nightModeColors["header-slogan-text/user-name"]}}
                     className={props.logger ? "header-slogan" : "header-slogan-logout"}>Watch.Learn.Win
                </div>
            </div>
            <div className={"header-current-user-block"}>
                {props.logger &&
                    <img className={"header-current-user-avatar"} src={!props.avatar ? anonymous : props.avatar} alt={"avatar logo"}/>}
                {props.logger && <div className={"header-current-user-name-block"}>
                    <p style={{"color": props.nightMode && props.nightModeColors["header-slogan-title/welcome-label"]}}>Welcome</p>
                    <NavLink style={{"color": props.nightMode && props.nightModeColors["header-slogan-text/user-name"]}}
                             to={`/profile/${props.id}`} className={"header-current-user-name"}>{props.login}</NavLink>
                </div>}
                {props.logger &&
                    <div>
                        <button style={{"color": props.nightMode && props.nightModeColors["header-buttons-color"]}}
                                className={"header-logout-button"} onClick={logOut}><CgLogOut/>logout
                        </button>
                    </div>}
                {!props.logger &&
                    <NavLink style={{"color": props.nightMode && props.nightModeColors["header-buttons-color"]}}
                             className={"header-login-button"} to={'/mainlogin'}>Login<CgEnter/></NavLink>}
            </div>
        </div>

    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        logger: state.auth.isLogged,
        login: state.auth.login,
        id: state.auth.id,
        avatar: state.profilePage.avatar,
        currentUser: state.auth.id,
        nightMode: state.app.nightMode,
        nightModeColors: state.app.nightModeColors,
    }
}

export default connect(mapStateToProps, {loginTC, logOutTC, currentUserDataTC, setAvatarTC, avatarAC})(Header)

