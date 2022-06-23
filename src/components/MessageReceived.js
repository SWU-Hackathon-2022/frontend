import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";

import styles from "../assets/css/MessageCard.module.css";
import classNames from "classnames/bind";

import Header from "./Header";

const cx = classNames.bind(styles);

const MessageReceived = () => {
  const id = useParams();

  // const [messageInfo, setMessageInfo] = useState();

  // useEffect(() => {
  //   readMessage(id);
  // }, []);

  // const readMessage = async (id) => {
  //   const response = await axios.get("" + id);
  //   setMessageInfo(response.data);
  // };

  const messageInfo = {
    id: 0,
    image: "https://2e4efd3ddd5ec0b50028-7d521b783d142fa14612a0034dea730a.ssl.cf2.rackcdn.com/gallery/2008/08/3190854_1316217600_gallery_image_3072799.jpg",
    name: "김나비",
    message: "안녕하세요 같이 협업 할 수 있을까요 제 이름은 김나부랭이이고 이 음악을 너무 감명 깊게 들어서 눈물을 흘렸습니다. 부디 이 음악을 사용할 수 있게 해 주십쇼.",
    time: "AM 10:00",
  };

  return (
    <div className={cx("background-grey")}>
      <Header />
      <Row className="m-1 align-items-start justify-content-center min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <div className={cx("message-bubble")}>
            <Card className={cx("message")}>
              <div className={cx("message__name")}>{messageInfo.name}</div>
              <div className={cx("message-bubble__text")}>{messageInfo.message}</div>
            </Card>
            <div className={cx("message__time")}>{messageInfo.time}</div>
          </div>
        </Col>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div className={cx("text-muted")}>연락을 주고받기 위해서 수락 해 주세요.</div>
          <div className={cx("message__button--bottom")}>
            <Button className={cx("bottom-button", "grey")}>거절</Button>
            <Button className={cx("bottom-button", "blue")}>수락</Button>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default MessageReceived;
