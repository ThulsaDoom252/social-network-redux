import React from "react";
import i from './Post.module.css'

const Post = (props) => {
    return(
        <div className= {i.item}>
            <img src ='https://i.pinimg.com/236x/f7/27/3c/f7273cfbbd85e84d079bc4413e26ae3a--ukraina-avatar.jpg'/>
            <div>
                {props.message}
            </div>
                <span>like</span> {props.likeCounts}
        </div>
   )
}

export default Post