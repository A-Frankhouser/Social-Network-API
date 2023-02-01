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

    // Create a thought.
    createThought(req, res) {
        Thought.create(req.body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: 'Sorry, no thought found with this id:/ ' })
                    : res.json(thought)
                )
                .catch((err) => res.status(500).json(err));
    },

    // Update a thought.
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'Sorry, no thought found with this id:/ ' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a thought.
    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "Sorry, no thought found with this id:/ " })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((user) =>
            !user
                ? res.status(404).json({ message: 'Sorry! The thought was deleted, but no user was found:/' })
                : res.json({ message: "The thought was deleted 🥳 " })
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a reaction.
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true}
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'Sorry, no thought found with this id:/ '})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    }
}