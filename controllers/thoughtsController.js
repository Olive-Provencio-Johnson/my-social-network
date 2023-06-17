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
      const dbThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thoughtId) {
        return res.status(404).json({ message: 'No thought was found with this id!' })
      }

      res.json({ message: 'Your thought was successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  }, 
  // update a single thought 
  async updateThought(req, res) {
    try {
      const dbThought = await Thought.findOneAndUpdate ({ _id: req.params.thoughtId });

      if (!dbThought) {
        return res.status(404).json({ message: 'No thought was found with this id!' })
      }

      res.json({ message: 'Your update to this thought was successfully updated!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add or update a reaction to a single thought 
  async updateReaction(req, res) {
    try {
      const dbThought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!dbThought) {
        return res.status(404).json({ message: 'No thought was found with this id!' })
      }

      dbThought.reaction.push(req.body);
      const updatedThought = await dbThought.save();

      res.json({ message: 'Your reaction to this thought was successfully added or updated!', updatedThought });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = thoughtsController;
