const { User } = require("../models");

const userController = {
  // get all available users
  async getUsers(req, res) {
    try {
        const dbUser = await User.find();
        res.json(dbUser);
    } catch(err) {
        res.status(500).json(err);
    }
  },

  //create a single user
  async createUser(req, res) {
    try {
      const dbUser = await User.create(req.body);
      res.json(dbUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get a single user
  async getSingleUser(req, res) {
    try {
      const dbUser = await User.findOne({ _id: req.params.userId });

      if (!dbUser) {
        return res.status(404).json({ message: "No user found with that ID" });
      }

      res.json(dbUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
