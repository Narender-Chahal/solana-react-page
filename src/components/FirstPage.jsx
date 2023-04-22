import React from "react";
import MyNav from "./MyNav";
import HeadSection from "./HeadSection";
import JoinSection from "./JoinSection";
import BuildSection from "./BuildSection";
import GridSection from "./GridSection";
import FooterSection from "./FooterSection";

const FirstPage = () => {
  return (
    <>
      <div className="hero_bg_img vh_xl_100  d-flex flex-column bg-black">
        <MyNav />
        <HeadSection />
        <JoinSection />
      </div>
      <BuildSection />
      <GridSection />
      <FooterSection />
    </>
  );
};

export default FirstPage;
