import React from "react";

export default function SoftSkill(props) {
  const [softSkill, setSoftSkill] = React.useState("");
  function handleChange(event) {
    setSoftSkill(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (softSkill.trim() === "") {
      return;
    }
    props.onAddSoftSkill(softSkill);
    setSoftSkill("");
  }
  return (
    <main className="info">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="titles">Soft Skill</h3>
        <input
          type="text"
          placeholder="Add Soft Skill"
          id="newSkill"
          value={softSkill}
          onChange={handleChange}
        />
        <br />
        <button className="form-submit" type="submit">Add</button>
      </form>
    </main>
  );
}
