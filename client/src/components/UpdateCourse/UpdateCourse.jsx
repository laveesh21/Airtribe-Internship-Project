import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UpdateCourse.css'

function UpdateCourse() {
  const [formData, setFormData] = useState({
    courseName: '',
    seats: '',
    startDate: ''
  });
  
  const { course_id } = useParams(); // Extracting course_id from the URL

  useEffect(() => {
    // Fetch course data using course_id if needed
  }, [course_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/courses/${course_id}/`, formData);
      console.log(response.data); // Log the response from the backend
      // Reset the form after successful submission
      setFormData({
        courseName: '',
        seats: '',
        startDate: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <>
    <h1>Update Course</h1>   
    <form onSubmit={handleSubmit} className='updateForm'>
      <div className='updateFormDiv'>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="seats">Max Seats:</label>
        <input
          type="number"
          id="seats"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Course</button>
    </form>
    </>

  );
}

export default UpdateCourse;
