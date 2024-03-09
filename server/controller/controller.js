const getCourses = (req,res)=>{
    res.status(200).json({message: "All list of COURSE"})
}

export default {
    getCourses,
}