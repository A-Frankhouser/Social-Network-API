const router = require('express').Router();

const {
    getUser,
    getSingle,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController')

