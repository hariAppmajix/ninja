import DefaultErrorPage from "next/error";
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
import Footer from "../components/Footer/Footer";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Reviews from "../components/CoursePage/Reviews/Reviews";
import CourseBenifits from "../components/CourseBenifits/CourseBenifits";
import ContactSticky from "../components/CoursePage/ContactSticky/ContactSticky";
import toggleContext from "../context/context";
import { Container, Row, Col } from "react-bootstrap";
import { getCourseData, getCourseHeadings } from "../apiCalls";
import BlogLanding from "../components/BlogLanding/BlogLanding";
import { courseSlugs } from "../staticpaths";
import * as _ from "lodash";

function Page(props) {
  const { width } = useWindowSize();
  const [showMenu, setshowMenu] = useState(false);
  const value = { showMenu, setshowMenu };
  const [heading, setHeading] = useState({});

  const handleOnClose = () => {
    setshowMenu(false);
  };

  if (props.type === "course") {
    /*     useEffect(async () => {
       //course Headings
  const headings = await getCourseHeadings(props.data.course.id);
  console.log(headings);
  setHeading(headings);
      
    }, []) */

    return (
      <div>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>Page Title</title>
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
          {}
          <Banner
            course={props.data.course}
            heading={
              props.data &&
              props.data.headings &&
              props.data.headings.course_title
                ? props.data.headings.course_title
                : props.data.course.name
            }
          />
          <NavCourse />
          <Curriculum
            lessons={props.data.lessons}
            heading={
              props.data &&
              props.data.headings &&
              props.data.headings.course_content
                ? _.startCase(_.toLower(props.data.headings.course_content))
                : `${props.data.course.name} `
            }
            course={props.data.course}
          />
          {props.data &&
          props.data.projects &&
          props.data.projects.length > 0 ? (
            <Projects
              projects={props.data.projects}
              course={props.data.course}
            />
          ) : (
            <></>
          )}
          <section>
            <Container id="TrainingOptions">
              <h2 className="text-center">
                {props.data &&
                props.data.headings &&
                props.data.headings.modes_training ? (
                  _.startCase(_.toLower(props.data.headings.modes_training))
                ) : (
                  <>
                    For{" "}
                    <span className="color_text special_text">Individuals</span>
                  </>
                )}
              </h2>
              <p className="mb-4 text-center">
                Be ready with the skills before the industry adopts the
                technology.
              </p>
              <SelfPacedTraining />
              {props.data && props.data.course && props.data.course.slug ? (
                <LiveVirtualTraining
                  path={props.data.course.slug}
                  course={props.data.course}
                />
              ) : (
                <></>
              )}

              {/* <EnterpriseTrainingSolutions /> */}
            </Container>
          </section>
          <EnterpriseTrainingSolutions />
          <Certification
            heading={
              props.data &&
              props.data.headings &&
              props.data.headings.course_certification
                ? _.startCase(
                    _.toLower(props.data.headings.course_certification)
                  )
                : `${props.data.course.name}`
            }
            course={props.data.course}
          />
          <Reviews
            heading={props.data.headings.reviews}
            course={props.data.course}
          />
          <CourseBenifits />
          <Instructor />
          {props.data &&
          props.data.objectives &&
          props.data.objectives.length > 0 ? (
            <Course_objectives
              objectives={props.data.objectives}
              course={props.data.course}
              heading={
                props.data &&
                props.data.headings &&
                props.data.headings.course_objectives
                  ? _.startCase(
                      _.toLower(props.data.headings.course_objectives)
                    )
                  : `${props.data.course.name} `
              }
            />
          ) : (
            <></>
          )}

          {props.data && props.data.faqs && props.data.faqs.length > 0 ? (
            <FAQs
              faqs={props.data.faqs}
              course={props.data.course}
              heading={
                props.data &&
                props.data.headings &&
                props.data.headings.course_faq
                  ? props.data.headings.course_faq
                  : `${props.data.course.name}`
              }
            />
          ) : (
            <></>
          )}

          <ContactForm />
          <ContactSticky />
          <Footer />
        </div>
      </div>
    );
  } else if (props.type === "blog") {
    return (
      <>
        {/* <BlogLanding /> */}
        <h1>Its a blog</h1>
      </>
    );
  } else {
    if (ctx.params.page !== "robots.txt") {
      return (
        <>
          <Head>
            <meta name="robots" content="noindex" />
          </Head>
          <DefaultErrorPage statusCode={404} />
        </>
      );
    }
  }
}

export async function getStaticPaths() {
  // const courseUrls = courseSlugs.map((data) => {
  //   return { params: { page: data } };
  // });
  const courseUrls = [
    { params: { page: "net-training" } },
    { params: { page: "tableau-training" } },
    { params: { page: "agile-training" } },
  ];

  // const blogUrls = [
  //   { params: { page: "net-blog" } },
  //   { params: { page: "tableau-blog" } },
  // ];

  return {
    paths: [...courseUrls],
    fallback: false, // See the "fallback" section below
  };
}

export const getStaticProps = async (ctx) => {
  const coursePages = JSON.parse(
    JSON.stringify(`["net-training", "tableau-training", "agile-training"]`)
  );
  // const coursePages = JSON.parse(JSON.stringify(courseSlugs));
  const blogPages = JSON.parse(`["net-blog", "tableau-blog"]`);
  if (coursePages.indexOf(ctx.params.page) > -1) {
    const data = await getCourseData(ctx.params.page);
    console.log(JSON.stringify(data.headings) + "=====");
    console.log("++++++++++++");
    return {
      props: { data, type: "course" }, // will be passed to the course page component as props
    };
  } else if (blogPages.indexOf(ctx.params.page) > -1) {
    return {
      props: { type: "blog" }, // will be passed to the blog page component as props
    };
  } else {
    return {
      props: { type: "404" }, // will be passed to the page component as props
    };
  }
};

// export async function getServerSideProps(ctx) {
//   const coursePages = JSON.parse(`["net-training", "tableau-training"]`);
//   const blogPages = JSON.parse(`["net-blog", "tableau-blog"]`);
//   if (coursePages.indexOf(ctx.query.page) > -1) {
//     const data = await getCourseData(ctx.query.page);
//     console.log(data);
//     return {
//       props: { data, type: "course" }, // will be passed to the course page component as props
//     };
//   } else if (blogPages.indexOf(ctx.query.page) > -1) {
//     return {
//       props: { type: "blog" }, // will be passed to the blog page component as props
//     };
//   } else {
//     return {
//       props: { type: "404" }, // will be passed to the page component as props
//     };
//   }
// }

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

// const net_trainings = {
//   course: {
//     id: 1,
//     name: ".NET Training",
//     headline: "Leverage the growing demand for Certified .NET professionals",
//     description:
//       "<p>Mindmajix .NET training offers hands-on expertise to design and develop web applications/solutions using .NET under the guidance of industry experts. The course will make you proficient in basic fundamentals as well as advanced patterns, and also make you work on two real-time projects to strengthen your skills and clear the .NET certification exam.</p>\r\n",
//     salary_trends:
//       "Avg. Salary for .Net Developer $92,422 PA..Net has a market share of about 20.90%Used by top industries across various business Verticals. Ex: TCS, Infosys, Accenture, Wipro, Cognizant,etc.",
//     growth:
//       "Microsoft's .Net has been placed at No.1 position in 2019's Gartner Magic Quadrant for Analytics and Business Intelligence Platforms for 12 consecutive years.",
//     companies:
//       ".NET has 6.08% market share around the world. MNCs like Accenture, Amazon, Anthem, Cognizant, Dell, Hitachi, IBM, Infosys, KPMG, TCS, Wipro, and more than 23,000 MNCs use .NET Technology",
//     video: "DhwmvWjgQ_w",
//     video_demo: "",
//     duration: 40,
//     lab_sessions: "30",
//     fee_usd: 400,
//     image_url: "https://cdn.mindmajix.com/courses/net-training-110620.png",
//     trending_index: 0,
//     self_paced: 1,
//     certification: "2",
//     rating: 4,
//     enrolled: "19612",
//     page_title:
//       "▷ .NET Training & Certification | .NET Online Course - Mindmajix",
//     sub_title: " ",
//     slug: "net-training",
//     meta_title: "",
//     meta_desc:
//       "Upgrade Your Career with .NET Training ➔ Get Hired by Top MNCs ✔️.NET Online Certification Course ✔️Live Projects ✔️40hrs ✔️Job Placement ✔️24*7 Support",
//     keywords: ".NET Training, .NET Certification Training, Learn .NET Course",
//     status: 1,
//     created_by: null,
//     course_city: "0",
//     createdAt: null,
//     updatedAt: null,
//   },
//   headings: {},
//   projects: [],
//   reviews: [
//     {
//       id: 1,
//       course_id: 1,
//       name: "Rohan Gune ",
//       rating: 5,
//       description:
//         "<p>It was a wonderful experience to learn .NET Training from the Mindmajix. The trainer has taught me all the VB.NET Concepts and took me to the next level. I truly thank Mindmajix.</p>\r\n",
//       linkedin_profile: "",
//       linkedin_image: "https://www.linkedin.com/in/rohan-gune-818b6b/",
//       city: "Mechanicsburg, Pennsylvania, USA",
//       designation: "Sr. Software Consultant",
//       status: 1,
//     },
//     {
//       id: 3,
//       course_id: 1,
//       name: "Asif Hasan",
//       rating: 5,
//       description:
//         "<p>I took .NET training from Mindmajix. I must say the course content was highly qualitative and the trainer covered all concepts. Overall it was a good experience with Mindmajix.</p>\r\n",
//       linkedin_profile: "https://www.linkedin.com/in/asif-hasan-70025b8b/",
//       linkedin_image: "",
//       city: "Cypress, Texas, USA",
//       designation: "HPE Consultant",
//       status: 1,
//     },
//     {
//       id: 9,
//       course_id: 1,
//       name: "John Phillips",
//       rating: 5,
//       description:
//         "It was a great experience to undergo and get certified in the .Net course from MindMajix. As a working professional, it has not only given me an exposure to the domain, but also helped me learn cross technologies and develop an inclination towards it. The trainer had a great hold on the domain, who came with a handy industry experience. Quality of the training materials, assignments, project, support and other infrastructures are a top notch. Definitely a course to undergo if you are a .Net enthusiast. Thanks MindMajix and team! Pleasure being an associate.",
//       linkedin_profile: "",
//       linkedin_image: "",
//       city: "",
//       designation: "",
//       status: 1,
//     },
//     {
//       id: 2138,
//       course_id: 1,
//       name: "Ravi Madhav",
//       rating: 4,
//       description:
//         "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<p>The whole package is highly satisfied. I was able to derive quality insights from the SQL Server DBA Online Course. A big thanks to everyone in Mindmajix for their 24*7 support and Quality Training.</p>\r\n</body>\r\n</html>",
//       linkedin_profile: "https://www.linkedin.com/in/ravi-madhav-3041a5155/",
//       linkedin_image: "",
//       city: "Columbus, Ohio Area, USA",
//       designation: "Senior Database Analyst",
//       status: 1,
//     },
//     {
//       id: 2147,
//       course_id: 1,
//       name: "Rubi",
//       rating: 5,
//       description:
//         '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<p>&nbsp;</p>\r\n<p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Arial; color: #292929; background-color: #ffffff; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">I am very pleased with the Selenium with Python Online Certification training provided by Mindmajix. The classes were informative. Having more than 3 years of experience the trainer explains each and every topic with real-time examples. The maintenance of class timings was perfect. The response to questions was excellent. Thank you.</span></p>\r\n</body>\r\n</html>',
//       linkedin_profile: "https://www.linkedin.com/in/rubi-kumari-14a79494/",
//       linkedin_image: "",
//       city: "Delhi, India",
//       designation: "Senior System Engineer",
//       status: 1,
//     },
//     {
//       id: 2180,
//       course_id: 1,
//       name: "Raj",
//       rating: 5,
//       description:
//         '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">I have taken Microsoft Azure online certification training from Mindmajix. The classes were conducted on time and assistance from the support team was excellent. Don\'t have a bad thing to say about Mindmajix - always available to answer any questions, the instructor provided positive, helpful feedback for improvement of results. It was a wonderful experience to learn with Mindmajix.</span></p>\r\n<p><span id="docs-internal-guid-f8f40867-7fff-d889-fcf0-daac6a70380d">&nbsp;</span></p>\r\n</body>\r\n</html>',
//       linkedin_profile:
//         "https://www.linkedin.com/in/rajashekar-rao-santapuri-70950695/",
//       linkedin_image: "",
//       city: "Hyderabad, India",
//       designation: "Sr Consultant",
//       status: 1,
//     },
//     {
//       id: 2185,
//       course_id: 1,
//       name: "Narayan V",
//       rating: 4,
//       description:
//         "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<p>Mindmajix is the most successful instructor-led online institute. I completed the Oracle RAC DBA course. I had a great experience with the Mindmajix Training team including their expert trainers and 24*7 support. Thanks to the entire Mindamajix Team.</p>\r\n</body>\r\n</html>",
//       linkedin_profile: "https://www.linkedin.com/in/narayan-v-3564b213/",
//       linkedin_image: "",
//       city: "Bengaluru, Karnataka, India",
//       designation: "Sr.Project Manager",
//       status: 1,
//     },
//     {
//       id: 2259,
//       course_id: 1,
//       name: "Mahesh Jaybhaye",
//       rating: 5,
//       description:
//         "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<p>Very good Hands-on IBM Informix Certification course learning Experience. It was helpful with recorded sessions and a detailed course curriculum. The instructor cover each and every topic listed in the course content. Thanks to Trainer and Mindmajix team</p>\r\n</body>\r\n</html>",
//       linkedin_profile: "https://www.linkedin.com/in/mahesh-jaybhaye-2486b514/",
//       linkedin_image: "",
//       city: "Mumbai, Maharashtra, India",
//       designation: "",
//       status: 1,
//     },
//     {
//       id: 2261,
//       course_id: 1,
//       name: "Mahesh Jaybhaye",
//       rating: 5,
//       description:
//         "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<p>Very good Hands-on IBM Informix Certification course learning Experience. It was helpful with recorded sessions and a detailed course curriculum.The instructor cover each and every topic listed in the course content.Thanks to Trainer and Mindmajix team</p>\r\n</body>\r\n</html>",
//       linkedin_profile: "https://www.linkedin.com/in/mahesh-jaybhaye-2486b514/",
//       linkedin_image: "",
//       city: "Mumbai, Maharashtra, India",
//       designation: "",
//       status: 1,
//     },
//     {
//       id: 2614,
//       course_id: 1,
//       name: "Thirumal Murugan",
//       rating: 5,
//       description:
//         "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<p>I opted for SharePoint training and it was great learning from mindmajix. Until now the overall experience that I had with Mindmajix team was great, both in terms of the training and the support team as well. The practical approach has enabled me to improve real-time performance.&nbsp;</p>\r\n</body>\r\n</html>",
//       linkedin_profile: "https://www.linkedin.com/in/thirumalmurugan/",
//       linkedin_image: "",
//       city: "Tampa, Florida",
//       designation: "",
//       status: 1,
//     },
//   ],
//   tools: [],
//   lessons: [
//     {
//       id: 2,
//       course_id: 1,
//       lesson: "Base Class Libraries",
//       description:
//         "<ol>\r\n\t<li>Common language-runtime (CLR)</li>\r\n\t<li>Microsoft intermediate language (MSIL)</li>\r\n\t<li>Optimized just-in-time (JIT)</li>\r\n\t<li>Common type systems (CTS)</li>\r\n\t<li>Common language specification (CLS)</li>\r\n\t<li>Compilation and execution of .NET application</li>\r\n\t<li>Assemblies and Namespace</li>\r\n\t<li>The Start Page and Solution Explorer</li>\r\n\t<li>The Object Browser and Class View Window</li>\r\n\t<li>The Code Editor and The Form Designer and the Toolbox</li>\r\n\t<li>The Server Explorer window and Macro Explorer</li>\r\n\t<li>Running a Visual Basic Console Application</li>\r\n</ol>\r\n",
//       status: 1,
//       video_url: "",
//     },
//     {
//       id: 3,
//       course_id: 1,
//       lesson: "INTRODUCTION TO VB.NET",
//       description:
//         "<ol>\n\t<li>Features of visual basic .NET</li>\n\t<li>File extensions used in visual basic .NET</li>\n\t<li>Visual Basic keywords</li>\n\t<li>Visual Basic statements</li>\n\t<li>Procedures, classes and modules</li>\n\t<li>The Option &amp; Import statements</li>\n\t<li>Adding classes to project</li>\n\t<li>Declaring variables and Data types</li>\n\t<li>Arrays</li>\n\t<li>Handling date and time</li>\n</ol>\n",
//       status: 1,
//       video_url: "",
//     },
//     {
//       id: 4872,
//       course_id: 1,
//       lesson: "Practice Test & Interview Questions",
//       description:
//         '<p style="text-align:justify">Mindmajix offers advanced <a href="https://mindmajix.com/net-interview-questions" target="_blank">.NET interview questions and answers</a> along with <a href="https://mindmajix.com/net-sample-resumes" target="_blank">.NET resume samples</a>. Take a free sample practice test before appearing in the certification to improve your chances of scoring high.</p>\n',
//       status: 1,
//       video_url: "",
//     },
//     {
//       id: 8046,
//       course_id: 1,
//       lesson: "Selenium Grid",
//       description:
//         "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<ul>\r\n<li>Introduction&nbsp;</li>\r\n<li>RemoteWeb Driver&nbsp;</li>\r\n<li>Configuring hub&nbsp;</li>\r\n<li>Configuring node&nbsp;</li>\r\n<li>Run selenium Web Driver scripts in parallel selenium Grid&nbsp;</li>\r\n<li>Running scripts on remote computer&nbsp;</li>\r\n</ul>\r\n</body>\r\n</html>",
//       status: 1,
//       video_url: "",
//     },
//   ],
//   objectives: [
//     {
//       id: 2232,
//       course_id: 1,
//       objective: "Course Objectives",
//       description:
//         "<p>By the end of this Training, you&#39;ll learn about the following concepts:</p>\r\n\r\n<ul>\r\n\t<li>VS.NET IDE</li>\r\n\t<li>.Net Framework</li>\r\n\t<li>Object-Oriented Concepts</li>\r\n\t<li>ADO.Net Components</li>\r\n\t<li>Error Handling</li>\r\n\t<li>XML IN .NET</li>\r\n\t<li>Implementation Of ADO.NET</li>\r\n</ul>\r\n",
//       status: 1,
//     },
//     {
//       id: 2233,
//       course_id: 1,
//       objective: "Why should you learn .NET to grow your career?",
//       description:
//         "<ul>\r\n\t<li>More than 1,700 companies are already using the .NET platform and demand has raised significantly over the past few years</li>\r\n\t<li>MNCs like Vodafone, Mindtree, and Samsung are recruiting .Net developers in huge numbers all over the world.</li>\r\n\t<li>On an average, Microsoft .Net Developer earns around $92,000 per annum.</li>\r\n</ul>\r\n",
//       status: 1,
//     },
//     {
//       id: 2234,
//       course_id: 1,
//       objective: "Who should learn .NET?",
//       description:
//         "<p>This course is ideal for the following job roles:</p>\r\n\r\n<ul>\r\n\t<li>IT Experts</li>\r\n\t<li>Software engineers</li>\r\n\t<li>Web developers</li>\r\n\t<li>Testing engineers</li>\r\n</ul>\r\n",
//       status: 1,
//     },
//     {
//       id: 2235,
//       course_id: 1,
//       objective: "What are the prerequisites for the .NET course?",
//       description:
//         "<p>There are no particular prerequisites required. Both technical and non-technical aspirants can learn this course.</p>\r\n",
//       status: 1,
//     },
//     {
//       id: 2236,
//       course_id: 1,
//       objective: "What will you learn in this .NET training?",
//       description:
//         "<p>The following are the skills that user gains upon completion of this training:</p>\r\n\r\n<ul>\r\n\t<li>Understanding the MVC Design structure.</li>\r\n\t<li>Understand the architecture of ASP.NET MVC</li>\r\n\t<li>Develop application following controllers, views, and model format.</li>\r\n\t<li>Develop custom model binders.</li>\r\n\t<li>Develop a database-centric application and Implement security using forms authentications.</li>\r\n\t<li>Divide the application into multiple modules using areas</li>\r\n</ul>\r\n",
//       status: 1,
//     },
//   ],
//   cities: [],
//   faqs: [
//     {
//       id: 1,
//       course_id: 1,
//       question: "What If I Miss A Class?",
//       answer:
//         '<p style="text-align: justify;">We record each LIVE class session you undergo through and we will share the recordings of each session/class.</p>\r\n',
//       status: 5,
//     },
//     {
//       id: 2,
//       course_id: 1,
//       question: "How Will I Execute The Practical?",
//       answer:
//         '<p style="text-align: justify;">Trainer will provide the Environment/Server Access to the students and we ensure practical real-time experience and training by providing all the utilities required for the in-depth understanding of the course.</p>\r\n',
//       status: 5,
//     },
//     {
//       id: 3,
//       course_id: 1,
//       question: "If I Cancel My Enrollment, Will I Get The Refund?",
//       answer:
//         '<p style="text-align: justify;">If you are enrolled in classes and/or have paid fees, but want to cancel the registration for certain reason, it can be attained within 48 hours of initial registration. Please make a note that refunds will be processed within 30 days of prior request.</p>\r\n',
//       status: 5,
//     },
//     {
//       id: 4,
//       course_id: 1,
//       question: "Will I Be Working On A Project?",
//       answer:
//         '<p style="text-align: justify;">The Training itself is Real-time Project Oriented.</p>\r\n',
//       status: 5,
//     },
//     {
//       id: 5,
//       course_id: 1,
//       question: "Are These Classes Conducted Via Live Online Streaming?",
//       answer:
//         '<p style="text-align: justify;">Yes. All the training sessions are LIVE Online Streaming using either through WebEx or GoToMeeting, thus promoting one-on-one trainer student Interaction.</p>\r\n',
//       status: 0,
//     },
//   ],
// };

export default Page;
