import React from "react";
import P1 from './MyPosts.module.css'
import Post from "./Post/Post";
import {connect} from "react-redux"
import {addPostCreator} from "../../../redux/profileReducer";
import {useFormik} from "formik";

const MyPosts = (props) => {
    const {values,handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            newPost: ''
        },

        onSubmit: ({newPost}, {resetForm}) => {
            props.addPostCreator(newPost)
            resetForm(values.newPost)
        }
    })
    let postsElements = props.state.posts.map(post => <Post message={post.message} likeCounts={post.likesCount}/>)
    return (
        <div className={P1.postBlock}>
            <h3>My post </h3>
            <div>
                <form onSubmit={handleSubmit}>
                <div>
                    <textarea id={'newPost'} onChange = {handleChange} value={values.newPost}/>
                </div>
                <div>
                    <button type={"submit"}>Add post</button>
                </div>
                </form>
            </div>
            <div className={P1.posts}>
                {postsElements}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

export default connect (mapStateToProps, {addPostCreator}) (MyPosts)














