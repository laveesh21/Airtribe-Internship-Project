import express from "express";
import bodyParser from "body-parser";
import coursesRouter from "./routes/courses.js";
import leadsRouter from "./routes/leads.js";
import cors from "cors";
import jwt from 'jsonwebtoken';
import pool from "./config/database.js"
// import leadRouter from "./routes/leads.js"

const app = express();
const PORT = 5000;
const jwtKey = 'secret'

app.use(cors());
app.use(bodyParser.json());
app.use("/courses", coursesRouter);
app.use("/leads", leadsRouter)


// API TO VERIFY LOG IN CREDENTIALS
app.post(`/auth/login`, async(req, res)=>{
    const {username, password} = req.body;
    try{
        const query = {
            text: 'SELECT * FROM instructors WHERE instructor_email = $1 AND instructor_password = $2',
            values: [username, password],
          };
          const result = await pool.query(query);

          if (result.rows.length === 0) {
            return res.status(401).json({ error: "INVALID CREDENTIALS" });
          }
  
      const instructor = result.rows[0];
      const token = jwt.sign({email: instructor.instructor_email }, jwtKey);
      res.status(200).json({ token });
    }catch(error){
      console.log("ERROR: ", error);
      res.status(500).json({message: "INTERNAL SERVER ERROR OCCURED", error})
    }
});


// Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'MIDDLEWARE: Unauthorized' });
  }

  jwt.verify(token, jwtKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'MIDDLEWARE: Invalid token' });
    }
    req.instructor_email = user;
    // console.log("Super User",user)
    next();
  });
};

// API to search for any lead
app.get('/leads/search/:name', authenticateToken, async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    console.log("CHECK-----------")
    // Query the database to search for leads by name
    const queryResult = {
      text: 'SELECT * FROM leads WHERE LOWER(lead_name) LIKE $1',
      values: [`%${name}%`],
    };
    const { rows } = await pool.query(queryResult);
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error searching leads:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/leads/status/:name', authenticateToken,(req, res)=>{

});

// SERVER ACTIVELY LISTENING
app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
 });
