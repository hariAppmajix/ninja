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
import Banner from "../components/CoursePage/Banner/Banner";
import NavBarMain from "../components/NavBarMain/NavBarMain";
import Instructor from "../components/CoursePage/Instructor/Instructor";
import NavCourse from "../components/CoursePage/NavCourse/NavCourse";
import Curriculum from "../components/CoursePage/Curriculum/Curriculum";
import Projects from "../components/CoursePage/Projects/Projects";
import LiveVirtualTraining from "../components/CoursePage/LiveVirtualTraining/LiveVirtualTraining";
import SelfPacedTraining from "../components/CoursePage/SelfPacedTraining/SelfPacedTraining";
import EnterpriseTrainingSolutions from "../components/CoursePage/EnterpriseTrainingSolutions/EnterpriseTrainingSolutions";
import Certification from "../components/CoursePage/Certification/Certification";
import Course_objectives from "../components/CoursePage/course_objectives/Course_objectives";
import FAQs from "../components/CoursePage/FAQs/FAQs";
import ContactForm from "../components/ContactForm/ContactForm";
import CourseBenifits from "../components/CourseBenifits/CourseBenifits";
import Footer from "../components/Footer/Footer";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Reviews from "../components/CoursePage/Reviews/Reviews";
import toggleContext from "../context/context";
import { Container, Row, Col } from "react-bootstrap";
import RelatedCourses from "../components/CoursePage/RelatedCourses/RelatedCourses";
import ContactSticky from "../components/CoursePage/ContactSticky/ContactSticky";

function course({ course }) {
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
        <Banner
          course={{ duration: 24, lab_sessions: 27, description: "fghjk" }}
          heading={`asdf`}
        />

        <NavCourse />
        <Curriculum
          lessons={[
            { lesson: "dfghj", description: "gfhjk" },
            { lesson: "dfghj", description: "gfhjk" },
          ]}
          heading={`asdf`}
        />
        <Projects
          course={{ name: "Agile Training" }}
          projects={[{ project_name: "abcd", description: "ertyui" }]}
        />
        <section>
          <Container>
            <h2 className="text-center">
              For <span className="color_text special_text">Individuals</span>
            </h2>
            <p className="mb-4 text-center ">
              Be ready with the skills before the industry adopts the
              technology.
            </p>
            <SelfPacedTraining />
            <LiveVirtualTraining course={{ duration: 24, fee_usd: 300 }} />
          </Container>
        </section>
        <EnterpriseTrainingSolutions />
        <Instructor />
        <Course_objectives
          objectives={[
            { objective: "rftgyhuj", description: "dfghj" },
            { objective: "rftgyhuj", description: "dfghj" },
          ]}
          course={{ name: "Agile Training" }}
          heading={`asdf`}
        />
        <Certification heading={`asdf`} />
        <CourseBenifits />

        <FAQs
          course={{ name: "Agile Training" }}
          faqs={[{ question: "fghj", answer: "dfghj" }]}
          heading={`asdf`}
        />
        <Reviews heading={`asdf`} />
        <RelatedCourses />

        <ContactForm />
        <ContactSticky />
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

export default course;
