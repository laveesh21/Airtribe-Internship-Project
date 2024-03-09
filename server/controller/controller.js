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

  if (!courseName || !instructorId || !seats || !startDate) {
    return res.status(400).json({ error: 'All fields are required' });
  }
    pool.query(queries.addCourse, values, (error, results) => {
      if (error) {
        console.error("Error while adding course: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      };
      res.status(201).send("Succesfully added course");
      console.log("LOG: Successfully added course");
    });

}

// Exporting all contollers
export default {
  getCourses,
  addCourse,
};
