import { Router } from "express";
import Controller from "../controller/controller.js"

const router = Router();

router.put('/:leadId', Controller.updateLead)

export default router;