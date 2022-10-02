// import React from 'react';
// import {currentUserDataTC} from "../../redux/profileReducer";
// import {connect} from "react-redux";
// import EditProfile from "./EditProfile";
//
// class EditProfileContainer extends React.Component {
//     componentDidMount() {
//         // this.props.currentUserDataTC(this.props.currentId)
//     }
//
//     render() {
//         return (
//             <EditProfile {...this.props}/>
//         );
//     }
// }
//
// let mapStateToProps = (state) => {
//     return {
//         currentId: state.auth.id,
//         name: state.profilePage.name,
//         about: state.profilePage.about,
//         applicant: state.profilePage.applicant,
//         description: state.profilePage.description,
//         github: state.profilePage.github,
//         vk: state.profilePage.vk,
//         facebook: state.profilePage.facebook,
//         instagram: state.profilePage.instagram,
//         twitter: state.profilePage.twitter,
//         site: state.profilePage.site,
//         youtube: state.profilePage.youtube,
//         link: state.profilePage.link,
//         website: state.profilePage.website,
//         status: '',
//     }
// }
//
//
// export default connect(mapStateToProps, {currentUserDataTC})(EditProfileContainer);