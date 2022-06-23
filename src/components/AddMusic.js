import { Fragment, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Header from "./Header";

const AddMusic = () => {
  const [musicData, setMusicData] = useState({
    title: "Title",
    info: "Info",
    genre: "Genre",
  });

  const handleChange = (event) => {
    setMusicData({
      ...musicData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Fragment>
      <Header></Header>
      <Row className="m-1 align-items-start justify-content-start min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          Music
          <Form>
            <Form.Label>곡 제목</Form.Label>
            <Form.Control type="text" id="title" placeholder="곡 제목을 입력하세요" onChange={handleChange} required />
            <Form.Label>곡 소개</Form.Label>
            <Form.Control type="text" id="title" placeholder="곡 소개를 입력하세요" onChange={handleChange} required />
            <Form.Label>곡 장르</Form.Label>
            <Form.Select onChange={handleChange}>
              <option>K-Pop</option>
              <option>Rock</option>
            </Form.Select>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddMusic;
