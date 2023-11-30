import React from "react";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const experiences = [
    {
      date: "JUL 22 - AUG 23",
      position: "Teacher/Tutor · Ivy Road Prep",
      description:
        "Instructed students in subjects including computer science, math, english. Actively contributed to the learning process by creating comprehensive lesson plans, designing assessments, and facilitating engaging classroom experiences. Notably, I observed significant improvements in their grades, highlighting the positive impact of my instruction.",
      techstack: ["Python", "Java"],
    },
    {
      date: "SEP 21 - JUN 22",
      position: "App Developer",
      description:
        "Utilized app development tools, including Flutter and Android Studio. Acquired proficiency in Dart and Java programming languages to design functional user interfaces. Notable projects include a cold calling application and the dynamic app Gide, enabling shops to register and manage discounts. Users can seamlessly input their location and discover nearby shops, enhancing convenience and accessibility.",
      techstack: ["Android Studio", "Java", "Flutter", "Dart", "Firebase"],
    },
    {
      date: "OCT 20 - MAY 21",
      position:
        "Participant · Qubit by Qubit: Introduction to Quantum Computing",
      description:
        "Qubit by Qubit participant, engaging in quantum computing education programs. Acquired foundational knowledge and practical skills in quantum computing principles. Collaborated on hands-on activities and coding exercises to advance proficiency in this emerging field.",
      techstack: ["Python"],
    },
  ];
  return (
    <div className={styles.ExpContainer}>
      {experiences.map((experience) => (
        <div className={styles.Item}>
          <div className={styles.ItemDate}>{experience.date}</div>
          <div className={styles.ItemBody}>
            <div className={styles.ItemPosition}>{experience.position}</div>
            <br />
            {experience.description}
            <div className={styles.TechList}>
              {experience.techstack.map((tech, index) => (
                <div className={styles.TechStack} key={index}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
