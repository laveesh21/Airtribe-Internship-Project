import React, { useState } from 'react';
import axios from 'axios';
import './CreateCourse.css'; // Import your CSS file (optional)

function CreateCourse() {
  const [instructorId, setInstructorId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [seats, setSeats] = useState('');
  const [startDate, setStartDate] = useState('');
  const [additionalInput, setAdditionalInput] = useState(''); // New state variable

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // ... rest of your code ...

    try {
      const response = await axios.post(`http://localhost:5000/courses/`, {
        instructorId,
        courseName,
        seats,
        startDate,
        additionalInput, // Include the new input data
      });
      console.log('Course created:', response.data);
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div className="create-course-form">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="instructorId">Instructor ID:</label>
        <input
          type="number" // Assuming instructor ID is a number
          id="instructorId"
          value={instructorId}
          onChange={(e) => setInstructorId(e.target.value)}
          required
        />
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <label htmlFor="seats">Seats:</label>
        <input
          type="number"
          id="seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          min="1" // Set minimum seats
          required
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
}

export default CreateCourse;
