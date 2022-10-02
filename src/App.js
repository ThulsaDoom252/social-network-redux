import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {connect} from "react-redux";
import News from "./Components/News/News";
import React, {useEffect} from "react";
import Initialize from "./Components/Common/Initialize";
import {initializeTC} from "./redux/appReducer";
import Greetings from "./Components/Greetings";
import EditProfile from "./Components/Profile/EditProfile";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import Users from "./Components/Users/Users";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import About from "./Components/Common/About";
import LoginPage from "./Components/MainLogin/LoginPage";
import NotFoundPage from "./Components/Common/NotFound";
import SideBar from "./Components/SideBar/SideBar";

const App = (props) => {
    useEffect(() => {
        props.initializeTC()
    }, [])
    if (!props.initialized) {
        return (
            <Initialize/>
        )
    } else {
        return (
            <BrowserRouter>
                <div style={{"background-color":props.nightMode && `${props.nightModeColors["wrapper-background"]}`}} className={!props.nightMode ? "wrapper" : "wrapper-nightMode"}>
                    <div className={props.auth ? "container" : null}>
                        <Header/>
                        <SideBar/>
                        <div style={{"background-color":props.nightMode && `${props.nightModeColors["content-background"]}`, "border-color": props.nightMode && props.nightModeColors["nightMode-border-color"]}} className={props.auth ? "container-content" : "logout-container-content"}>
                            <Routes>
                                <Route path='' element={<Greetings/>}/>
                                <Route path={`/profile/:userId`} element={<Profile/>}/>
                                <Route path='/dialogs' element={<Dialogs/>}/>
                                <Route path='/News' element={<News/>}/>
                                <Route path='/users' element={<Users/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                                <Route path='/mainlogin' element={<LoginPage/>}/>
                                <Route path='/editprofile' element={<EditProfile/>}/>
                                <Route path='/about' element={<About/>}/>
                                <Route path='*' element={<NotFoundPage/>}/>
                                <Route path='/profile/*' element={<NotFoundPage/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}


let mapStateToProps = (state) => {
    return {
        auth: state.auth.isLogged,
        initialized: state.app.initialized,
        currentId: state.auth.id,
        nightMode: state.app.nightMode,
        nightModeColors: state.app.nightModeColors
    }
}

export default connect(mapStateToProps, {initializeTC})(App)


