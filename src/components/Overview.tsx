import styles from "./Overview.module.css";
import githublogo from "../assets/images/githublogo.png";
import linkedinlogo from "../assets/images/linkedinlogo.png";
import emaillogo from "../assets/images/emaillogo.png";
import { Link } from "react-scroll";

const Overview = () => {
  return (
    <div className={styles["Overview"]}>
      <div className={styles.Name}>Kenny Cao</div>
      <div className={styles.Role}>Aspiring Software Engineer</div>
      <div className={styles.Descrip}>
        Passion for programming and building projects
      </div>

      <div className={styles.Menu}>
        <Link
          activeStyle={{ color: "#72d4d6" }}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.AboutSelect}
        >
          About
        </Link>
        <Link
          activeStyle={{ color: "#72d4d6" }}
          to="experiences"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.ExpSelect}
        >
          Experiences
        </Link>
        <Link
          activeStyle={{ color: "#72d4d6" }}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.ProjectsSelect}
        >
          Projects
        </Link>
      </div>

      <div className={styles.Icons}>
        <a href="https://github.com/kcao0918">
          <img src={githublogo} alt="Github" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/kenny-cao-500a66234/">
          <img src={linkedinlogo} alt="LinkedIn" width={40} />
        </a>
        <a href="google.com">
          <img src={emaillogo} alt="Email" width={40} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
