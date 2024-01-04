import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import memeRoutes from "../backend/Routes/memeRoute.js";
import userRoutes from "../backend/Routes/userRoute.js";

const app = express();
app.use(express.json());

app.use(cors());
app.use('/meme', memeRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log("connected to db & running on port", process.env.PORT);
  });



