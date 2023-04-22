import React from "react";
import logo_img from "../assets/img/png/logo.png";
function Preloder() {
  setTimeout(() => {
    document.querySelector(".preloder").style.left = "-100%";
    document.body.classList.remove("overflow-hidden");
  }, 5000);
  return (
    <div>
      <div className="preloder">
        <div className="animation_up">
          <img src={logo_img} alt="logo_img" />
        </div>
      </div>
    </div>
  );
}

export default Preloder;
