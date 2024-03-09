import { Router } from "express";
import CourseController from "../controller/controller.js"

const router = Router();

router.get('/', CourseController.getCourses );
router.post('/', CourseController.addCourse );

export default router;