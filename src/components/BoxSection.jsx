import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "./box";
import Card from "./Card";
import Slider from "react-slick";
function BoxSection() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1400,
    speed: 200,
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
    <section className="bg-black py-lg-5  ">
      <Container className=" container_custom pb-5">
        <h2 className="mb-0 ff_helivitica_normal fw-normal fs_xxslg text-white pt-5">
          Dig deeper.
        </h2>
        <p className="mb-0 ff_helivitica_normal fw-normal fs_xlmd clr_lightwhite pt-1">
          Learn from resources across the greater Solana ecosystem.
        </p>
        <Slider className="row" {...settings}>
          {box.map((obj) => {
            return (
              <Col lg={4} className="pt-4 mt-2 px-2 ">
                <div className="box_card h-100 z_4 position-relative overflow-hidden">
                  <h4 className="mb-0 ff_helivitica_normal fw-normal fs_xxsm common_card_color">
                    {obj.heading4}
                  </h4>
                  <h3 className="mb-0 ff_helivitica_normal fw-normal fs_xsmd text-white pt-2">
                    {obj.heading2}
                  </h3>
                  <p className="mb-0 ff_helivitica_normal fw-normal fs_md text-white pt-3 pb-5">
                    {obj.peragraph}
                  </p>
                  <a className="d-flex align-items-center " href="#">
                    <span className="text-white pe-3 link_hover">
                      {obj.link}
                    </span>
                    <img src={obj.Image} alt="img" />
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

export default BoxSection;
