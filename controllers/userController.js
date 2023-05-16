const { User, Thought } = require("../models");

const userController = {

    // get all available users
  getUsers(req, res) {
    User.find()
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //create a single user
  createUser(req, res) {
    User.create()
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    });
  },

// get a single user
  getSingleUser(req, res) {
    User.findOne()
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    })
  },

};

module.exports = userController;
