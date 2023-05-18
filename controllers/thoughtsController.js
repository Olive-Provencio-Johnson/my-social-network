const { Thought } = require("../models");

const thoughtsController = {
    // get all available thoughts
  async getThoughts(req, res) {
    try {
        const dbThought = await Thought.find();
        res.json(dbThought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // create a thought
  async createThought(req, res) {
    try {
        const dbThought = await Thought.create(req.body);
        res.json(dbThought);
      } catch (err) {
        res.status(500).json(err);
      }
  },

  // get one single thought 
  async getSingleThought(req, res) {
    try {
        const dbThought = await Thought.findOne({ _id: req.params.thoughtId });
        
        if (!dbThought) {
            return res.status(404).json({ message: 'No thought found with that id' });
        }

        res.json(dbThought);
      } catch(err) {
        res.status(500).json(err);
      };
  },

  async deleteSingleThought(req, res) {
    try {
      const dbThought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thoughtId) {
        return res.status(404).json({ message: 'No thought was found with this id!' })
      }

      res.json({ message: 'Your thought was successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = thoughtsController;
