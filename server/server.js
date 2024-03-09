import express from "express";
import bodyParser from "body-parser";
import coursesRouter from "./routes/courses.js";
import leadRouter from "./routes/leads.js"
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/courses", coursesRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});
