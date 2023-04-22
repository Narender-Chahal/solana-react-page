import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import logo_img from "../assets/img/png/logo.png";
import up_arrow from "../assets/img/png/up-arrow-vector.png";
import close_icon from "../assets/img/png/close_icon.png";
import { Link } from "react-router-dom";
function MyNav() {
  const [first, setfirst] = useState(false);
  if (first) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <section>
      <div className="bg_clr">
        <p className="mb-0 ff_roboto fw-normal fs_xmd text-center py-1">
          Breakpoint 2023 - New City. New Vibes - Get Early Access -&gt;
        </p>
      </div>
      <nav className="nav_bg_clr py-3">
        <Container className="container_custom">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/">
              <a href="#">
                <img src={logo_img} alt="logo_img" />
              </a>
            </Link>
            <ul
              className={
                first
                  ? "d-flex align-items-center  show_nav "
                  : "hide_nav d-flex align-items-center "
              }
            >
              <a onClick={() => setfirst(false)} href="#">
                <img
                  width="32px"
                  className="position-absolute end-0 top-0 m-5 bg-white rounded-5 d-md-none"
                  src={close_icon}
                  alt="close_icon"
                />
              </a>
              <li>
                <a
                  className="dropdown position-relative ff_helivitica_normal fw-400 fs_xmd clr_brown nav_link"
                  href="#"
                >
                  <span>
                    Learn <img className="ps-1" src={up_arrow} alt="up_arrow" />
                  </span>
                  <div className="dropdawn_content  ">
                    <div className="d-flex flex-column ">
                      <a className="text-black" href="#">
                        link
                      </a>
                      <a className="text-black" href="#">
                        link
                      </a>
                      <a className="text-black" href="#">
                        link
                      </a>
                    </div>
                  </div>
                </a>
              </li>

              <Link to="/SecondPage">
                <li className="ms-md-4 ps-md-2 mt-4 mt-md-0">
                  <a
                    onClick={() => setfirst(false)}
                    className="dropdown position-relative  ff_helivitica_normal fw-400 fs_xmd clr_brown nav_link"
                    href="#"
                  >
                    <span>
                      Build{" "}
                      <img className="ps-1" src={up_arrow} alt="up_arrow" />
                    </span>
                    <div className="dropdawn_content  ">
                      <div className="d-flex flex-column ">
                        <a className="text-black" href="#">
                          link
                        </a>
                        <a className="text-black" href="#">
                          link
                        </a>
                        <a className="text-black" href="#">
                          link
                        </a>
                      </div>
                    </div>
                  </a>
                </li>
              </Link>

              <li className="ms-md-4 ps-md-2 mt-4 mt-md-0">
                <a
                  className="dropdown position-relative ff_helivitica_normal fw-400 fs_xmd clr_brown nav_link"
                  href="#"
                >
                  <span>
                    Network{" "}
                    <img className="ps-1" src={up_arrow} alt="up_arrow" />
                  </span>
                  <div className="dropdawn_content  ">
                    <div className="d-flex flex-column ">
                      <a className="text-black" href="#">
                        link
                      </a>
                      <a className="text-black" href="#">
                        link
                      </a>
                      <a className="text-black" href="#">
                        link
                      </a>
                    </div>
                  </div>
                </a>
              </li>
              <li className="ms-md-4 ps-md-2 mt-4 mt-md-0">
                <a
                  className="dropdown position-relative ff_helivitica_normal fw-400 fs_xmd clr_brown nav_link"
                  href="#"
                >
                  <span>
                    Community{" "}
                    <img className="ps-1" src={up_arrow} alt="up_arrow" />
                  </span>
                  <div className="dropdawn_content  ">
                    <div className="d-flex flex-column ">
                      <a className="text-black" href="#">
                        link
                      </a>
                      <a className="text-black" href="#">
                        link
                      </a>
                      <a className="text-black" href="#">
                        link
                      </a>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div
              onClick={() => setfirst(true)}
              className="d-flex  flex-column h_20 justify-content-between d-md-none"
            >
              <span className="icon"></span>
              <span className="icon"></span>
              <span className="icon"></span>
            </div>
          </div>
        </Container>
      </nav>
    </section>
  );
}

export default MyNav;
