import React, { useState, Fragment } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, Card, Image } from "react-bootstrap";
import axios from "axios";

import styles from "../assets/css/Login.module.css";

import Symbol from "../assets/images/simbol.png";
const LoginGoogle = () => {
  const baseURL = "http://49.50.163.18:8080";
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  const onSuccess = async (response) => {
    const params = new URLSearchParams();
    setLoginStatus(true);

    const res = await axios.post(
      `${baseURL}/login`,
      {
        token: response.tokenObj.id_token,
        name: response.profileObj.name,
        imageUrl: response.profileObj.imageUrl,
        email: response.profileObj.email,
        expire: response.tokenObj.expires_at,
      },
      {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        withCredentials: true,
      }
    );

    if (res.data !== "fail") {
      window.sessionStorage.setItem("memberId", res.data.memberId);
      window.sessionStorage.setItem("dtype", res.data.dtype);
      navigate("/", (params = { login: true }));
      console.log("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };

  const onFailure = (res) => {
    console.log("login failed", res);
  };

  const onLogout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      setLoginStatus(false);
      console.log("로그아웃 성공!!!");
      navigate("/login");
    });
  };

  return (
    <Fragment className={styles.background}>
      <Row className="m-5 align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <div className="mb-4 d-flex flex-column align-items-center">
            <Link to="/swap/" className="m-0">
              <Image src={Symbol} width="80px" className="mb-4 me-1" alt="" />
            </Link>
            <h1 className="mb-1 fw-bold">Login</h1>
          </div>
          {/* Form */}
          <Row className="d-flex justify-content-center">
            <Col lg={9} md={9} className="mb-0 d-grid gap-2">
              <GoogleLogin
                clientId="27513676605-6rs6ciq9c5ruo94u4kgg03eomipp9usc.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
              />
            </Col>
          </Row>
          <div className={styles.Copyright}>Copyright 2022.모아이. All rights reserved</div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LoginGoogle;
