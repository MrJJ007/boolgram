
import React from "react";
import Post from "../post/Post";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Story from "../story/Story";
import "bootstrap/dist/css/bootstrap.css";

function Content({posts,stories}){
    return(
        <Col sm={8}>
          <div className="content">
            <div className="storyline">
              <Card fluid style={{ height: "10rem" }}>
                <Row>
                  {stories.slice(0, 3).map((story) => (
                    <Col>
                      <Story
                        profile_picture={story.profile_picture}
                        profile_name={story.profile_name}
                      />
                    </Col>
                  ))}
                </Row>
              </Card>
            </div>
            <div className="timeline"> 
                <Row fluid>
                    <div className="timeline">
                      {posts.map((post) => (
                        <Post
                          profile_picture={post.profile_picture}
                          profile_name={post.profile_name}
                          profile_fullname={post.profile_fullname}
                          post_image={post.post_image}
                          post_text={post.post_text}
                          date={post.date}
                          comments={post.comments}
                          likes={post.likes}
                        />
                      ))}
                    </div>
                </Row>
            </div>
          </div>
          </Col>
    );
}

export default Content;