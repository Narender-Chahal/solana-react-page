import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import head_img1 from "../assets/img/png/head_img1.png";
import head_img2 from "../assets/img/png/head_img2.png";
import head_img3 from "../assets/img/png/head_img3.png";
import head_img4 from "../assets/img/png/head_img4.png";
import head_img5 from "../assets/img/png/head_img5.png";
import head_img6 from "../assets/img/png/head_img6.png";
import head_img7 from "../assets/img/png/head_img7.png";
import Marquee from "react-fast-marquee";

function HeadSection() {
  return (
    <section className="pt-xl-5 pt-0 mt-xl-5 pb-md-5 d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <Container>
        <div className="d-flex flex-column justify-content-center pt-md-5 pt-3">
          <h1 className="mb-0 ff_helivitica_normal fw-normal fs_4xl text-white text-center">
            Powerful for developers.
          </h1>
          <h2 className="mb-0 ff_helivitica_normal fw-normal fs_3xl text-white text-center">
            Fast for everyone.
          </h2>
        </div>
        <div className="d-flex justify-content-center">
          <p className="mb-0 pt-xl-5 pt-3 ff_helivitica_normal fw-normal fs_xxlmd text-white   max_w_590 text-center text-lg-start">
            Bring blockchain to the people. Solana supports experiences for
            power users, new consumers, and everyone in between.
          </p>
        </div>
        <div className="text-center d-flex flex-column align-items-center justify-content-center  flex-sm-row pt-md-5 pt-3">
          <button className="ff_roboto fw-normal text-uppercase  fs_sm building_btn text-white">
            Start building
          </button>
          <button className="ff_roboto fw-normal text-uppercase mt-3 mt-sm-0 fs_sm read_btn text-white ms-sm-3">
            Read docs
          </button>
        </div>
        <p className="mb-0 ff_helivitica_normal fw-normal fs_xxlmd clr_skyblue text-center pt-xl-5 mt-md-5 mt-3">
          Powering tools and integrations from companies all around the world
        </p>
        <div className="d-flex   justify-content-center mt-md-4 pt-2 ">
          <Marquee className="">
            <img
              width="113px"
              className="ms-4 ps-lg-3 "
              src={head_img1}
              alt="head_img1"
            />

            <img
              width="141px"
              className="ms-4 ps-lg-3 "
              src={head_img2}
              alt="head_img2"
            />
            <img
              width="124px"
              className="ms-4 ps-lg-3"
              src={head_img3}
              alt="head_img3"
            />
            <img
              width="96px"
              className="ms-4 ps-lg-3"
              src={head_img4}
              alt="head_img4"
            />
            <img
              width="99px"
              className="ms-4 ps-lg-3"
              src={head_img5}
              alt="head_img5"
            />
            <img
              width="105px"
              className="ms-4 ps-lg-3"
              src={head_img6}
              alt="head_img6"
            />
            <img
              width="157px"
              className="ms-4 ps-lg-3"
              src={head_img7}
              alt="head_img7"
            />
          </Marquee>
        </div>
      </Container>
    </section>
  );
}

export default HeadSection;
