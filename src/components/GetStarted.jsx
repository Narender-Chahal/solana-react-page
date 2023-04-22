import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrow_img from "../assets/img/png/arrow_img.png";
import Card from "./Card";
import Slider from "react-slick";

function GetStarted() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
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
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="bg-black pt-5 pt-lg-0">
      <Container className=" container_custom">
        <h2 className="fw-normal mb-0 fs_xmlg text-white ff_helivitica_normal">
          Get started.
        </h2>
        <p className="mb-0 ff_helivitica_normal fw-normal fs_xlmd clr_lightwhite pt-1 pb-2">
          Use these Solana Foundation and community courses to begin your
          journey into Solana development.
        </p>
        <div className="bg_salonadevelopment ps-lg-5 py-lg-5 mt-4">
          <div className="ps-sm-4 ps-3 py-4">
            <button className="fs_xsm btn_17chapter ff_helivitica_normal fw-normal text-white fs_Xxmlg ">
              17 Chapters
            </button>
            <h2 className="mb-0 ff_helivitica_normal fw-normal text-white fs_Xxmlg pt-3">
              Solana Development Course
            </h2>
            <p className="mb-0 ff_helivitica_normal fs_xxmd fw-normal text-white pt-4 pb-4">
              Quickstart your Solana development starting{" "}
              <span className="d-lg-block">
                from nothing to complex programs.
              </span>
            </p>
            <a href="#">
              <img
                className="circle rounded-5"
                src={arrow_img}
                alt="arrow_img"
              />
            </a>
          </div>
        </div>
        <Slider {...settings} className="row">
          {Card.map((obj) => {
            return (
              <Col lg={4} className="px-2 ">
                <div className="position-relative hover_card_img ">
                  <img className="w-100 rounded-2 pt-4 " src={obj.img} alt="" />
                  <div className="position-absolute bottom-0 ps-4 ms-2 ">
                    <button className="ff_helivitica_normal fw-normal text-white fs_xsm btn_14chapter mb-2">
                      {obj.btn}
                    </button>
                    <div className="pb-md-4 d-flex justify-content-between ">
                      <p className="ff_helivitica_normal fw-normal fs_xxmd text-white">
                        {obj.pera} <span className="d-block">{obj.span}</span>
                      </p>
                    </div>
                  </div>
                  <a
                    className="position-absolute end-0 bottom-0 mb-md-4 mb-3 pe-4 "
                    href="#"
                  >
                    <img
                      className="circle rounded-5 mb-md-3"
                      src={obj.arrow}
                      alt=""
                    />
                  </a>
                </div>
              </Col>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
}

export default GetStarted;
