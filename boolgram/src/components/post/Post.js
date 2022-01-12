import React from "react";
import "./Post.css";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Comment from "../comment/Comment";

function Post({
  profile_picture,
  profile_name,
  profile_fullname,
  post_image,
  post_text,
  date,
  comments,
  likes,
}) {
  return (
    <div className="post">
      <Container>
        <Row>
          <Col xs={2}>
            <Image src={profile_picture} thumbnail roundedCircle />
          </Col>
          <Col xs={8}>
            <h5>{profile_fullname}</h5>
          </Col>
        </Row>
      </Container>

      <div style={{ display: "block", height: "inherit", width: "inherit" }}>
        <img className="post__image" src={post_image} alt="" />
      </div>

      <Container>
        <Row>
          <Col xs={1}>
            <div
              style={{ display: "block", height: 60, width: 60, padding: 10 }}
            >
              <Image
                src="https://clipart.info/images/ccovers/1516250282red-heart-emoji.png"
                alt="Like"
                thumbnail
              />
            </div>
          </Col>
          <Col xs={2}>
            <div
              style={{ display: "block", height: 60, width: 60, padding: 10 }}
            >
              <Image
                src="https://cdn.onlinewebfonts.com/svg/img_322817.png"
                alt="Comment"
                thumbnail
              />
            </div>
          </Col>
        </Row>

        <Row>
          <h6 className="post__text">
            <strong>{profile_name}</strong> {post_text}
          </h6>
        </Row>
        <Row>
          <div>
            {comments.map((comment) => (
              <Comment
                profile_fullname={comment.username}
                comment_text={comment.text}
              />
            ))}
          </div>
        </Row>
        <Row>
          <h6>
            <small>{date.date.slice(0, 10)}</small>
          </h6>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
