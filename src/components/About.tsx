import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.AboutMe}>
            I am currently in my sophomore year at Georgia Tech, majoring in
            computer science with a focus on Intelligence and System
            Architecture. My enthusiasm for Web Development and my passion for
            solving coding problems have fueled my journey in programming.
            Proficient in Python, Java, HTML/CSS, and TypeScript, I also
            leverage the React library for crafting dynamic and responsive web
            applications, such as the one you are currently exploring.
            <br />
            <br />
            When I'm not engrossed in classes or preparing for exams, I find joy
            in the intricacies of chess, even though I wouldn't call myself a
            grandmaster just yet. Additionally, I immerse myself in the
            captivating realms of science fiction novels. Currently, my literary
            fascination is 'Three Body Problem' by Cixin Liu, an enthralling
            sci-fi narrative that unfolds across millennia.
        </div>
    );
};

export default About;
