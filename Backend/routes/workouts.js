import express from 'express';
import { createWorkout, getWorkout, getWorkouts, updateWorkout, deleteWorkout } from '../controllers/workoutController.js';
const router=express.Router();
router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);
export default router;