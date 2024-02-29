import styles from "./Overview.module.css";
import githublogo from "../assets/images/githublogo.png";
import linkedinlogo from "../assets/images/linkedinlogo.png";
import emaillogo from "../assets/images/emaillogo.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Overview = () => {
  const [activeSection, setActiveSection] = useState("About");

  const handleActiveSection = (to: string) => {
    setActiveSection(to);
  };

  const handleDashes = (sect: string) => {
    const isActive = activeSection === sect;
    return isActive ? `———— ${sect}` : `—— ${sect}`;
  };

  const [DropdownVisibility, setDropdownVisibility] = useState(false);

  let timeoutId: NodeJS.Timeout;
  const handleDropdownVisibility = (isVisible: boolean) => {
    timeoutId = setTimeout(() => {
      setDropdownVisibility(isVisible);
    }, 400);
  };

  return (
    <div className={styles["Overview"]}>
      <div className={styles.Name}>Kenny Cao</div>
      <div className={styles.Role}>Aspiring Software Engineer</div>
      <div className={styles.Descrip}>
        Passion for programming and building projects
      </div>

      <div className={styles.Menu}>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.AboutSelect}
          onSetActive={() => handleActiveSection("About")}
          style={{ color: activeSection === "About" ? "#72d4d6" : "#d3d6e6" }}
        >
          {handleDashes("About")}
        </Link>
        <Link
          to="experiences"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.ExpSelect}
          onSetActive={() => handleActiveSection("Experiences")}
          style={{
            color: activeSection === "Experiences" ? "#72d4d6" : "#d3d6e6",
          }}
        >
          {handleDashes("Experiences")}
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.ProjectsSelect}
          onSetActive={() => handleActiveSection("Projects")}
          style={{
            color: activeSection === "Projects" ? "#72d4d6" : "#d3d6e6",
          }}
        >
          {handleDashes("Projects")}
        </Link>
      </div>

      <div className={styles.Icons}>
        <a href="https://github.com/kcao0918">
          <img src={githublogo} alt="Github" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/kenny-cao-500a66234/">
          <img src={linkedinlogo} alt="LinkedIn" width={40} />
        </a>
        <a
          href=""
          onMouseEnter={() => handleDropdownVisibility(true)}
          onMouseLeave={() => handleDropdownVisibility(false)}
        >
        </a>
      </div>
    </div>
  );
};

export default Overview;
