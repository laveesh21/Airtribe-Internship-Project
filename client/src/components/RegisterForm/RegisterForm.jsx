import React, { useState } from "react";
import axios from 'axios';
import "./RegisterForm.css";

const RegisterForm = () => {
  const domain = "http://localhost:5000"
  const [formData, setFormData] = useState({
    courseId: "",
    leadName: "",
    leadEmail: "",
    leadPhoneNumber: "",
    leadLinkedin: "",
  });

 // HANDLE CHANGE
  const handleChange = async(e) => {
    const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); 

  };
 
  // HANGLE FORM SUBMISSION
  const handleSubmit = async(e) => {
    e.preventDefault();

    const updatedFormData = {
        ...formData
    }

    console.log("Form data before sending: ", updatedFormData);

    await axios.post(`http://localhost:5000/courses/register/`,updatedFormData)
    .then((response)=>{
        console.log("Project added succesfully via form : ", response.data);
    })
    .catch((error)=>{
        console.log("Error while adding project via form: ", error);
    })
  };

  // JSX structure for Registration Form
  return (
    <div className="superContainer">
      <h2>Lead Registration Form</h2>
      <form className="containerForm" onSubmit={handleSubmit}>
        <label htmlFor="courseId">Course ID:</label>
        <br />
        <input
          className="formInput"  
          type="text"
          id="courseId"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="name">Name:</label>
        <br />
        <input
        className="formInput"  
          type="text"
          id="leadName"
          name="leadName"
          value={formData.leadName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
        className="formInput"  
          type="text"
          id="leadPhoneNumber"
          name="leadPhoneNumber"
          value={formData.leadPhoneNumber}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
        className="formInput"  
          type="email"
          id="leadEmail"
          name="leadEmail"
          value={formData.leadEmail}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="linkedinLink">LinkedIn Profile (optional) :</label>
        <br />
        <input
        className="formInput"  
          type="text"
          id="leadLinkedin"
          name="leadLinkedin"
          value={formData.leadLinkedin}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
