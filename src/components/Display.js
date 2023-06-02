import React from "react";

export default function Display(props) {
  return (
    <div className="display-container">
      <div className="body-1">
        <div className="name-container">
          <h1>
            {props.firstName} {props.lastName}
          </h1>
          <h3>{props.title}</h3>
        </div>
        <div className="contact-container">
          <h5>{props.email}</h5>
          <h5>{props.phone}</h5>
          <h5>{props.website}</h5>
          <br />
        </div>
      </div>
      <div className="about-me-container">
        <h3>About Me</h3>
        <p>{props.aboutMe}</p>
      </div>
      <div className="skills-container">
        <h3>Skills</h3>
        <div className="skills">
          <p>
            <strong>Soft Skills: </strong>
            <ul>
              <li>{props.softSkill}</li>
            </ul>
          </p>
          <br />
          <p>
            <strong>Hard Skills: </strong>
            <ul>
              <li>{props.hardSkill}</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="education-container">
        <h3>Educational Background</h3>
        {props.education.map((edu, index) => (
          <div key={index}>
            <p>{edu.institution}</p>
            <p>{edu.major}</p>
            <p>{edu.program}</p>
            <p>
              {edu.learnedFrom} - {edu.learnedTo}
            </p>
          </div>
        ))}
      </div>
      <div className="work-experience-container">
        <h3>Work Experience</h3>
        {props.workExperiences.map((exp, index) => (
          <div key={index}>
            <p>{exp.company}</p>
            <p>{exp.workTitle}</p>
            <p>
              {exp.workFrom} - {exp.workTo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
