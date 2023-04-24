import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import youtub_icon from "../assets/img/png/youtub_icon.png";
import podcast_img from "../assets/img/png/podcast.png";
function SolanaDeveloper() {
  return (
    <section className="bg-black pt-md-5 pt-3 pb-5">
      <Container className=" container_custom pt-5">
        <Row>
          <Col md={6}>
            <div className="solana_bg_card p-4 p-lg-5 h-100">
              <h2 className="mb-0 ff_helivitica_normal fw-normal fs_xslg text-white">
                Solana Developer Update
              </h2>
              <p className="mb-0 ff_helivitica_normal fw-normal fs_xmd pt-4 mt-1 clr_lightwhite pb-3">
                Sign up to the newsletter and learn about new resources, new
                commits, new proposals, and more.
              </p>
              <div className="input_box  rounded-5 px-2 d-flex align-items-center justify-content-between mt-lg-5 mt-4">
                {" "}
                <input
                  className="inputModify text-white ff_roboto fw-semibold fs_sm  px-2"
                  type="text"
                  placeholder="Email"
                />
                <button className="button_sign_up text-uppercase  ff_roboto fw-normal fs_sm ">
                  Sign up
                </button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="solana_bg_card p-4 p-lg-5 h-100 mt-md-0 mt-4">
              <h2 className="mb-0 ff_helivitica_normal fw-normal fs_xxlg text-white">
                Even more resources{" "}
              </h2>
              <p className="mb-0 ff_helivitica_normal fw-normal fs_xxmd pt-lg-4 pt-3 mt-1 clr_lightwhite pb-lg-3">
                More videos, more episodes. Discussions between industry leaders
                in both blockchain and technology, our team, and community
                developers.
              </p>
              <div className="pt-4 text-center ">
                <button className="ff_roboto fw-normal text-uppercase  fs_sm text-white youtub_button">
                  YouTube{" "}
                  <span className="ps-sm-2 ps-1">
                    <img src={youtub_icon} alt="youtub_icon " />
                  </span>
                </button>
                <button className="ff_roboto fw-normal text-uppercase  fs_sm text-white youtub_button ms-4">
                  Podcast{" "}
                  <span className="ps-sm-2 ps-1">
                    <img src={podcast_img} alt="podcast_img " />
                  </span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SolanaDeveloper;
