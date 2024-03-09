import express from "express";
import coursesRouter from "./routes/courses.js";

const app = express();
const PORT = 5000;

app.use("/courses", coursesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT}`);
});
