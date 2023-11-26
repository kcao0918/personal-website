import React from "react";
import styles from "./Info.module.css";
import About from "./About";
import Experience from "./Experience";

const Info = () => {
    return (
        <div className={styles.InfoContainer}>
            <About />
            <Experience />
        </div>
    );
};

export default Info;
