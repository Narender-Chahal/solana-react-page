import React from "react";
import MyNav from "./MyNav";
import DeveloperSection from "./DeveloperSection";
import GetStarted from "./GetStarted";
import BoxSection from "./BoxSection";
import SourceSection from "./SourceSection";
import SolanaDeveloper from "./SolanaDeveloper";
import FooterSection from "./FooterSection";

const SecondPage = () => {
  return (
    <>
      <div className="vh_xl_100  d-flex flex-column bg-black">
        <MyNav />
        <DeveloperSection />
      </div>

      <GetStarted />
      <BoxSection />
      <SourceSection />
      <SolanaDeveloper />
      <FooterSection />
    </>
  );
};

export default SecondPage;
