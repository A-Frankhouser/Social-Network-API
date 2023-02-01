const { User, Thought } = require('../models');

module.exports = {
    // Gets all Users
    getUser(req, res) {
        User.find({})
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    
    // Gets a single User
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' })
        .select('-__v')
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'Sorry, no User found with that ID!'})
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a User
    createUser(req,res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    // Update a User
    updateUser(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'Sorry, no User found with this ID!'})
                    : res.json(user)
                )
                .catch((err) => res.status(500).json(err));
    },

    // Delete a User
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'Sorry, no User found with this ID!'})
                    : Thought.deleteMany({ _id: { $in: user.thoughts }})
                )
                .then(() => res.json({ message: 'The User and Thought was deleted :D'}))
                .catch((err) => res.status(500).json(err));
    },

    // Add a Friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'Sorry, no User found with this ID!' })
                    : res.json(user)
                )
                .catch((err) => res.status(500).json(err));
    },

    // Delete a friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
        .then(
            (user) => 
                !user
                    ? res.status(404).json({ message: 'Sorry, no User found with this ID!'})
                    : res.json(user)
        )
        .catch((err) => res.status(505).json(err));
    },
};