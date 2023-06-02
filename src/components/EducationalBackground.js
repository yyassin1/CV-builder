import React from "react";

export default function EducationalBackground({
  educationBackground,
  setEducationBackground,
}) {
  const [education, setEducation] = React.useState({
    institution: "",
    major: "",
    learnedFrom: "",
    learnedTo: "",
    program: "",
  });

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  }

  function handleEducationSubmit(event) {
    event.preventDefault();
    setEducationBackground([...educationBackground, education]);
    setEducation({
      institution: "",
      major: "",
      learnedFrom: "",
      learnedTo: "",
      program: "",
    });
  }

  function handleEducationDelete(index) {
    setEducationBackground(educationBackground.filter((exp, i) => i !== index));
  }

  return (
    <main className="info">
      <form className="form" onSubmit={handleEducationSubmit}>
        <h3 className="titles">Educational Background</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Institution"
            onChange={handleEducationChange}
            name="institution"
            value={education.institution}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Major"
            onChange={handleEducationChange}
            name="major"
            value={education.major}
            className="form-input"
          />
          <div className="form-group">
            <input
              type="text"
              placeholder="Program (eg.Bachelor, Masters)"
              onChange={handleEducationChange}
              name="program"
              value={education.program}
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="From"
            onChange={handleEducationChange}
            name="learnedFrom"
            value={education.learnedFrom}
            className="form-input"
          />
          <input
            type="date"
            placeholder="To"
            onChange={handleEducationChange}
            name="learnedTo"
            value={education.learnedTo}
            className="form-input"
          />
        </div>
        <button className="form-submit">Add</button>
      </form>
      <br />
      <hr />
      <div>
        {educationBackground.map((education, index) => (
          <div key={index}>
            <p>{education.institution}</p>
            <p>{education.major}</p>
            <p>{education.program}</p>
            <p>{education.learnedFrom}</p>
            <p>{education.learnedTo}</p>
            <button
              className="form-submit"
              onClick={() => handleEducationDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
