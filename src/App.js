import "./App.css";
import React from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import EducationalBackground from "./components/EducationalBackground";
import AddWorkExperience from "./components/AddWorkExperience";
import Display from "./components/Display";
import SoftSkill from "./components/SoftSkill";
import HardSkill from "./components/HardSkill";
function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    phoneNumber: "",
    title: "",
    aboutMe: "",
    softSkill: "",
    hardSkill: "",
    education: {
      institution: "",
      major: "",
      learnedFrom: "",
      learnedTo: "",
      program: "",
    },
    experience: {
      company: "",
      workTitle: "",
      workFrom: "",
      workTo: "",
    },
  });

  const [workExperiences, setWorkExperiences] = React.useState([]);
  const [educationBackground, setEducationBackground] = React.useState([]);
  const [softSkills, setSoftSkills] = React.useState([]);
  const [hardSkills, setHardSkills] = React.useState([]);
  function handleSoftSkill(softSkill) {
    setSoftSkills([...softSkills, softSkill]);
  }
  function handleHardSkill(hardSkill) {
    setHardSkills([...hardSkills, hardSkill]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWorkExperiences([...workExperiences, formData.experience]);
    setEducationBackground([...educationBackground, formData.education]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: {
        company: "",
        workTitle: "",
        workFrom: "",
        workTo: "",
      },
      education: {
        institution: "",
        major: "",
        learnedFrom: "",
        learnedTo: "",
        program: "",
      },
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        return {
          ...prevFormData,
          [parent]: {
            ...prevFormData[parent],
            [child]: value,
          },
        };
      } else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <PersonalInfo
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
      <br />
      <hr />
      <br />
      <EducationalBackground
        educationBackground={educationBackground}
        setEducationBackground={setEducationBackground}
      />
      <br />
      <hr />
      <br />
      <AddWorkExperience
        workExperiences={workExperiences}
        setWorkExperiences={setWorkExperiences}
      />
      <br />
      <hr />
      <br />

      <SoftSkill softSkills={softSkills} onAddSoftSkill={handleSoftSkill} />
      <br />
      <hr />
      <br />

      <HardSkill hardSkills={hardSkills} onAddHardSkill={handleHardSkill} />
      <br />
      <hr />
      <br />
      <Display
        firstName={formData.firstName}
        lastName={formData.lastName}
        email={formData.email}
        phone={formData.phoneNumber}
        website={formData.website}
        title={formData.title}
        aboutMe={formData.aboutMe}
        softSkill={softSkills}
        hardSkill={hardSkills}
        education={educationBackground}
        workExperiences={workExperiences}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
}

export default App;
