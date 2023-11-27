import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {

  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    faculty: "",
  });

  const { firstName, lastName, email, faculty } = student;

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students", student);
    navigate("/view-students");
  };

  return (
    <div className="col-sm-8 py-3 px-5">
      <form onSubmit={(e) => saveStudent(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="faculty">
            Faculty
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="faculty"
            id="faculty"
            required
            value={faculty}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
