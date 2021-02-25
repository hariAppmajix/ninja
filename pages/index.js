import Head from "next/head";
import dynamic from "next/dynamic";
// import styles from "../styles/Home.module.css";
import Banner from "../components/Banner/Banner";
import WhatWeAre from "../components/WhatWeAre/WhatWeAre";
import NavBarMain from "../components/NavBarMain/NavBarMain";
// const NavBarMain = dynamic(() => import("../components/NavBarMain/NavBarMain"));
import CourseCarousel from "../components/Carousel/CourseCarousel";
import CorporateTraining from "../components/CorporateTraining/CorporateTraining";

// const CourseCarousel = dynamic(() =>
//   import("../components/Carousel/CourseCarousel")
// );
// import PopularCourses from "../components/PopularCourses/PopularCourses";
// import LearningProcess from "../components/LearningProcess/LearningProcess";
const LearningProcess = dynamic(() =>
  import("../components/LearningProcess/LearningProcess")
);

// const CorporateTraining = dynamic(
//   () => import("../components/CorporateTraining/CorporateTraining"),
//   {
//     ssr: false,
//   }
// );
// import Features from "../components/Features/Features";
// import Testimonial from "../components/Testimonial/Testimonial";
const Testimonial = dynamic(
  () => import("../components/Testimonial/Testimonial"),
  {
    ssr: false,
  }
);
// import ContactForm from "../components/ContactForm/ContactForm";
const ContactForm = dynamic(
  () => import("../components/ContactForm/ContactForm"),
  {
    ssr: false,
  }
);
// import CourseBenifits from "../components/CourseBenifits/CourseBenifits";
const CourseBenifits = dynamic(() =>
  import("../components/CourseBenifits/CourseBenifits")
);
import PopularCategories from "../components/PopularCategories/PopularCategories";
// const PopularCategories = dynamic(() =>
//   import("../components/PopularCategories/PopularCategories")
// );
// import Blog from "../components/Blog/Blog";
const Blog = dynamic(() => import("../components/Blog/Blog"));
// import Footer from "../components/Footer/Footer";
const Footer = dynamic(() => import("../components/Footer/Footer"));
// import SocialFloat from "../components/SocialFloat/SocialFloat";
// import SliderNew from "../components/SliderNew/SliderNew";
const SliderNew = dynamic(() => import("../components/SliderNew/SliderNew"), {
  ssr: false,
});
// import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
const BurgerMenu = dynamic(() => import("../components/BurgerMenu/BurgerMenu"));
import toggleContext from "../context/context";
import { Container, Row, Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import React, { useState, useEffect } from "react";

// import { getCountryCodeFromIP } from "../apiCalls";

// const CourseBenifits = lazy(() =>
//   import("../components/CourseBenifits/CourseBenifits")
// );

// const CourseBenifits = dynamic(
//   () => import("../components/CourseBenifits/CourseBenifits"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );
import { getCountryCodeFromIP } from "../apiCalls";

function Home() {
  const { width } = useWindowSize();
  const [showMenu, setshowMenu] = useState(false);
  const value = { showMenu, setshowMenu };
  const [ipMetaData, setIPMetaData] = useState({});

  //tracking country code from ip
  useEffect(() => {
    const countryCode = getCountryCodeFromIP();
    countryCode.then((data) => {
      console.log(data);
      setIPMetaData(data);
    });
  }, []);

  const handleOnClose = () => {
    setshowMenu(false);
    // console.log("rohit");
  };

  return (
    <div id="body-container">
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>
          Leading Online Training & Certification Course Platform - MindMajix
        </title>
        {/* <link
          rel="preload"
          href="/font/Trump_Gothic/TrumpGothicProBold.woff2"
          as="font"
          crossOrigin=""
        /> */}
        <link
          rel="icon"
          href="https://cdn.mindmajixtechhub.com/mern/images/fav.svg"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Mindmajix" />
        <meta name="apple-mobile-web-app-title" content="Mindmajix" />
        <meta name="theme-color" content="#e94350" />
        <meta name="msapplication-navbutton-color" content="#e94350" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="https://mindmajix.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.mindmajix.comhttps://cdn.mindmajixtechhub.com/mern/images/mindmajix-fav-icon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.mindmajix.comhttps://cdn.mindmajixtechhub.com/mern/images/mindmajix-fav-icon.png"
        />

        <meta
          name="description"
          content="One-stop digital platform for all your skill upgrades. Offering the best online training and self-paced videos for individuals and corporates delivering future skills."
        />
        <meta name="author" content="" />
        <link
          rel="shortcut icon"
          href="https://cdn.mindmajix.comhttps://cdn.mindmajixtechhub.com/mern/images/mindmajix-fav-icon.png"
        />
        <link rel="canonical" href="https://mindmajix.com/" />
        <meta
          name="google-site-verification"
          content="BZ-x6vbnZIFORbdOm7Qc69DGYv_GdEphiPhLQ4DtQm4"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Leading Online Training & Certification Course Platform - MindMajix"
        />
        <meta
          property="og:description"
          content="One-stop digital platform for all your skill upgrades. Offering the best online training and self-paced videos for individuals and corporates delivering future skills."
        />
        <meta property="og:url" content="https://mindmajix.com/" />
        <meta property="og:site_name" content="Mindmajix" />
        <meta
          property="og:image"
          content="https://cdn.mindmajix.comhttps://cdn.mindmajixtechhub.com/mern/images/mindmajix-logo-5.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Mindmajix - World's leading certification training providers helps to get ahead in IT field like Hadoop, SAP, BI Tools, Informatica and more 450+ courses."
        />
        <meta
          name="twitter:title"
          content="Online Certification Training | Corporate Training - Mindmajix"
        />
        <meta name="twitter:site" content="@MindMajix1" />
        <meta
          name="twitter:image"
          content="https://cdn.mindmajix.comhttps://cdn.mindmajixtechhub.com/mern/images/Mindmajix_logo2.png"
        />
        <meta name="twitter:creator" content="@MindMajix1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                        "@context" : "http://schema.org",
                        "@type" : "Organization",
                        "name" : "Mindmajix Technologies INC.",
                        "url" : "https://mindmajix.com",
                        "sameAs": [ 
                               "https://www.facebook.com/MindMajixTechnologies",
                               "https://www.twitter.com/mindmajix",
                               "https://www.youtube.com/c/mindmajix",
                               "https://www.linkedin.com/company/mindmajix/"
                                  ],
                        "logo": "https://cdn.mindmajix.com/assethttps://cdn.mindmajixtechhub.com/mern/images/logo.png",
                        "legalName" : "Mindmajix Technologies INC.",
                        "address":[{
                          "@type": "PostalAddress",
                                              "streetAddress": "",
                                              "addressLocality": ["Hyderabad","Bangalore","New York"],
                                              "addressRegion": ["Telangana","Karnataka","New York"],
                                              "postalCode": ["500049","560038","10001"],
                                              "addressCountry": {
                                                  "@type": "Country",
                                                  "name": ["India","India","United States"]                    
                                              }
                          }],
                        "contactPoint" : [
                        { "@type" : "ContactPoint", "telephone" : "+91-9246-333-245", "contactType" : "Customer Service", "contactOption" : "TollFree", "areaServed" : "IN" }
                        ,
                        { "@type" : "ContactPoint", "telephone" : "+91-9246-333-245", "contactType" : "Customer Service", "contactOption" : "TollFree", "areaServed" : "IN" }
                        ,
                        { "@type" : "ContactPoint", "telephone" : "+1-972-427-3027", "contactType" : "Customer Service", "contactOption" : "TollFree", "areaServed" : ["US","CA","MX"] }
                        ]
                    }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context":"http://schema.org",
              "@type":"WebSite",
              "url":"https://mindmajix.com/",
              "potentialAction":{
              "@type":"SearchAction",
              "target":"https://mindmajix.com/?s={search_term_string}",
              "query-input":"required name=search_term_string"
              }
              }`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
              "@type": "WebPage",
              "name": "World's #1 Online & Certification Course Provider | Mindmajix",
              "speakable": {
                  "@type": "SpeakableSpecification",
                  "xpath": [
                      "/html/head/title",
                      "/html/head/meta[@name='description']/@content"
                  ]
              },
              "url": "https://mindmajix.com"
          }`,
          }}
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
        <Banner color="home" />
        <WhatWeAre />

        <section>
          <Container>
            <Row className="pb-4">
              <Col lg={8} md={8} sm={12} xs={12}>
                <p>
                  Be ready with the skills before the industry adopts the
                  technology.
                </p>
                <h2 className="mb-4">
                  Trending <span className="color_text">Courses</span>
                </h2>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12} className="m-auto display_xs">
                <p style={{ float: "right" }}>
                  <a
                    href="https://mindmajix.com/all-courses"
                    className="btn btn-outline-primary py-2 px-3 button_resp"
                  >
                    All Courses
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <CourseCarousel width={width} />
          </Container>
          <Container
            style={{ display: "none", paddingTop: "50px" }}
            className=" displayon_xs"
          >
            <Col lg={12} md={12} sm={12} xs={12} className="m-auto">
              <p style={{ float: "right" }}>
                <a
                  href="https://mindmajix.com/all-courses"
                  className="btn btn-outline-primary py-2 px-3 button_resp"
                >
                  All Courses
                </a>
              </p>
            </Col>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="pb-4">
              <Col lg={8} md={8} sm={12} xs={12}>
                <p>Course categories with the highest number of enrollments.</p>
                <h2 className="mb-4">
                  Popular <span className="color_text">Categories</span>
                </h2>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12} className="m-auto display_xs">
                <p style={{ float: "right" }}>
                  <a
                    href="https://mindmajix.com/all-courses"
                    className="btn btn-outline-primary py-2 px-3 button_resp"
                  >
                    All Courses
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <PopularCategories width={width} />
          </Container>
          <Container
            style={{ display: "none", paddingTop: "50px" }}
            className=" displayon_xs"
          >
            <Col lg={12} md={12} sm={12} xs={12} className="m-auto">
              <p style={{ float: "right" }}>
                <a
                  href="https://mindmajix.com/all-courses"
                  className="btn btn-outline-primary py-2 px-3 button_resp"
                >
                  All Courses
                </a>
              </p>
            </Col>
          </Container>
        </section>

        <LazyLoad once>
          <LearningProcess />
        </LazyLoad>
        <CorporateTraining />
        {/* <Features /> */}
        {/* <Slider /> */}
        <SliderNew />
        {/* </LazyLoad> */}
        <LazyLoad once>
          <CourseBenifits />
        </LazyLoad>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* </Suspense> */}
        <LazyLoad once offset={200}>
          <Testimonial />
        </LazyLoad>
        <LazyLoad once offset={200}>
          {/* use this if you for tracking country code from ipaddress */}
          {/* <ContactForm country_calling_code={ipMetaData.country_calling_code} /> */}
          <ContactForm ipMetaData={ipMetaData} />
        </LazyLoad>
        <Blog />
        <Footer ipMetaData={ipMetaData} />
        {/* <BurgerMenu isOpen={showMenu} /> */}
        {/* <CourseCarousel width={width} /> */}
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

export default Home;
