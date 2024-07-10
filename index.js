import { useState } from "react";
import "./card.css";

function Creditapp() {
  const [formdata, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    state: "",
    city: "",
    dob: "",
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...(formdata[name] = value),
    });
  };

  const handleSubmit = (e) => {
    e.preventdefault();

    const validationError = validate(formdata);
    if (Object.keys(validationError).length === 0) {
      setFormData({
        fname: "",
        mname: "",
        lname: "",
        email: "",
        state: "",
        city: "",
        dob: "",
      });
      setError({});
    } else {
      setError(validationError);
    }
  };

  const validate = (formdata) => {
    let error = {};

    if (!formdata.fname.trim()) {
      formdata.fname = "Firname Must required";
    }
    return error;
  };

  return (
    <div className="container">
      <header>
        <h1>HBL Bank Ltd.</h1>
      </header>

      <hero>
        <div className="formss">
          <form className="inpt" onSubmit={handleSubmit}>
            {" "}
            <br />
            <label>FirstName</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter your last name"
              required
              onChange={handleChange}
              value={formdata.fname}
            />
            <br />
            {error.fname && <p className="error">{error.fname}</p>}
            <label>MiddleName</label>
            <input
              type="text"
              name="mname"
              placeholder="enter your middle name"
              required
              onChange={handleChange}
            />
            <br />
            <label>LastName</label>
            <input
              type="text"
              name="lname"
              placeholder="Enter your last name"
              required
              onChange={handleChange}
            />
            <br />
            <label>LastName</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
            <br />
            <label>state</label>
            <input
              type="text"
              placeholder="Enter your state"
              name="state"
              required
              onChange={handleChange}
            />
            <br />
            <label>City</label>
            <input
              type="text"
              placeholder="Enter your City"
              name="city"
              required
              onChange={handleChange}
            />
            <br />
            <label>DOB</label>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dob"
              required
              onChange={handleChange}
            />
            <br />
            <label for="Male">Male</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            <br />
            <label for="Male">Female</label>
            <input
              type="radio"
              name="gender"
              value="FeMale"
              onChange={handleChange}
            />
            <br />
            <button type="submit"> Register</button>
          </form>
        </div>
      </hero>

      <footer>
        <div className="footer"></div>
      </footer>
    </div>
  );
}

export default Creditapp;
