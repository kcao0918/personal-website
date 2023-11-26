import React from "react";
import styles from "./Overview.module.css";
import githublogo from "../assets/images/githublogo.png";
import linkedinlogo from "../assets/images/linkedinlogo.png";
import emaillogo from "../assets/images/emaillogo.png";

const Overview = () => {
    return (
        <div className={styles["Overview"]}>
            <div className={styles.Name}>Kenny Cao</div>
            <div className={styles.Role}>Aspiring Software Engineer</div>
            <div className={styles.Descrip}>
                Passion for programming and building projects
            </div>
            <div className={styles.Menu}>
                <div className={styles.AboutSelect}>About</div>
                <div className={styles.ExpSelect}>Experience</div>
                <div className={styles.ProjectsSelect}>Projects</div>
            </div>
            <div className={styles.Icons}>
                <a href="https://github.com/kcao0918">
                    <img src={githublogo} alt="Github" width={40}/>
                </a>
                <a href="https://www.linkedin.com/in/kenny-cao-500a66234/">
                    <img src={linkedinlogo} alt="LinkedIn" width={40}/>
                </a>
                <a href="google.com">
                    <img src={emaillogo} alt="Email" width={40}/>
                </a>
            </div>
        </div>
    );
};

export default Overview;
