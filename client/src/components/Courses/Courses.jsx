import React, { useState, useEffect } from "react";
import CoursesCard from "../CourseCard/CoursesCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses`).then((res) => {
      console.log(res);
      console.log(res.status);
      if (res.status === 200) {
        setCourse(res.data);
      }
    });
  }, []);

  return (
    <>
        <div><h1>List of Courses</h1></div>
      <div className="home-body-grid">
        {courses.map((course) => (
          <Link to={`/courses/${course.course_id}`} key={course.course_id}>
            <CoursesCard
              name={course.course_name}
              seats={course.max_seats}
              startdate={course.start_date}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
