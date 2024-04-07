import express from 'express';
import dotenv from 'dotenv';
import router from './routes/workouts.js';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.use("/workout",router);

app.get("/", (req, res)=>{
    res.json({message: "Your app is working fine!"});
});

mongoose
.connect(process.env.db_URL)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`your server is running on this port ${process.env.PORT}`);
    });
    console.log("mongodb connected successfully."); 
}).catch((error)=>{
    console.log(error);
})