import pool from "../config/database.js";

const getCourses = (req, res) => {
  pool.query("SELECT * FROM courses", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const postCourse = (req, res) => {};

export default {
  getCourses,
  postCourse,
};
