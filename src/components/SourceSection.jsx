import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import up_arrow from "../assets/img/png/up_arrow.png";
import change_log from "../assets/img/png/changelog.png";
function SourceSection() {
  return (
    <section className="source_bg pt-lg-5">
      <Container className=" container_custom">
        <h2 className="fs_xslg mb-0 text-white pt-3  ff_helivitica_normal fw-normal">
          Go to the source.
        </h2>
        <p className="mb-0 fw-normal fs_xlmd pt-1 clr_lightwhite ff_helivitica_normal">
          Read the documentation for Solana and popular tools.
        </p>
        <Row>
          <Col md={6} className="pt-5">
            <div className="d-flex justify-content-between align-items-center pt-2">
              <h4 className="mb-0 ff_helivitica_normal fw-normal fs_xlg text-white">
                Solana Docs
              </h4>
              <button className="btn_view text-white ff_roboto fw-normal fs_sm">
                View all{" "}
                <span className="ps-3">
                  <img src={up_arrow} alt="up_arrow " />
                </span>
              </button>
            </div>
            <div className="line mt-4 "></div>
            <p className="mb-0 pt-4 mt-1 ff_helivitica_normal fw-normal fs_xlmd text-white">
              Learn how Solana works and get a high-level understanding of
              Solana's architecture.
            </p>
          </Col>
          <Col md={6} className="pt-5">
            <div className="d-flex justify-content-between align-items-center pt-2">
              <h4 className="mb-0 ff_helivitica_normal fw-normal fs_xlg text-white">
                Metaplex Docs{" "}
              </h4>
              <button className="btn_view text-white ff_roboto fw-normal fs_sm">
                View all{" "}
                <span className="ps-3">
                  <img src={up_arrow} alt="up_arrow " />
                </span>
              </button>
            </div>
            <div className="line mt-4 "></div>
            <p className="mb-0 pt-4 mt-1 ff_helivitica_normal fw-normal fs_xlmd text-white">
              Learn what you build with Metaplex, make the process of creating
              and launching NFTs easier.
            </p>
          </Col>
        </Row>
        <Row className="pt-lg-5 pt-3 mt-5 flex-md-row flex-column flex-column-reverse d-flex">
          <Col md={6} className="pt-3 pt-md-0">
            <h4 className="mb-0 ff_helivitica_normal fw-normal fs_xxmlg text-white pt-lg-0 pt-3">
              Solana Changelog{" "}
            </h4>{" "}
            <p className="mb-0 pt-lg-4 mt-lg-1 pt-3 ff_helivitica_normal fw-normal fs_xlmd text-white">
              Some more Solana changes from Jacob & Joe. Subscribe to the
              newsletter: https://solana.us17.list-manage.com/s... Proposal -
              Priced Compute Units: ...
            </p>
            <button className="text-white ff_roboto fw-normal fs_sm latest_btn mt-lg-5 mt-3">
              Latest episode
            </button>
          </Col>
          <Col md={6}>
            <img className="w-100" src={change_log} alt="change_log" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SourceSection;
