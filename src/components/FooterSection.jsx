import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer_logo from "../assets/img/png/footer_logo.png";
import youtub from "../assets/img/png/youtub.png";
import twiter from "../assets/img/png/twiter.png";
import discord from "../assets/img/png/discord.png";
import discord2 from "../assets/img/png/discord2.png";
import netlify from "../assets/img/png/netlify.png";
import telegram from "../assets/img/png/telegram.png";
import en_icon from "../assets/img/svg/en.svg";
import back_to_top from "../assets/img/png/back-to-top.jpg";
import { useState } from "react";
function FooterSection() {
  const [first, setfirst] = useState(false);
  const moveTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      setfirst(true);
    } else {
      setfirst(false);
    }
  });
  return (
    <section className="bg-black pb-5 pt-lg-5 pt-4">
      <button
        onClick={moveTop}
        className={
          first === true
            ? "position-fixed end-0 bottom-0 border-0  border_radius up_dawn m-4  z_4"
            : "position-fixed end-0 bottom-0  border-0 border_radius up_dawn d-none z_4"
        }
      >
        <img
          className="border_radius"
          width="40"
          src={back_to_top}
          alt="back_to_top"
        />{" "}
      </button>
      <Container className=" container_custom rounded-5">
        <Row>
          <Col lg={6}>
            <a href="#">
              <img src={footer_logo} alt="footer_logo" />
            </a>
            <p className="mb-0 ff_roboto fw-normal fs_md text-white pt-3 mt-1">
              Managed by Solana Foundation
            </p>
            <div className="d-flex pt-4">
              <a href="#">
                <div className="footer_box d-flex align-items-center justify-content-center">
                  {" "}
                  <img src={youtub} alt="youtub" />
                </div>
              </a>
              <a className="ms-2 " href="#">
                <div className="footer_box d-flex align-items-center justify-content-center">
                  {" "}
                  <img src={twiter} alt="twiter" />
                </div>
              </a>
              <a className="ms-2 " href="#">
                <div className="footer_box d-flex align-items-center justify-content-center">
                  {" "}
                  <img src={discord} alt="discord" />
                </div>
              </a>
              <a className="ms-2 " href="#">
                <div className="footer_box d-flex align-items-center justify-content-center">
                  {" "}
                  <img src={discord2} alt="discord2" />
                </div>
              </a>
              <a className="ms-2 " href="#">
                <div className="footer_box d-flex align-items-center justify-content-center">
                  {" "}
                  <img src={netlify} alt="netlify" />
                </div>
              </a>
              <a className="ms-2 " href="#">
                <div className="footer_box d-flex align-items-center justify-content-center">
                  {" "}
                  <img src={telegram} alt="telegram" />
                </div>
              </a>
            </div>
            <p className="mb-0 ff_helivitica_normal fw-normal fs_md  clr_brown pt-lg-4 pt-3 mt-1">
              © 2023Solana Foundation. All rights reserved.
            </p>
          </Col>
          <Col lg={6} className="pt-4 pt-lg-0">
            <Row>
              <Col sm={4} xs={6}>
                {" "}
                <h2 className="mb-0 ff_helivitica_normal fw-normal fs_md text-white">
                  SOLANA
                </h2>
                <ul>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_sm clr_brown footer_link"
                      href="#"
                    >
                      Grants
                    </a>
                  </li>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_sm clr_brown footer_link"
                      href="#"
                    >
                      Break Solana
                    </a>
                  </li>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_md clr_brown footer_link"
                      href="#"
                    >
                      Media Kit
                    </a>
                  </li>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_md clr_brown footer_link"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_md clr_brown footer_link"
                      href="#"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6}>
                {" "}
                <h2 className="mb-0 ff_helivitica_normal fw-normal fs_md text-white">
                  Get Connected
                </h2>
                <ul>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_sm clr_brown footer_link"
                      href="#"
                    >
                      Ecosystem
                    </a>
                  </li>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_sm clr_brown footer_link"
                      href="#"
                    >
                      Blog{" "}
                    </a>
                  </li>
                  <li className="pt-2 mt-1">
                    <a
                      className="ff_helivitica_normal fw-normal fs_md clr_brown footer_link"
                      href="#"
                    >
                      Newsletter{" "}
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} className="pt-3 pt-sm-0">
                <a className="hover_white_img" href="#">
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8901 6.25C12.3347 2.76172 11.0246 0.3125 9.5 0.3125C7.9754 0.3125 6.66532 2.76172 6.10988 6.25H12.8901ZM5.82258 10C5.82258 10.8672 5.86855 11.6992 5.94899 12.5H13.0472C13.1276 11.6992 13.1736 10.8672 13.1736 10C13.1736 9.13281 13.1276 8.30078 13.0472 7.5H5.94899C5.86855 8.30078 5.82258 9.13281 5.82258 10ZM18.2607 6.25C17.1651 3.59766 14.9472 1.54688 12.2083 0.71875C13.1429 2.03906 13.7865 4.02734 14.1236 6.25H18.2607ZM6.7879 0.71875C4.05282 1.54688 1.83105 3.59766 0.739315 6.25H4.87641C5.20968 4.02734 5.85323 2.03906 6.7879 0.71875ZM18.6706 7.5H14.2768C14.3573 8.32031 14.4032 9.16016 14.4032 10C14.4032 10.8398 14.3573 11.6797 14.2768 12.5H18.6667C18.8774 11.6992 18.9962 10.8672 18.9962 10C18.9962 9.13281 18.8774 8.30078 18.6706 7.5ZM4.59677 10C4.59677 9.16016 4.64274 8.32031 4.72319 7.5H0.329436C0.122581 8.30078 0 9.13281 0 10C0 10.8672 0.122581 11.6992 0.329436 12.5H4.71935C4.64274 11.6797 4.59677 10.8398 4.59677 10ZM6.10988 13.75C6.66532 17.2383 7.9754 19.6875 9.5 19.6875C11.0246 19.6875 12.3347 17.2383 12.8901 13.75H6.10988ZM12.2121 19.2813C14.9472 18.4531 17.169 16.4023 18.2645 13.75H14.1274C13.7903 15.9727 13.1468 17.9609 12.2121 19.2813ZM0.739315 13.75C1.83488 16.4023 4.05282 18.4531 6.79173 19.2813C5.85706 17.9609 5.21351 15.9727 4.87641 13.75H0.739315Z"
                      fill="#848895"
                    />
                  </svg>

                  <span className="ff_helivitica_normal fw-normal fs_sm clr_brown ps-1  footer_link">
                    EN
                  </span>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FooterSection;
