import { Router } from "express";
import Controller from "../controller/controller.js"

const router = Router();

router.get('/', Controller.getCourses );
router.post('/', Controller.addCourse );
router.post('/register', Controller.leadRegister)
router.put('/:courseId', Controller.updateCourse)

export default router;