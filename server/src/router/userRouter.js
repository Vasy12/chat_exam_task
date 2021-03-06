const userRouter = require('express').Router();
const {saveProfilePicture} = require('./../middleware/multer.js');
const {createUser, deleteUserById, getUserByID, updateUserById} = require('../controllers/user.controller.js');
const findUserByLogin = require('./../middleware/findUserByLogin.js');
const comparePassword = require('./../middleware/comparePassword.js');

userRouter.post('/sign_up',
    saveProfilePicture,
    (req, res, next) => {
        if (req.file) {
            req.body.profilePicture = req.file.filename;
        }
        next();
    },
    createUser);

userRouter.post('/login',
    findUserByLogin,
    comparePassword,
    (req, res) => {
        const {user: {id, login, profilePicture}} = req;
        req.preparedUser = {
            id,
            login,
            profilePicture
        };
        res.status(200).send(req.preparedUser)
    },
);

userRouter.route('/user(/:id)?')
    .get(getUserByID)
    .patch(updateUserById)
    .delete(deleteUserById)

module.exports = userRouter;