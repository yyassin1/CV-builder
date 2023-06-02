import React from "react";

export default function HardSkill(props) {
  const [hardSkill, setHardSkill] = React.useState("");
  function handleChange(event) {
    setHardSkill(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (hardSkill.trim() === "") {
      return;
    }
    props.onAddHardSkill(hardSkill);
    setHardSkill("");
  }
  return (
    <main className="info">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="titles">Hard Skill</h3>
        <input
          type="text"
          placeholder="Add Hard Skill"
          id="newSkill"
          value={hardSkill}
          onChange={handleChange}
        /><br />
        <button className="form-submit" type="submit">Add</button>
      </form>
    </main>
  );
}
