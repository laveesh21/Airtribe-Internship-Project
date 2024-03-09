const getCourses = "SELECT * FROM courses"
const addCourse = "INSERT INTO courses (course_instructor_id, course_name, max_seats, start_date) VALUES($1, $2, $3, $4)";
const leadRegister = "INSERT INTO leads (course_id, lead_name, lead_email, lead_phone_number, lead_linkedin_profile) VALUES ($1, $2, $3, $4, $5)"

export default {
    getCourses,
    addCourse,
    leadRegister,
}