import Workout from "../models/workout.js";
const createWorkout=async (req, res)=>{
    const {title, reps, load}=req.body;
    let emptyFields=[]
    if(!title){
        emptyFields.push('title')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(emptyFields>0){
        return res.status(400).json({error: 'please fill all the fields', emptyFields})
    }
    try {
        const workout=await Workout.create({title, reps, load});
        return res.status(200).json(workout);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({message: error.message});
    } 
}

const getWorkouts=async (req, res)=>{
    try {
        const workouts=await Workout.find({}).sort({CreatedAt: -1});
        return res.status(200).json(workouts);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({message: error.message});
    }
}

const getWorkout=async (req, res)=>{
    const {id}=req.params;
    try {
        const workout=await Workout.findById(id);
        return res.status(200).json(workout);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({message: error.message});
    }
}

const updateWorkout=async (req, res)=>{
    const {id}=req.params;
    try {
        const updateWorkout=await Workout.findByIdAndUpdate(id, req.body);
        if (!updateWorkout) {
            return res.status(404).json({ message: "Details not found." });
          }
        return res.status(200).json({message: "Details Updates Successfully!"});
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({message: error.message});
    }
}

const deleteWorkout=async (req, res)=>{
    const {id}=req.params;
    try {
        const DeleteWorkout=await Workout.findByIdAndDelete(id, req.body);
        if (!DeleteWorkout) {
            return res.status(404).json({ message: "Details not found." });
          }
        return res.status(200).json({message: "Workout Delete Successfully!"});
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({message: error.message});
    }
}

export {createWorkout, getWorkout, getWorkouts, updateWorkout, deleteWorkout};