const express = require("express");
const router = express.Router();

const {
  CreateWorkout,
  EditWorkout,
  DeleteWorkout,
  GetAllWorkout,
  GetWorkoutByID,
} = require("../controller/workoutController");

// GET ALL WORKOUT
router.get("/", GetAllWorkout);

// GET WORKOUT BY ID
router.get("/:id", GetWorkoutByID);

// POST WORKOUT
router.post("/", CreateWorkout);

// EDIT WORKOUT BY ID
router.patch("/:id", EditWorkout);

// DELETE WORKOUT BY ID
router.delete("/:id", DeleteWorkout);

module.exports = router;
