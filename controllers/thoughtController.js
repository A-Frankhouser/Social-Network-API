const { User, Thought } = require('../models');

module.exports = {

    // Get all thoughts.
    getThought(req, res) {
        Thought.find({})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // Gets a single thought.
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) =>
                !thought 
                    ? res.status(404).json({ message: 'Sorry, no thought found with this id:/ '})
                    : res.json(thought)
                )
                .catch((err) => res.status(500).json(err));
    },

    
}