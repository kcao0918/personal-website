import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.AboutMe}>
      I am currently in my sophomore year at
      <div className={styles.Highlight}> Georgia Tech</div>, 
      majoring in
      computer science with a focus on
      <div className={styles.Highlight}> Intelligence</div> and
      <div className={styles.Highlight}> Info/Internetworks</div>. My enthusiasm
      for <div className={styles.Highlight}> Web Development</div> and my
      passion for solving coding problems have fueled my journey in programming.
      Proficient in <div className={styles.Highlight}> Python</div>,
      <div className={styles.Highlight}> Java</div>,
      <div className={styles.Highlight}> HTML/CSS/JS</div>, and
      <div className={styles.Highlight}> TypeScript</div>, I also leverage the
      <div className={styles.Highlight}> React</div> library for crafting
      dynamic and responsive web applications, such as the one you are currently
      exploring.
      <br />
      <br />
      When I'm not engrossed in classes or preparing for exams, I find joy in
      the intricacies of <div className={styles.Highlight}>chess</div>, even
      though I wouldn't call myself a grandmaster just yet. Additionally, I
      immerse myself in the captivating realms of
      <div className={styles.Highlight}> science fiction works</div>. Currently,
      my literary fascination is 'Three Body Problem' by Cixin Liu, an
      enthralling sci-fi narrative that unfolds across millennia.
    </div>
  );
};

export default About;
