import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img2 from "../assets/img/png/grid_img2.png";
import img3 from "../assets/img/png/grid_img3.png";
import img4 from "../assets/img/png/grid_img4.png";
import img5 from "../assets/img/png/grid_img5.png";
import img6 from "../assets/img/png/grid_img6.png";
import Marquee from "react-fast-marquee";
function GridSection() {
  return (
    <section className="pt-lg-3 pt-5   bg-black  ">
      <Container className="container_custom ">
        <h2 className="mb-0 ff_helivitica_normal fw-normal fs_xmlg text-white pb-lg-4 text-center text-lg-start pt-3 pt-lg-0">
          Join a thriving community.
        </h2>
      </Container>
      <Marquee speed={100}>
        <div className=" d-grid gap-3 pt-4">
          <div className="grid_Card d-flex align-items-center flex-column justify-content-center img_1grid ms-2">
            <h3 className=" ff_helivitica_normal fw-normal fs_xxslg color_pink2">
              11,000
            </h3>
            <p className="mb-0 ff_helivitica_normal fw-normal fs_xxsm pt-2 clr_brown2">
              Solana Hacker House participants
            </p>
          </div>
          <div className=" img_2grid ms-2">
            <img className="w-100 h-100" src={img2} alt="img2" />
          </div>
          <div className=" img_3grid">
            <img className="w-100 h-100" src={img3} alt="img3" />
          </div>
          <div className=" img_4grid">
            <img className="w-100 h-100" src={img4} alt="img4" />
          </div>
          <div className="grid_Card d-flex align-items-center flex-column justify-content-center img_5grid ">
            <h3 className=" ff_helivitica_normal fw-normal fs_xxl clr_green">
              48,000{" "}
            </h3>
            <p className="mb-0 ff_helivitica_normal fw-normal fs_xxsm pt-2 clr_brown2 ">
              Developers building during{" "}
              <span className="d-block text-center">Solana Hackathons</span>
            </p>
          </div>
          <div className=" img_6grid">
            <img className="w-100 h-100" src={img5} alt="img5" />
          </div>
          <div className="grid_Card d-flex align-items-center flex-column justify-content-center img_7grid me-2 ">
            <h3 className=" ff_helivitica_normal fw-normal fs_xxslg clr_yellow">
              3,800{" "}
            </h3>
            <p className="mb-0 ff_helivitica_normal fw-normal fs_xxsm pt-2 clr_brown2">
              Solana Breakpoint 2022 attendees{" "}
            </p>
          </div>
          <div className=" img_8grid me-2">
            <img className="w-100 h-100" src={img6} alt="img6" />
          </div>
        </div>
      </Marquee>
      <Container className="d-flex align-items-center justify-content-center bg_grid vh_50 container_custom">
        <div className="text-center pt-lg-5">
          <h3 className="mb-0   ff_helivitica_normal fw-normal fs_xmlg text-white">
            It's time to join the thousands of creators,{" "}
            <span className="d-lg-block">
              artists, and developers using Solana.
            </span>
          </h3>
          <button className=" ff_roboto text-uppercase  fw-normal fs_sm button_start_building text-white mt-3">
            Start building
          </button>
        </div>
      </Container>
    </section>
  );
}

export default GridSection;
