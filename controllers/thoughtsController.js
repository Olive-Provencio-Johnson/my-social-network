const { Thought, User } = require("../models");

const thoughtsController = {
    // get all available thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((dbThought) => {
        res.json(dbThought);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // create a thought
  createThoughts(req, res) {
    Thought.create()
      .then((dbThought) => {
        res.json(dbThought);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // get one single thought 
  getSingleThought(req, res) {
    Thought.findOne()
      .then((dbThought) => {
        res.json(dbThought);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = thoughtsController;
