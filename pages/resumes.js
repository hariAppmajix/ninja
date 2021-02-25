import Head from "next/head";
import NavBarMain from "../components/NavBarMain/NavBarMain";
import Footer from "../components/Footer/Footer";
import SampleResumes from "../components/SampleResumes/SampleResumes";

import React, { useState } from "react";

import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import toggleContext from "../context/context";

function resumes() {
  const [showMenu, setshowMenu] = useState(false);
  const value = { showMenu, setshowMenu };

  const handleOnClose = () => {
    setshowMenu(false);
  };

  return (
    <div id="body-container">
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>
          Online Certification Training | Corporate Training - Mindmajix
        </title>
        <link rel="icon" href="/images/fav.svg" />
      </Head>

      <BurgerMenu
        right
        isOpen={showMenu}
        onClose={handleOnClose}
        outerContainerId={"body-container"}
      />

      <div style={{ width: "100%" }}>
        <toggleContext.Provider value={value}>
          <NavBarMain />
        </toggleContext.Provider>

        <SampleResumes />

        <Footer />
      </div>
    </div>
  );
}

export default resumes;
