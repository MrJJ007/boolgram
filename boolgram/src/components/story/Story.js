import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Story.css"
import Image from 'react-bootstrap/Image';


function Story({profile_picture }) {
    return (     
        <div className="story" style={{width:100, height:100}}>
            <Image
            src={profile_picture} fluid
            roundedCircle thumbnail
          />
        </div>
        );
}
    
export default Story;