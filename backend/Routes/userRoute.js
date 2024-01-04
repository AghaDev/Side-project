import userController from "../Controllers/userController.js";
import express from "express";

const Router = express.Router();

Router.get('/' , userController.getAllUsers);

Router.get('/:id' , userController.getUser);

Router.post('/' , userController.createUser);

Router.delete('/:id' , userController.deleteUser);

Router.patch('/:id' , userController.updateUser);

Router.post('/login' , userController.loginUser);

export default Router;





