import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { IoLocation } from "react-icons/io5";
import styles from "../style/style.module.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

export default function PortfolioComponents() {
  //useState
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isProjectPage, setIsProjectPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  //UseInView
  const [refLandingPage, inViewLandingPage] = useInView({
    threshold: 0.5,
  });
  const [refAboutPage, inViewAboutPage] = useInView({
    threshold: 0.5,
  });
  const [refProjectPage, inViewProjectPage] = useInView({
    threshold: 0.5,
  });

  const [refContactPage, inViewContactPage] = useInView({
    threshold: 0.5,
  });
  //UseEffect
  useEffect(() => {
    setIsLandingPage(inViewLandingPage);
  }, [inViewLandingPage]);

  useEffect(() => {
    setIsAboutPage(inViewAboutPage);
  }, [inViewAboutPage]);

  useEffect(() => {
    setIsProjectPage(inViewProjectPage);
  }, [inViewProjectPage]);
  useEffect(() => {
    setIsContactPage(inViewContactPage);
  }, [inViewContactPage]);
  //styles
  const headerLandingStyle = {
    color: "#5483b3",
    fontFamily: "Times New Roman, serif",
    position: "absolute",
    left: "35%",
    top: "40%",
  };
  const backgroundDivStyle = {
    backgroundImage: "url('/background.gif')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    filter: "blur(3px)",
    width: "98.9vw",
    height: "400vh",
    position: "absolute",
    left: "0",
  };
  const locationIcon = {
    position: "absolute",
    left: "41%",
    top: "48%",
  };
  const locationMalabonStyle = {
    position: "absolute",
    left: "45%",
    top: "49.50%",
    color: "#5483b3",
    fontFamily: "Times New Roman, serif",
    fontSize: "25px",
  };
  const simpleWordsInLandingPage = {
    position: "absolute",
    left: "30%",
    top: "57%",
    color: "#5483b3",
    fontFamily: "Times New Roman, serif",
    fontSize: "20px",
  };
  const navBar = {
    position: "fixed",
    left: "70%",
    top: "20px",
    scrollBehavior: "smooth",
  };
  const navLinkStyle = {
    color: "#5483b3",
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    margin: "10px 0",
    textDecoration: "none",
    marginLeft: "15px",
  };

  const AboutDiv = {
    position: "absolute",
    top: "100%",
    left: "40%",
  };

  const AboutHeader = {
    color: "#5483b3",
    fontFamily: "Times New Roman, serif",
  };
  const myInfo = {
    color: "#5483b3",
    fontFamily: "Times New Roman, serif",
    position: "absolute",
    top: "290%",
    left: "-150%",
    fontSize: "20px",
  };
  const myPhotoStyle = {
    height: "800%",
    width: "400px",
    position: "absolute",
    right: "-180%",
    top: "290%",
    borderRadius: "10px",
  };
  const ProjectDiv = {
    position: "absolute",
    top: "200%",
    left: "40%",
  };
  const ProjectHeader = {
    color: "#5483b3",
    fontFamily: "Times New Roman, serif",
  };
  const project1 = {
    position: "absolute",
    right: "80%",
    width: "40vw",
    height: "40vh",
    backgroundColor: "#6ca3d9",
  };
  const styleProject1 = {
    height: "25vh",
    position: "absolute",
    top: "45px",
    left: "10px",
  };
  const project2 = {
    position: "absolute",
    right: "80%",
    width: "40vw",
    height: "40vh",
    backgroundColor: "#6ca3d9",
    top: "690%",
  };
  const project3 = {
    position: "absolute",
    right: "-200%",
    width: "40vw",
    height: "40vh",
    backgroundColor: "#6ca3d9",
    top: "100%",
  };
  const projectTitle = {
    color: "black",
    fontFamily: "Times New Roman, serif",
    fontSize: "20px",
    position: "absolute",
    top: "5%",
    left: "10px",
  };
  const projectHeader = {
    color: "black",
    fontFamily: "Times New Roman, serif",
    fontSize: "20px",
    position: "absolute",
    top: "30%",
    left: "52%",
    width: "20vw",
  };
  const projects = {
    position: "absolute",
    top: "50%",
    left: "52%",
  };
  const repo = {
    position: "absolute",
    top: "75%",
    left: "52%",
  };

  const ContactDiv = {
    position: "absolute",
    top: "300%",
    left: "40%",
  };
  const ContactSay = {
    color: "#5483b3",
    fontFamily: "Times New Roman, serif",
    fontSize: "20px",
  };
  const ContactSays = {
    position: "absolute",
    right: "150%",
    top: "500%",
    width: "100%",
  };
  const styleLogo = {
    fontSize: "50px",
    marginLeft: "20px",
  };
  const styleDivLogo = {
    position: "absolute",
    left: "120vh",
    width: "15vw",
    top: "8vh",
  };
  return (
    <>
      {/**Desktop */}
      <div className="container d-none d-md-block">
        <div style={backgroundDivStyle}></div>
        <div style={navBar}>
          <a href="#landingPage1" style={navLinkStyle}>
            INTRO
          </a>
          <a href="#AboutPage" style={navLinkStyle}>
            ABOUT
          </a>
          <a href="#ProjectPage" style={navLinkStyle}>
            PROJECTS
          </a>
          <a href="#contactDiv" style={navLinkStyle}>
            CONTACT
          </a>
        </div>
        {/*Landing Page* */}
        <div
          className={`animate__animated ${isLandingPage ? "animate__fadeIn" : "animate__fadeOut"}`}
          ref={refLandingPage}
          id="landingPage1"
        >
          <h1 style={headerLandingStyle}>Hi, I'm Railey Pacheco!</h1>
          <div style={locationIcon}>
            <IoLocation style={{ fontSize: "50px", color: "#6ca3d9" }} />
          </div>
          <h6 style={locationMalabonStyle}>Malabon City</h6>
          <h6 style={simpleWordsInLandingPage}>
            Currently 2nd year college BS Computer Engineering student in STI
            College
          </h6>
        </div>
        {/*ABOUT* */}
        <div
          id="AboutPage"
          style={AboutDiv}
          className={`animate__animated ${isAboutPage ? "animate__fadeIn" : "animate__fadeOut"}`}
          ref={refAboutPage}
        >
          <h1 style={AboutHeader}>ABOUT PAGE</h1>
          <h4 style={myInfo}>
            During my year, as a Computer Engineering student at STI College I'm
            diving into the realm of web development with enthusiasm. I'm
            focusing on learning the essentials of both frontend and backend
            aspects. While my educational journey is still ongoing I'm actively
            immersing myself in mastering the tools and technologies that drive
            todays web applications. In my studies I've acquired a grasp of
            frontend languages such as HTML, CSS and JavaScript allowing me to
            create user visually appealing interfaces. By working on projects
            I've refined my skills in design to ensure a seamless user
            experience across various devices and screen sizes. On the side of
            things I'm eager to explore server side programming using Python and
            frameworks like Flask. The flexibility and scalability that Flask
            offers have captured my interest. I'm keen to discover how it can be
            utilized to develop web applications. Furthermore I am familiarizing
            myself with PostgreSQL as a database management system to understand
            its importance in storing and managing data. Outside of coursework I
            am actively seeking resources to enhance my understanding and skills
            in web development. By completing tutorials and engaging with coding
            communities I aim to broaden my knowledge of practices, in web
            development and stay updated on emerging trends.
          </h4>
          <img src="/MyPhoto.jpg" alt="RaiPhotoAbout" style={myPhotoStyle} />
        </div>
        {/**Projects */}
        <div
          id="ProjectPage"
          ref={refProjectPage}
          style={ProjectDiv}
          className={`animate__animated ${isProjectPage ? "animate__fadeIn" : "animate__fadeOut"}`}
        >
          <h1 style={ProjectHeader}>PROJECT PAGE</h1>
          <div className="project1" style={project1}>
            <h1 style={projectTitle}>Title:Random Jokes</h1>
            <h6 style={projectHeader}>
              This Project He just generated Jokes using API.
            </h6>
            <a href="https://random-jokes-theta.vercel.app/" target="blank_">
              <button className={styles.buttons} style={projects}>
                View Project
              </button>
            </a>
            <a href="https://github.com/Railey29/Random_jokes" target="blank_">
              <button className={styles.buttons} style={repo}>
                Repositories
              </button>
            </a>
            <img
              src="/RandomJokes.png"
              alt="RandomJokes"
              style={styleProject1}
            />
          </div>
          <div className="project2" style={project2}>
            <h1 style={projectTitle}>Title:ElNido Palawan</h1>
            <h6 style={projectHeader}>
              This project is about how beautiful Palawan is
            </h6>
            <a href="https://el-nido-palawan-c27u.vercel.app/" target="blank_">
              <button className={styles.buttons} style={projects}>
                View Project
              </button>
            </a>
            <a
              href="https://github.com/Railey29/el-nido-palawan"
              target="blank_"
            >
              <button className={styles.buttons} style={repo}>
                Repositories
              </button>
            </a>
            <img src="/Palawan.png" alt="Palawan" style={styleProject1} />
          </div>
          <div className="project2" style={project3}>
            <h6 style={projectHeader}>
              basically it's just clickable in dark and light mode
            </h6>
            <a href="https://toggle-light-3jdm.vercel.app/" target="blank_">
              <button className={styles.buttons} style={projects}>
                View Project
              </button>
            </a>
            <a href="https://github.com/Railey29/TOGGLE_LIGHT" target="blank_">
              <button className={styles.buttons} style={repo}>
                Repositories
              </button>
            </a>
            <h1 style={projectTitle}>Title:DarkMode & LightMode</h1>
            <img
              src="/DarkMode_LightMode.png"
              alt="DarkModeLightMode"
              style={styleProject1}
            />
          </div>
        </div>
        {/**Contact */}
        <div
          id="contactDiv"
          ref={refContactPage}
          style={ContactDiv}
          className={`animate__animated ${isContactPage ? "animate__fadeIn" : "animate__fadeOut"}`}
        >
          <h1 style={ProjectHeader}>CONTACT PAGE</h1>
          <div style={ContactSays}>
            <h1 style={ContactSay}>GET IN TOUCH</h1>
            <p style={ContactSay}>
              Welcome to my website! if you have question or want to say hi!,
              feel free to contact me. I'm student who enjoy learning and making
              new friends I'll respond as quick as possible
            </p>
            <div style={styleDivLogo}>
              <a
                href="https://github.com/Railey29?tab=repositories"
                target="blank_"
                style={styleLogo}
              >
                <FaGithub />
              </a>
              <a
                href="https://vercel.com/railey29s-projects"
                target="blank_"
                style={styleLogo}
              >
                <IoLogoVercel />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094006743139"
                target="blank_"
                style={styleLogo}
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/**Mobile */}
      <div className="d-md-none"></div>
    </>
  );
}
