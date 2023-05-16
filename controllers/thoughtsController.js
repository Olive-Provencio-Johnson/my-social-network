const { Thought, Thought } = require("../models");

const thoughtsController = {

  getThoughts(req, res) {
    Thought.find()
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createThoughts(req, res) {
    Thought.create()
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    });
  },
  getSingleThought(req, res) {
    Thought.findOne()
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    })
  },

};

module.exports = thoughtsController;
