import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import Content from "../content/Content";
import "./Loader.css"
import "bootstrap/dist/css/bootstrap.css";

function Loader() {
    const loadingPosts = [{
        "profile_picture": "https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg",
        "profile_name": "",
        "profile_fullname": "",
        "post_image": "https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg",
        "post_text": "",
        "date": {
          "date": "",
          "timezone_type": 0,
          "timezone": ""
        },
        "comments": [
         
        ],
        "likes": [
          
        ]}
    ]

    const loadingStories =[{"profile_picture":"https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg","profile_name":""},{"profile_picture":"https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg","profile_name":""},{"profile_picture":"https://pitshanger-ltd.co.uk/images/colours/637-TL_Tracing.jpg","profile_name":""}]
  return (
    <div >
        <div className="Loader">
     <Spinner  animation="border" />
     </div>

       <Content
       posts={loadingPosts}
       stories={loadingStories}
       />
    </div>
  );
}

export default Loader;
