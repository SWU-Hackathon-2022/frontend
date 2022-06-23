import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import Header from "./Header";
import axios from "axios";

import styles from "../assets/css/MessageCard.module.css";

const MessageSend = (props) => {
  const baseURL = "http://49.50.163.18:8080";

  const [textarea, setTextarea] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  // const sendMessage = async (e) => {
  //   console.log("click login");
  //   e.preventDefault();
  //   var params = new URLSearchParams();

  //   params.append("message", textarea);

  //   // const response = await axios.post("", params);
  //   navigate("/message");
  // };

  const sendMessage = async () => {
    // console.log(textarea);

    // const response = await axios.post(
    //   `${baseURL}/note/composer`,
    //   JSON.stringify({
    //     musicId: 11,
    //     content: textarea,
    //   })
    // );

    // console.log(response);
    navigate("/message");
  };

  return (
    <>
      <Fragment className={styles.background}>
        <Header></Header>
        <Row className="m-1 align-items-start justify-content-center min-vh-100">
          <Col lg={5} md={5} className="py-8 py-xl-0">
            <Form onSubmit={sendMessage}>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label className={styles.subheading}>쪽지 하기 </Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="협업하고 싶은 작곡가에게 본인을 소개하세요" value={textarea} onChange={handleChange} className={styles.textarea} />
              </Form.Group>
              <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                {/* Button */}
                <Button className={styles.button} type="submit">
                  쪽지 보내기
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Fragment>
    </>
  );
};

export default MessageSend;
