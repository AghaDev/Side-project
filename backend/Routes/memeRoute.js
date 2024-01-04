import memeController from "../Controllers/memeContoller.js";
import express from "express";
import upload from "../Middleware/Multer.js";

const Router = express.Router();

Router.get('/' , memeController.getAllMemes);

Router.get('/:id' , memeController.getMemeById);

Router.post('/:id' , upload.single('image'), memeController.createMeme);

Router.delete('/:id' , memeController.deleteMeme);

Router.patch('/:id' ,upload.single('image'), memeController.updateMeme);

export default Router;





