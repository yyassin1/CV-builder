import React from "react";

function AddWorkExperience({ workExperiences, setWorkExperiences }) {
  const [experience, setExperience] = React.useState({
    company: "",
    workTitle: "",
    workFrom: "",
    workTo: "",
  });

  function handleExperienceChange(event) {
    const { name, value } = event.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  }

  function handleExperienceSubmit(event) {
    event.preventDefault();
    setWorkExperiences([...workExperiences, experience]);
    setExperience({
      company: "",
      workTitle: "",
      workFrom: "",
      workTo: "",
    });
  }

  function handleExperienceDelete(index) {
    setWorkExperiences(workExperiences.filter((exp, i) => i !== index));
  }

  return (
    <main className="info">
      <form className="form" onSubmit={handleExperienceSubmit}>
        <h3 className="titles">Professional Experience</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={experience.company}
            onChange={handleExperienceChange}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Job Title"
            name="workTitle"
            value={experience.workTitle}
            onChange={handleExperienceChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="From"
            name="workFrom"
            value={experience.workFrom}
            onChange={handleExperienceChange}
            className="form-input"
          />
          <input
            type="date"
            placeholder="To"
            name="workTo"
            value={experience.workTo}
            onChange={handleExperienceChange}
            className="form-input"
          />
        </div>
        <button className="form-submit" type="submit">
          Add
        </button>
      </form>
      <br />
      <hr />
      <div>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <p>{experience.company}</p>
            <p>{experience.workTitle}</p>
            <p>{experience.workFrom}</p>
            <p>{experience.workTo}</p>
            <button
              className="form-submit"
              onClick={() => handleExperienceDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AddWorkExperience;
