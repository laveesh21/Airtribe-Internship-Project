import express from "express";
import bodyParser from 'body-parser';
import coursesRouter from "./routes/courses.js";

const app = express();
const PORT = 5000;
app.use(bodyParser.json())

app.use("/courses", coursesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT}`);
});
