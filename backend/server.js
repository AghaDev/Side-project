import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import memeRoutes from "../backend/Routes/memeRoute.js";
import userRoutes from "../backend/Routes/userRoute.js";
import loginRoute from "../backend/Routes/loginRoute.js";
import {protectedToken} from "./Middleware/Authentication.js"


const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));


app.use(cors());
app.use('/user', loginRoute);
app.use('/meme', memeRoutes);
app.use('/user',protectedToken, userRoutes);


app.listen(process.env.PORT, () => {
    console.log("connected to db & running on port", process.env.PORT);
  });



