import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      position: "Gide",
      description: `Implemented a Firebase back-end system to enable smooth user authentication and login functionality, catering to
      both store managers and regular users. Utilized seamless integration with the Google Maps API to offer accurate location services for identifying stores and
      facilitating navigation`,
      techstack: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    },
    {
      position: "Swap List",
      description: `Developed a user-friendly application for streamlined item uploads, preference selection, and seamless integration of
        Firebase-retrieved items onto the product page Conducted weekly scrum meetings and utilized GitHub to facilitate communication among collaborators`,
      techstack: ["Android Studio", "Java", "Firebase"],
    },
    {
      position: "College Scheduler",
      description:
        "Built a responsive application using Java and Android Studio designed for easy navigation for managing schedules, assignments, and exams",
      techstack: ["Android Studio", "Java"],
    },
  ];
  return (
    <div className={styles.ExpContainer}>
      <h1>Projects</h1>
      {projects.map((experience) => (
        <div className={styles.Item}>
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

export default Projects;
