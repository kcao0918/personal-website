import React from "react";
import styles from "./Info.module.css";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";

import { Element } from "react-scroll";

const Info = () => {
  return (
    <div className={styles.InfoContainer}>
      <Element name="about">
        <About />
      </Element>
      <Element name="experiences">
        <Experiences />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
};

export default Info;
