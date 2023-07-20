const User = require("../../model/user.model");
const Exercise = require("../../model/exercise.model");
const Log = require("../../model/logs.model");

const getUser = async (req, res, next) => {
  try {
    const users = await User.find({}, "username _id").exec();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const postUser = async (req, res, next) => {
  try {
    const name = req.body.username;
    const user = await User.findOne({ username: name }, "username _id").exec();
    if (user) {
      return res.status(200).json(user);
    }
    const newUser = await User.create({ username: name }, "username _id");
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const postExercise = async (req, res, next) => {
  try {
    const userID = req.params.id;
    const { description, duration } = req.body;
    let { date } = req.body;
    if (!date) {
      let currentDate = new Date();
      date = currentDate.toDateString();
    }
    const user = await User.findById(userID);
    const newExercise = await Exercise.create({
      description,
      duration,
      date: date.toDateString(),
    });
    return res.status(201).json({
      username: user.username,
      description,
      duration,
      date,
      _id: user._id,
    });
  } catch (error) {
    console.log(error);
  }
};

const getLogs = async (req, res, next) => {
  try {
    const userID = req.params.id;
    const user = await User.findById(userID);
    const logs = await Log.find({ userId: userID });
    res.status(200).json(logs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
  postUser,
  postExercise,
  getLogs,
};
