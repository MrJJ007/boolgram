import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Comment.css"

function Comment({profile_fullname,comment_text }) {
    return (
        <div className="comment" >
            <h6><b>{profile_fullname}</b>  {comment_text}</h6>
        </div>
        );
}
    
export default Comment;