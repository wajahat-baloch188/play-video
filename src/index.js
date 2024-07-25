// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

ConnectDB(); //Database Connected Successfully

/*
import express from "express";

const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("Error", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on Port, ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
