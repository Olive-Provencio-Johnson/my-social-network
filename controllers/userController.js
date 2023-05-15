const { User, Thought } = require("../models");

const userController = {

  getUsers(req, res) {
    User.find()
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createUser(req, res) {
    User.create()
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    });
  },
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
