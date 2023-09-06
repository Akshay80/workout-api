const workout = require("../models/workout");
const mongoose = require("mongoose");

// GET ALL WORKOUT
const GetAllWorkout = async (_req, res) => {
  try {
    const data = await workout.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message, success: false });
  }
};

// GET WORKOUT BY ID
const GetWorkoutByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await workout.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: "No such workout!", success: false });
  }
};

// POST WORKOUT
const CreateWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const data = await workout.create({ title, load, reps });
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ error: error.message, success: false });
  }
};

// EDIT WORKOUT BY ID
const EditWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({ success: false, message: "Workout not found" });
    } else {
      const data = await workout.findOneAndUpdate(
        { _id: id },
        { title, reps, load },
        { new: true }
      );
      res.status(200).json({ success: true, data });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE WORKOUT BY ID
const DeleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({ success: false, message: "Workout not found" });
    } else {
      await workout.findByIdAndDelete(id);
      res
        .status(200)
        .json({ success: true, message: "Workout deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  CreateWorkout,
  EditWorkout,
  DeleteWorkout,
  GetAllWorkout,
  GetWorkoutByID,
};
