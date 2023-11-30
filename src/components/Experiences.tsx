import React from "react";
import styles from "./Experiences.module.css";

const Experiences = () => {
    const experiences = [
        {
            date: "JUL 22 - AUG 23",
            position: "Teacher/Tutor · Ivy Road Prep",
            description:
                "I held the role of an educator, instructing students in subjects including computer science, math, English, and the sciences. I actively contributed to the learning process by creating comprehensive lesson plans, designing assessments, and facilitating engaging classroom experiences. Notably, I observed significant improvements in their grades, highlighting the positive impact of my instruction.",
        },
        {
            date: "SEP 21 - JUNE 22",
            position: "App Developer",
            description:
                "Proficiently utilized app development tools, including Flutter and Android Studio, to craft innovative applications. Acquired proficiency in Dart and Java programming languages to design functional user interfaces. Notable projects include a colding calling application and most notably the dynamic app Gide, enabling shops to register and manage discounts. Users can seamlessly input their location and discover nearby shops, enhancing convenience and accessibility.",
        },
        {
            date: "OCT 20 - MAY 21",
            position:
                "Participant · Qubit by Qubit: Introduction to Quantum Computing",
            description:
                "Qubit by Qubit participant, engaging in quantum computing education programs. Acquired foundational knowledge and practical skills in quantum computing principles. Collaborated on hands-on activities and coding exercises to advance proficiency in this emerging field.",
        },
    ];
    return (
        <div className={styles.ExpContainer}>
            {experiences.map((experience) => (
                <div className={styles.Item}>
                    <div className={styles.ItemDate}>{experience.date}</div>
                    <div className={styles.ItemBody}>
                        <div className={styles.ItemPosition}>
                            {experience.position}
                        </div>
                        <br />
                        <div className={styles.ItemDescription}>
                            {experience.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experiences;
