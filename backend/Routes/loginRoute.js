import userController from "../Controllers/userController.js";
import express from "express";

const Router = express.Router();

Router.post('/login' , userController.loginUser);

Router.post('/' , userController.createUser);


export default Router;





