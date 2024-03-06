import Express from "express";

const app = Express();
const PORT = 5000;

app.get('/', (req,res)=>{
    res.status(200).json({message: "Succesful"})
});

app.listen(PORT, ()=>{
    console.log(`Server is listening at PORT: ${PORT}`);
});