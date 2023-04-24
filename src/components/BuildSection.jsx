import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import build_img from "../assets/img/png/build_img.png";
import anybodies_img from "../assets/img/png/anybodies_img.png";
import clay_img1 from "../assets/img/png/clay_img1.png";
import clay_img2 from "../assets/img/png/clay_img2.png";
import clay_img3 from "../assets/img/png/clay_img3.png";
import clay_img4 from "../assets/img/png/clay_img4.png";
function BuildSection() {
  const [first, setfirst] = useState(1);
  return (
    <section className="bg-black py-lg-5 pt-sm-5">
      <Container className=" container_custom">
        <Row className="pb-lg-2 text-center text-lg-start">
          <Col lg={6}>
            <h2 className="mb-0 ff_helivitica_normal fw-normal fs_xxmlg text-white">
              Build for growth.
            </h2>
          </Col>
          <Col
            lg={6}
            className="text-lg-end pt-3 pt-lg-0 overflow_x_scroll_xsm d-flex"
          >
            <button
              onClick={() => setfirst(1)}
              className={
                first === 1
                  ? " text-white common_button_border ff_helivitica_normal fw-normal fs_sm"
                  : "  common_button text-white ff_helivitica_normal fw-normal fs_sm"
              }
            >
              NFTs
            </button>
            <button
              onClick={() => setfirst(2)}
              className={
                first === 2
                  ? " text-white common_button_border ms-3 ff_helivitica_normal fw-normal fs_sm"
                  : "  common_button text-white ms-3 ff_helivitica_normal fw-normal fs_sm"
              }
            >
              DeFi
            </button>
            <button
              onClick={() => setfirst(3)}
              className={
                first === 3
                  ? " text-white common_button_border ms-3 ff_helivitica_normal fw-normal fs_sm"
                  : "  common_button text-white ms-3 ff_helivitica_normal fw-normal fs_sm"
              }
            >
              Payments
            </button>
            <button
              onClick={() => setfirst(4)}
              className={
                first === 4
                  ? " text-white common_button_border ms-3 ff_helivitica_normal fw-normal fs_sm"
                  : "  common_button text-white ms-3 ff_helivitica_normal fw-normal fs_sm"
              }
            >
              Gaming
            </button>
            <button
              onClick={() => setfirst(5)}
              className={
                first === 5
                  ? " text-white common_button_border ms-3 ff_helivitica_normal fw-normal fs_sm"
                  : "  common_button text-white ms-3 ff_helivitica_normal fw-normal fs_sm"
              }
            >
              DAOs
            </button>
          </Col>
        </Row>
        <Row className="bg_build justify-content-center align-items-center mt-4">
          <Col lg={6} md={8} sm={10} xs={10} className="px-0 ">
            <img className="w-100" src={build_img} alt="build_img" />
          </Col>
          <Col
            lg={6}
            md={8}
            sm={10}
            xs={10}
            className="ps-lg-5 pe-lg-5 text-center text-lg-start bg_build1 py-3 py-lg-0"
          >
            <img src={anybodies_img} alt="anybodies_img" />
            <p className="mb-0 ff_helivitica_normal fw-normal fs_xxlmd text-white pt-3 pe-3">
              It’s time to bridge the digital and physical. Anybodies helps
              established brands like Toys’R’Us connect real-life places and
              products with NFTs.
            </p>
            <div className="pt-3">
              <a
                className="ff_helivitica_normal fw-normal clr_pink fs_xlmd learnmore"
                href="#"
              >
                Learn more about <span>NFTs</span> on Solana
              </a>
            </div>
          </Col>
        </Row>
        <Row className="clay_bg py-sm-2 pt-3 pb-3  mt-3 pt-1 align-items-center">
          <Col sm={3} xs={6} className="text-center">
            <img src={clay_img1} alt="clay_img1" />
          </Col>
          <Col sm={3} xs={6} className="text-center">
            <img src={clay_img2} alt="clay_img2" />
          </Col>
          <Col sm={3} xs={6} className="text-center pt-3 pt-sm-0">
            <img src={clay_img3} alt="clay_img3" />
          </Col>
          <Col sm={3} xs={6} className="text-center pt-3 pt-sm-0">
            <img src={clay_img4} alt="clay_img4" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BuildSection;
