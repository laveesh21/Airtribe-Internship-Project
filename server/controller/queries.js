const getCourses = "SELECT * FROM courses"
const addCourse = "INSERT INTO courses (course_instructor_id, course_name, max_seats, start_date) VALUES($1, $2, $3, $4)";

export default {
    getCourses,
    addCourse
}