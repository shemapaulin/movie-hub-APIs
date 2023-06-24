import express from "express";
import dotenv from "dotenv";
import { movieHub } from "./index.js";
dotenv.config();

const port=process.env.PORT

const app = express();


app.use(express.json());

app.use('/api', movieHub);


app.listen(port, () => {
    console.log(`Server is running to the port ${port}`);
  })