import pool from "../config/database.js";
import queries from "./queries.js";

// GET courses contoller
const getCourses = (req, res) => {
  pool.query(queries.getCourses, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// POST courses contoller
const addCourse = (req, res) => {
  const { instructorId, courseName, seats, startDate } = req.body;
  const values = [instructorId, courseName, seats, startDate];

  // To check if all fields are filled
  if (!courseName || !instructorId || !seats || !startDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Query to be executed after succesfully reciving details
  pool.query(queries.addCourse, values, (error, results) => {
    if (error) {
      console.error("Error while adding course: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).send("Succesfully added course");
    console.log("LOG: Succesfully added course");
  });
};

// POST course registration by lead
const leadRegister = (req, res) => {
  const { courseId, leadName, leadEmail, leadPhoneNumber, leadLinkedin } =
    req.body;
  console.log(req.body); ////////// DEBUGGING
  const values = [courseId, leadName, leadEmail, leadPhoneNumber, leadLinkedin];

  // To check if all fields are filled
  if (!courseId || !leadName || !leadEmail || !leadPhoneNumber) {
    return res.status(400).json({ error: "Mandatory fiels are not filled." });
  }

  //Query to be executed after succesfully reciving details
  pool.query(queries.leadRegister, values, (error, results) => {
    if (error) {
      console.error("Error while registration: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).send("Succesfully Registered");
    console.log("LOG: Succesfully Registered");
  });
};

// PUT course update API
const updateCourse = (req, res) => {
  const courseId = req.params.courseId;
  const { courseName, seats, startDate } = req.body;
  const values = [courseName, seats, startDate, courseId]; // Add instructorId to values array

  // To check if all fields are filled
  if (!courseName || !seats || !startDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Query to be executed after successfully receiving details
  pool.query(queries.updateCourse, values, (error, results) => {
    if (error) {
      console.error("Error while updating course: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.rowCount === 0) {
      // If no rows were affected (course not found or unauthorized), return error
      return res
        .status(404)
        .json({ error: "Course not found or unauthorized" });
    }
    res.status(200).send("Successfully updated course");
    console.log("LOG: Successfully updated course");
  });
};

// Exporting all contollers
export default {
  getCourses,
  addCourse,
  leadRegister,
  updateCourse,
};
