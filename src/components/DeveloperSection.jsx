import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import btn_vector from "../assets/img/png/btn_vector.png";
import header_img from "../assets/img/png/header_img.png";
function DeveloperSection() {
  return (
    <section className="bg-black d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <Container className="container_custom">
        <Row className="align-items-center flex-column d-flex flex-lg-row flex-column-reverse">
          <Col lg={6} className="text-center text-lg-start">
            <h2 className="mb-0 fw-normal fs_5xl ff_helivitica_normal text-white">
              Developer Resources
            </h2>
            <p className="mb-0 ff_helivitica_normal fw-normal fs_xxlmd clr_lightwhite pt-3 mt-1 pb-4 mb-3">
              A manual for joining the Solana ecosystem.{" "}
              <span className="d-block">By builders for builders.</span>
            </p>
            <button className="ff_roboto fw-normal fs_sm text-black build_btn">
              Build Now
            </button>
            <button className="ff_roboto fw-normal fs_sm text-black stack_btn text-white ms-2">
              Stack Exchange{" "}
              <span className="ps-2">
                <img src={btn_vector} alt="btn_vector" />
              </span>
            </button>
          </Col>
          <Col lg={6} md={6} sm={7}xs={7}>
            <img className="w-100" src={header_img} alt="header_img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DeveloperSection;
