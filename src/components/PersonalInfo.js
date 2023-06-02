import React from "react";

export default function PersonalInfo(props) {
  const { handleChange, handleSubmit, formData } = props;
  return (
    <main className="info">
      <form onSubmit={props.handleSubmit} className="form">
        <h3 className="titles">Personal information</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            onChange={props.handleChange}
            name="firstName"
            value={formData.firstName}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={props.handleChange}
            name="lastName"
            value={formData.lastName}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            onChange={props.handleChange}
            name="email"
            value={formData.email}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Website"
            onChange={props.handleChange}
            name="website"
            value={formData.website}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="About Me"
            onChange={props.handleChange}
            name="aboutMe"
            value={formData.aboutMe}
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            onChange={props.handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Title"
            onChange={props.handleChange}
            name="title"
            value={formData.title}
            className="form-input"
          />
        </div>
        <button className="form-submit">Add</button>
      </form>
    </main>
  );
}
