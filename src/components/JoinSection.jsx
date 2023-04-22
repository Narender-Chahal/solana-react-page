import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Settings } from "react-slick";
function JoinSection() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="joinsection_bg_img py-lg-5 pt-4 mt-1 mt-md-0 pt-md-0">
      <Container className="container_custom">
        <Row className="pb-lg-5    ">
          <Col lg={6} md={12} className="text-center text-lg-start">
            <h2 className="mb-0 ff_helivitica_normal fw-normal fs_xmlg text-white pt-lg-5 pt-2">
              Join a community <span className="d-lg-block">of millions</span>
            </h2>
          </Col>
          <Col lg={6} md={12}>
            <div className="d-flex flex-lg-column justify-content-between text-center text-sm-start flex-sm-row flex-column pt-3 pt-lg-0 ">
              <div>
                {" "}
                <h2 className="mb-0 ff_helivitica_normal fw-normal fs_6xl clr_linear_11">
                  11.5M+
                </h2>
                <p className="mb-0 ff_roboto fw-normal fs_md  clr_lightwhite">
                  Active accounts
                </p>
              </div>
              <div className="pt-lg-5">
                {" "}
                <h2 className="mb-0 ff_helivitica_normal fw-normal fs_7xl clr_linear_21 pt-3 pt-sm-0">
                  21.9M{" "}
                </h2>
                <p className="mb-0 ff_roboto fw-normal fs_md  clr_lightwhite">
                  NFTs minted{" "}
                </p>
              </div>
            </div>
            <div className="pt-lg-5 pt-3 text-center text-sm-start">
              {" "}
              <h2 className="mb-0 ff_helivitica_normal fw-normal fs_8xl clr_linear_025">
                $0.00025{" "}
              </h2>
              <p className="mb-0 ff_roboto fw-normal fs_md  clr_lightwhite">
                Average cost per transaction{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-lg-5 pt-md-5 mt-5">
          <Col lg={4} className="text-center text-lg-start">
            <h2 className="mb-0 ff_helivitica_normal fw-normal  fs_xl text-white ">
              Made for <span className="d-lg-block">mass adoption .</span>
            </h2>
            <div className="d-flex align-items-center pt-2 justify-content-center pb-4 pb-lg-0">
              <div className="dots_skyblue"></div>
              <p className="ff_roboto mb-0 fs_md fw-normal  clr_lightwhite ps-1 ">
                Live data
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <Slider {...settings} className="row">
              <Col lg={6} className="">
                <div className="fast_box  ms-lg-0 ms-md-3 me-md-3 me-lg-0 mt-lg-5">
                  <div>
                    <div className="line_skyblue">
                      <h3 className="mb-0 ff_helivitica_normal fw-normal fs_lg text-white ps-3">
                        Fast
                      </h3>
                    </div>
                  </div>
                  <p className="mb-0 ff_helivitica_normal fw-normal fs_xmd pt-2 clr_lightwhite">
                    Don’t keep your users waiting. Solana has block times of 400
                    milliseconds — and as hardware gets faster, so will the
                    network.
                  </p>
                  <div className="d-flex pt-4">
                    <div className="dots_skyblue mt-1"></div>
                    <h3 className="mb-0 ff_helivitica_normal fw-normal fs_lg text-white ps-1">
                      3,969
                    </h3>
                  </div>
                  <p className="mb-0 ff_roboto fw-normal fs_md clr_lightwhite pt-2 mt-1">
                    Transactions per second
                  </p>
                </div>{" "}
              </Col>

              <Col lg={6} className="">
                <div className="fast_box2 ms-lg-0 ms-md-3 me-md-3 me-lg-0 mt-lg-4">
                  <div>
                    <div className="line_scalable">
                      <h3 className="mb-0 ff_helivitica_normal fw-normal fs_lg text-white ps-3">
                        Scalable
                      </h3>
                    </div>
                  </div>
                  <p className="mb-0 ff_helivitica_normal fw-normal fs_xxmd pt-2 clr_lightwhite">
                    Get big, quick. Solana is made to handle thousands of
                    transactions per second, and fees for both developers and
                    users remain less than $0.01.
                  </p>
                  <div className="d-flex pt-4">
                    <div className="dots_skyblue mt-1"></div>
                    <h3 className="mb-0 ff_helivitica_normal fw-normal fs_4xlmd text-white ps-1">
                      163,077,581,394
                    </h3>
                  </div>
                  <p className="mb-0 ff_roboto fw-normal fs_md clr_lightwhite pt-2 mt-1">
                    Total transactions{" "}
                  </p>
                </div>
              </Col>
              <Col lg={6} className="">
                <div className="fast_box2 ms-lg-0 ms-md-3 me-md-3 me-lg-0 ">
                  <div>
                    <div className="line_yellow">
                      <h3 className="mb-0 ff_helivitica_normal fw-normal fs_lg text-white ps-3">
                        Decentralized
                      </h3>
                    </div>
                  </div>
                  <p className="mb-0 ff_helivitica_normal fw-normal fs_xxmd pt-2 clr_lightwhite">
                    The Solana network is validated by thousands of nodes that
                    operate independently of each other, ensuring your data
                    remains secure and censorship resistant.
                  </p>
                  <div className="d-flex pt-4">
                    <div className="dots_skyblue mt-1"></div>
                    <h3 className="mb-0 ff_helivitica_normal fw-normal fs_4xlmd text-white ps-1">
                      1,675{" "}
                    </h3>
                  </div>
                  <p className="mb-0 ff_roboto fw-normal fs_md clr_lightwhite pt-2 mt-1">
                    Validator nodes{" "}
                  </p>
                </div>
              </Col>
              <Col lg={6} className="">
                <div className="fast_box2 ms-lg-0 ms-md-3 me-md-3 me-lg-0 mt-lg-2 ">
                  <div className="d-flex">
                    <div className="line_heavygreen"> </div>
                    <h3 className="mb-0 ff_helivitica_normal fw-normal fs_lg text-white ps-3">
                      Energy Efficient
                    </h3>
                  </div>
                  <p className="mb-0 ff_helivitica_normal fw-normal fs_xxmd pt-2 clr_lightwhite">
                    Solana’s proof of stake network and other innovations
                    minimize its impact on the{" "}
                    <span className=" clr_green text-decoration-underline">
                      environment.
                    </span>{" "}
                    Each Solana transaction uses about the same energy as a few
                    Google searches.
                  </p>
                  <div className="d-flex pt-4">
                    <h3 className="mb-0 ff_helivitica_normal fw-normal fs_4xlmd text-white ps-1">
                      0%{" "}
                    </h3>
                  </div>
                  <p className="mb-0 ff_roboto fw-normal fs_md clr_lightwhite pt-2 mt-1">
                    Net carbon impact{" "}
                  </p>
                </div>
              </Col>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default JoinSection;
