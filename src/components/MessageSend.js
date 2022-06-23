import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const MessageSend = (props) => {
  const [textarea, setTextarea] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const sendMessage = async (e) => {
    console.log("click login");
    e.preventDefault();
    var params = new URLSearchParams();

    params.append("message", textarea);

    // const response = await axios.post("", params);
    navigate("/message");
  };

  return (
    <>
      {" "}
      <Row className="m-1 align-items-start justify-content-center min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Form onSubmit={sendMessage}>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>보내고 싶은 쪽지 내용을 입력하세요: </Form.Label>
              <Form.Control as="textarea" rows={10} placeholder="협업하고 싶은 작곡가에게 본인을 소개하세요" value={textarea} onChange={handleChange} />
            </Form.Group>
            <Col lg={12} md={12} className="mb-0 d-grid gap-2">
              {/* Button */}
              <Button variant="primary" type="submit">
                쪽지 보내기
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default MessageSend;
