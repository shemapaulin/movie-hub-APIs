import express from "express";
import dotenv from "dotenv";
import { movieHub } from "./index.js";

const app = express();


app.use(express.json());

app.use('/api', movieHub);


app.listen(4000, () => {
    console.log("port : 4000");
  })