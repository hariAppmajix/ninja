import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useContext,
  lazy,
  Suspense,
} from "react";
import Head from "next/head";

import NavBarMain from "../components/NavBarMain/NavBarMain";
// import Sidebar from "../components/community/Sidebar/Sidebar";
// import Main from "../components/community/Main/Main";
import ContactForm from "../components/ContactForm/ContactForm";

import Footer from "../components/Footer/Footer";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import toggleContext from "../context/context";
import { Container, Row, Col } from "react-bootstrap";

function community() {
  const { width } = useWindowSize();
  const [showMenu, setshowMenu] = useState(false);
  const value = { showMenu, setshowMenu };

  // const content = useContext(toggleContext);

  const handleOnClose = () => {
    setshowMenu(false);
    // console.log("rohit");
  };
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>
          Online Certification Training | Corporate Training - Mindmajix
        </title>
        <link
          rel="icon"
          href="https://cdn.mindmajixtechhub.com/mern/images/fav.svg"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
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
        <Container>
          <Row>
            <Col lg={3} md={3} sm={3} xs={3}>
              {/* <Sidebar /> */}
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}></Col>
          </Row>
        </Container>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default community;
