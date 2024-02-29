import React from "react";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const experiences = [
    {
      date: "JAN 24 - PRESENT",
      position: "Software Engineer - Collaborative Whiteboard · GT WebDev",
      description: `Developed a full stack collaborative whiteboard website utilizing React.JS and Tailwind in a team of 7+ developers. Implemented MongoDB backend for seamless whiteboard data retrieval and user authentication. Employed Socket.io and Express.JS libraries enabling collaboration on a shared whiteboard, providing real-time updates for all users. Collaborated in an agile team of 7+ engineers providing weekly updates and discussions on current progress and new feature implementations`,
      techstack: ["HTML/Tailwind/JS", "MongoDB", "Express.JS", "ReactJS"],
    },
    {
      date: "JAN 24 - PRESENT",
      position:
        "Undergraduate Researcher · Georgia Tech Financial Services and Innovation Lab",
      description:
        "Repurposed attention weights from a neural network trained for stock prediction to automatically discern financially relevant news by utilizing stock price movements and news headlines. Trained the TagMyNews classifier using a parsed text dataset comprising of 210k+ articles, categorizing the news headline by category achieving a 90%+ accuracy using the Softmax classification. Leveraged a feedforward layer within BERT, employing ELU activation, to capture contextual information from headlines and generate embeddings encoding semantic meaning",
      techstack: ["Python", "PyTorch"],
    },
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
