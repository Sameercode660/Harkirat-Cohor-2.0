import express, { Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import { ConnectDB } from "./db/connection.db";
import { userRouter } from "./routes/userRouter.routes";

config();

const app = express();

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is listening on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use("/v1/user", userRouter)
