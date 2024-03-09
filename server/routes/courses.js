import { Router } from "express";

const router = Router();

router.get('/:id', (req,res)=>{
    res.status(200).json({message: "All list of courses"})
});

router.post('/',(req,res)=>{
    
});

export default router;